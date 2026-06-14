"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const SERVICE_OPTIONS = [
  "Terrace Gardening",
  "Vertical Garden",
  "Hydroponics",
  "Landscaping",
  "Microgreens Training",
  "Consultation",
  "Other",
];

type FormState = "idle" | "sending" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

/**
 * Premium contact form with floating labels, real-time validation,
 * and animated success state.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return undefined;
      case "phone":
        if (!value.trim()) return "Phone is required";
        if (!/^[\d\s\-+()]{7,20}$/.test(value))
          return "Please enter a valid phone number";
        return undefined;
      case "service":
        if (!value) return "Please select a service";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FieldErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setFormState("success");
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
    } catch {
      setFormState("error");
    }
  };

  const inputClasses = (fieldName: string) =>
    cn(
      "w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200",
      "bg-white text-charcoal-900 placeholder:text-charcoal-400",
      "focus:outline-none focus:ring-2 focus:ring-offset-0",
      errors[fieldName as keyof FieldErrors] && touched[fieldName]
        ? "border-red-300 focus:ring-red-400"
        : "border-cream-200 focus:border-forest-400 focus:ring-forest-200"
    );

  const labelClasses = (fieldName: string) =>
    cn(
      "text-sm font-medium transition-colors duration-200",
      errors[fieldName as keyof FieldErrors] && touched[fieldName]
        ? "text-red-600"
        : "text-charcoal-700"
    );

  // Success state
  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle className="h-16 w-16 text-forest-500" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl font-bold text-forest-900"
        >
          Thank You!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-sm text-charcoal-500"
        >
          We&apos;ve received your message and will get back to you within 24
          hours. In the meantime, feel free to reach out on WhatsApp for a
          faster response.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setFormState("idle")}
          className="mt-6 rounded-xl bg-forest-100 px-6 py-2.5 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-200"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses("name")}>
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your full name"
          className={cn(inputClasses("name"), "mt-1.5")}
          autoComplete="name"
        />
        {errors.name && touched.name && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses("email")}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your@email.com"
          className={cn(inputClasses("email"), "mt-1.5")}
          autoComplete="email"
        />
        {errors.email && touched.email && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses("phone")}>
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+91 98400 28852"
          className={cn(inputClasses("phone"), "mt-1.5")}
          autoComplete="tel"
        />
        {errors.phone && touched.phone && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.phone}
          </motion.p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClasses("service")}>
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(inputClasses("service"), "mt-1.5 appearance-none")}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && touched.service && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.service}
          </motion.p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses("message")}>
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your project or what you're looking for..."
          className={cn(inputClasses("message"), "mt-1.5 resize-none")}
        />
        {errors.message && touched.message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={formState === "sending"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all",
          formState === "sending"
            ? "bg-forest-400 cursor-not-allowed"
            : "bg-forest-600 hover:bg-forest-500 shadow-forest-600/25"
        )}
      >
        {formState === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Error state */}
      <AnimatePresence>
        {formState === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-red-50 p-4 text-center text-sm text-red-600"
          >
            Something went wrong. Please try again or reach out on WhatsApp
            directly.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
