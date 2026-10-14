import { z } from "zod";

const SERVICES = [
  "ushering",
  "refreshments",
  "travel",
  "business",
  "general",
] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[+]?[\d\s-()]+$/, "Invalid phone number format"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  service: z.enum(SERVICES, {
    message: "Please select a service",
  }),
  eventDate: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
