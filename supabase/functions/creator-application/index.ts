// 1. IMPORTS - Importing necessary modules for HTTP server, database, and email operations.
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { Resend } from "https://esm.sh/resend@2.0.0"

// 2. INTERFACE - Defining the expected data structure from frontend submissions.
interface CreatorApplication {
    name: string        // Required for personal identification and communication.
    email: string       // Required for follow-up communication and tracking.  
    social_handle: string // Required to verify social media presence and reach.
    follower_count: number // Required to assess audience size and influence.
    niche: string       // Required to categorize and match with brand partnerships.
}

// 3. CORS HEADERS - Configuring cross-origin permissions for frontend-backend communication.
const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Allow any frontend domain during development.
    "Access-Control-Allow-Methods": "POST, OPTIONS", // Restrict to data creation only for security.
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Support JSON payloads and secure API access.
}

// 4. SERVER SETUP - Creating a single server instance to handle all incoming requests.
serve(async (req: Request) => {

    // Handle CORS preflight requests - Browser security check before sending actual data.
    if (req.method === "OPTIONS") {
        return new Response("ok", { 
            headers: corsHeaders 
        })
    }

    // Try-catch block to prevent server crashes from unexpected errors.
    try {
        // Validate HTTP method - Only allow data creation, not data reading for this endpoint.
        if (req.method !== 'POST') {
            return new Response(
                JSON.stringify({
                    error: 'Only POST method allowed' // Clear error message for frontend developers
                }),
                {   
                    status: 405, // Method Not Allowed - wrong HTTP method used.
                    headers: {
                        'Content-Type': 'application/json', // Ensures frontend recognizes this as JSON.
                        ...corsHeaders // Spread operator to include all CORS headers.
                    }
                }
            )
        }

        // Parse incoming JSON data - Convert frontend string data to JavaScript object.
        const applicationData: CreatorApplication = await req.json()

        // Log for monitoring and debugging - Track submissions in production logs.
        console.log('Received creator application:', applicationData)

        // 5. DATA VALIDATION - Ensure data quality before processing.
        const requiredFields = ['name', 'email', 'social_handle', 'follower_count', 'niche']
        
        // Check for missing required fields to prevent incomplete submissions.
        const missingFields = requiredFields.filter(field => {
            return !applicationData[field as keyof CreatorApplication]
        })

        // Return specific error if any required fields are missing.
        if (missingFields.length > 0) {
            return new Response(
                JSON.stringify({
                    error: 'Missing required fields',
                    missing: missingFields // Helps frontend developers identify exactly what's missing.
                }),
                {
                    status: 400, // Bad Request - client didn't provide required data.
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                }
            )
        }

        // Validate email format using regex to ensure valid contact information.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(applicationData.email)) {
            return new Response(
                JSON.stringify({
                    error: 'Invalid email format' // Prevent malformed emails from entering database.
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                }
            )
        }

        // Validate follower count is positive to prevent invalid data.
        if (applicationData.follower_count < 0) {
            return new Response(
                JSON.stringify({
                    error: 'Follower count must be a positive number' // Maintain data integrity.
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                }
            )
        }

        // 6. DATABASE OPERATIONS - Save validated data to persistent storage.
        // Initialize Supabase client with service role key for backend operations.
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '', // Get project URL from environment variables
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Use service role for database writes
        )

        // Insert application data into database with error handling.
        const { data, error } = await supabaseClient
            .from('creator_applications') // Target table for storage
            .insert([
                {
                    name: applicationData.name,
                    email: applicationData.email,
                    social_handle: applicationData.social_handle,
                    follower_count: applicationData.follower_count,
                    niche: applicationData.niche
                    // created_at is auto-added by database DEFAULT.
                }
            ])
            .select() // Return the inserted record for confirmation.

        // Handle database errors gracefully without exposing internal details.
        if (error) {
            console.error('Database insertion error:', error)
            return new Response(
                JSON.stringify({
                    error: 'Failed to save application' // User-friendly error message.
                }),
                {
                    status: 500, // Internal Server Error - our system failed.
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                }
            )
        }

        // 7. EMAIL NOTIFICATION - Alert admin team about new application.
        try {
            const resend = new Resend(Deno.env.get('RESEND_API_KEY') ?? '')
            
            await resend.emails.send({
                from: 'TRAIL <notifications@playtrail.so>', // Professional sender identity.
                to: Deno.env.get('ADMIN_EMAIL') ?? 'contact@playtrail.so', // Admin notification target.
                subject: 'New Creator Application', // Clear subject for quick scanning.
                html: `
                    <h2>New Creator Application Received</h2>
                    <p><strong>Name:</strong> ${applicationData.name}</p>
                    <p><strong>Email:</strong> ${applicationData.email}</p>
                    <p><strong>Social Handle:</strong> ${applicationData.social_handle}</p>
                    <p><strong>Follower Count:</strong> ${applicationData.follower_count.toLocaleString()}</p>
                    <p><strong>Niche:</strong> ${applicationData.niche}</p>
                    <p><strong>Application ID:</strong> ${data[0].id}</p>
                    <br>
                    <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
                ` // Structured HTML for easy reading in email clients.
            })
        } catch (emailError) {
            // Log email failure but don't fail the request - application is already saved.
            console.error('Email notification failed:', emailError)
            // Continue with success response since database save worked.
        }

        // 8. SUCCESS RESPONSE - Confirm successful submission to frontend.
        return new Response(
            JSON.stringify({
                success: true,
                message: 'Creator application submitted successfully!',
                application_id: data[0].id, // Return database ID for future reference.
                data: applicationData // Echo back submitted data for confirmation.
            }),
            {
                status: 201, // 201 Created - successful resource creation.
                headers: {
                    'Content-Type': 'application/json',
                    ...corsHeaders
                }
            }
        )

    } catch (error) {
        // Handle JSON parsing errors and other unexpected issues.
        console.error('Error processing request:', error)
        return new Response(
            JSON.stringify({
                error: 'Invalid request data' // Generic error to avoid exposing internal details.
            }),
            {
                status: 400, // Bad Request - client sent malformed data.
                headers: {
                    'Content-Type': 'application/json',
                    ...corsHeaders
                }
            }
        )
    }
})