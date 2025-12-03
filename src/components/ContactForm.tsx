import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const PERSONA = ["Player", "Creator", "Enterprise"] as const;

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Must be a valid email"),
  
  telegram: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z.string().optional()
  ),
  persona: z.enum(PERSONA, { errorMap: () => ({ message: "Persona is required" }) }),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", telegram: "", persona: undefined as any },
  });

  const onSubmit = (data: FormValues) => {
   
    console.log("Submitted:", data);
    alert("Submitted:\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <div className="form-row">
          <label htmlFor="name">Name<span className="required">*</span></label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={errors.name ? "input input--error" : "input"}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="error-text" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email<span className="required">*</span></label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "input input--error" : "input"}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error-text" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="telegram">Telegram handle</label>
          <input
            id="telegram"
            type="text"
            placeholder="@yourhandle"
            {...register("telegram")}
            className={errors.telegram ? "input input--error" : "input"}
            aria-invalid={errors.telegram ? "true" : "false"}
            aria-describedby={errors.telegram ? "telegram-error" : undefined}
          />
          {errors.telegram && (
            <p id="telegram-error" className="error-text" role="alert">
              {errors.telegram.message}
            </p>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="persona">Persona<span className="required">*</span></label>
          <select
            id="persona"
            {...register("persona" as const)}
            className={errors.persona ? "input input--error" : "input"}
            aria-invalid={errors.persona ? "true" : "false"}
            aria-describedby={errors.persona ? "persona-error" : undefined}
            defaultValue=""
          >
            <option value="">Select persona</option>
            {PERSONA.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.persona && (
            <p id="persona-error" className="error-text" role="alert">
              {errors.persona.message}
            </p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <button
          type="button"
          className="btn btn--muted"
          onClick={() => reset()}
          disabled={isSubmitting}
        >
          Reset
        </button>
      </div>
    </form>
  );
}