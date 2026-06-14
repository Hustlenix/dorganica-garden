import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[\d\s\-+()]+$/, "Phone number contains invalid characters"),
  service: z
    .string()
    .min(1, "Please select a service")
    .max(100),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactFormResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactFormResponse = z.infer<typeof contactFormResponseSchema>;
