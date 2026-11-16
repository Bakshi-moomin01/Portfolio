import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { ActionButton } from "./ui-kit";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const inputClass =
  "w-full rounded-lg border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name (min. 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Message must be at least 10 characters.";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    // No email backend is connected yet — this only records the message locally.
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  }

  const field = (key: keyof Errors) => ({
    id: key,
    name: key,
    value: values[key],
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value })),
    className: inputClass,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input type="text" autoComplete="name" placeholder="Your name" {...field("name")} />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea rows={5} placeholder="How can I help?" {...field("message")} />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <ActionButton type="submit" className="w-full">
        <Send className="size-4" aria-hidden="true" />
        Send Message
      </ActionButton>

      <div aria-live="polite">
        {sent && (
          <p className="flex items-start gap-2 rounded-lg border border-primary/30 bg-surface px-3 py-2.5 text-xs text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            Details validated. No email service is connected yet, so please use the Email Me link
            for a direct reply.
          </p>
        )}
      </div>
    </form>
  );
}
