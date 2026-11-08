/*
  ContactPage
  ===========
  Contact page at /contact.

  Architecture decisions:
  - The form has full client-side validation but does NOT submit to
    any backend. A clearly visible notice explains this to visitors.
    When a real form submission service (e.g. Resend, Formspree, or a
    custom API) is integrated, only the handleSubmit function needs to
    be updated — the form UI stays unchanged.
  - Controlled form with a single state object rather than individual
    useState calls per field — cleaner and easier to extend.
  - Validation runs on submit, not on every keystroke, to avoid
    irritating the user with premature errors.
  - Field errors clear as the user corrects them (onChange clears
    the relevant error).
*/

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import { Container, SectionHeader, Button, GitHubIcon, LinkedInIcon } from '@/components/shared';
import { socialLinks, email } from '@/data/social';

const iconMap: Record<string, React.FC<{ size?: number; className?: string; 'aria-hidden'?: boolean }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<FormFields>;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

const emptyForm: FormFields = { name: '', email: '', subject: '', message: '' };

/* ------------------------------------------------------------------ */

function FormField({
  id,
  label,
  error,
  children,
  required = false,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[var(--color-text-primary)] text-sm font-medium"
      >
        {label}
        {required && (
          <span className="text-[var(--color-accent)] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[var(--color-error)] text-xs mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses = [
  'w-full px-4 py-3 text-sm rounded-[var(--radius-md)]',
  'bg-[var(--color-surface)] text-[var(--color-text-primary)]',
  'border border-[var(--color-border)]',
  'placeholder:text-[var(--color-text-tertiary)]',
  'focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]',
  'transition-colors duration-[var(--transition-fast)]',
].join(' ');

/* ------------------------------------------------------------------ */

export function ContactPage() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    /*
      TODO: Integrate a form submission service here.
      Options: Resend API, Formspree, Netlify Forms, or a custom
      serverless function. Until then, we show a success state
      to demonstrate the form flow without sending anything.
    */
    setSubmitted(true);
  }

  return (
    <div className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Contact"
              title="Get in Touch"
              description="Have a project, a question or just want to connect? Send a message and I will get back to you."
            />

            {/* Direct email */}
            <div className="flex flex-col gap-2">
              <p className="text-[var(--color-text-tertiary)] text-xs font-semibold uppercase tracking-widest">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-[var(--color-text-primary)] text-base hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
              >
                <Mail size={16} aria-hidden="true" />
                {email}
              </a>
              <p className="text-[var(--color-text-tertiary)] text-xs italic">
                Email address is a placeholder — will be updated.
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <p className="text-[var(--color-text-tertiary)] text-xs font-semibold uppercase tracking-widest">
                Based in
              </p>
              <div className="flex items-center gap-2 text-[var(--color-text-primary)] text-base">
                <MapPin size={16} aria-hidden="true" />
                Lusaka, Zambia
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <p className="text-[var(--color-text-tertiary)] text-xs font-semibold uppercase tracking-widest">
                Elsewhere
              </p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.platform];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-2.5 text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
                    >
                      {Icon && <Icon size={15} aria-hidden />}
                      {link.platform}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card-surface p-6 md:p-8">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle
                  size={40}
                  className="text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <h2 className="text-[var(--color-text-primary)] font-semibold text-lg">
                  Message received
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. This is a demonstration of the
                  form flow — no message has been sent yet. Submission
                  integration will be added soon.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFields(emptyForm);
                    setErrors({});
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="flex flex-col gap-5"
              >
                {/* Form not yet wired to a backend */}
                <div className="rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed">
                    This form is not yet connected to a mail service. It
                    demonstrates the form interface and validation. Submission
                    integration will be configured soon.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField id="name" label="Full Name" error={errors.name} required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={inputClasses}
                    />
                  </FormField>

                  <FormField id="email" label="Email Address" error={errors.email} required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={fields.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      className={inputClasses}
                    />
                  </FormField>
                </div>

                <FormField id="subject" label="Subject" error={errors.subject} required>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={fields.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    className={inputClasses}
                  />
                </FormField>

                <FormField id="message" label="Message" error={errors.message} required>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or enquiry..."
                    value={fields.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    className={[inputClasses, 'resize-y min-h-[120px]'].join(' ')}
                  />
                </FormField>

                <Button variant="primary" size="lg" fullWidth type="submit">
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
}
