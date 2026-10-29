"use server";

import { enquirySchema, type EnquiryFormData } from "../schemas/enquiry.schema";
import { sendMailgunEmail } from "@/lib/api/mailgun";
import { enquiryServiceOptions } from "@/data/services";

const SERVICE_LABELS = Object.fromEntries(enquiryServiceOptions.map(({ value, label }) => [value, label]));

export async function submitEnquiry(data: EnquiryFormData) {
  // Validate the data
  const validatedData = enquirySchema.parse(data);

  const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL;
  const senderEmail =
    process.env.ENQUIRY_SENDER_EMAIL || `noreply@${process.env.MAILGUN_DOMAIN}`;

  if (!recipientEmail) {
    throw new Error("ENQUIRY_RECIPIENT_EMAIL environment variable is not set");
  }

  // Create email content
  const subject = `New Enquiry: ${SERVICE_LABELS[validatedData.service]} - ${validatedData.fullName}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #0D733A; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0D733A; }
        .value { margin-top: 5px; }
        .footer { margin-top: 20px; padding: 10px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Enquiry Received</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${validatedData.fullName}</div>
          </div>
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${validatedData.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">${validatedData.phoneNumber}</div>
          </div>
          <div class="field">
            <div class="label">Service Required:</div>
            <div class="value">${SERVICE_LABELS[validatedData.service]}</div>
          </div>
          ${validatedData.eventDate ? `
          <div class="field">
            <div class="label">Event / Service Date:</div>
            <div class="value">${validatedData.eventDate}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          <p>This enquiry was submitted via the Bhee Light website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Enquiry Received

Full Name: ${validatedData.fullName}
Email Address: ${validatedData.email}
Phone Number: ${validatedData.phoneNumber}
Service Required: ${SERVICE_LABELS[validatedData.service]}
${validatedData.eventDate ? `Event / Service Date: ${validatedData.eventDate}` : ''}

Message:
${validatedData.message}

---
This enquiry was submitted via the Bhee Light website contact form.
  `;

  // Send the email
  await sendMailgunEmail({
    to: recipientEmail,
    from: senderEmail,
    subject,
    html,
    text,
  });

  return { success: true };
}
