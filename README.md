# React Hook Form + Zod Example

Minimal example demonstrating:
- React Hook Form for form state
- Zod for validation
- Plain CSS responsive styling

Fields:
- Name (required)
- Email (required, must be valid)
- Telegram handle (optional)
- Persona dropdown (Player, Creator, Enterprise — required)

Install and run (using npm + Vite):
1. npm install
2. npm run dev
3. Open the URL printed by Vite (usually http://localhost:5173)

Notes:
- Validation errors display a red border and a red message under the input.
- This is TypeScript-ready. Adapt to plain JS by removing types and tsconfig as needed.