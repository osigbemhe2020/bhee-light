import { z } from "zod";
import { ENQUIRY_SERVICE_VALUES } from "@/data/services";
import { contactContent } from "@/data/contact";

const validation = contactContent.enquiry.validation;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, validation.fullNameMin)
    .max(100, validation.fullNameMax),
  phoneNumber: z
    .string()
    .min(10, validation.phoneMin)
    .max(20, validation.phoneMax)
    .regex(/^[+]?[\d\s-()]+$/, validation.phoneFormat),
  email: z
    .string()
    .min(1, validation.emailRequired)
    .email(validation.emailFormat),
  service: z.enum(ENQUIRY_SERVICE_VALUES, {
    message: validation.serviceRequired,
  }),
  eventDate: z.string().optional(),
  message: z
    .string()
    .min(10, validation.messageMin)
    .max(2000, validation.messageMax),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
