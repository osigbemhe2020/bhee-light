"use client";

import Image from "next/image";
import { Circle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { enquirySchema, type EnquiryFormData } from "../schemas/enquiry.schema";
import { submitEnquiry } from "../services/submit-enquiry";
import type { EnquiryServiceOption } from "@/data/services";

const labelClass = "text-[14px] font-semibold leading-[17px] text-[#111110]";
const inputClass =
  "w-full rounded-md border border-[#D4D0C9] bg-[#FFFCF6] px-4 py-[14px] text-[16px] leading-[20px] text-[#111110] sm:text-[14px] sm:leading-[17px] " +
  "placeholder:text-[#625F56] focus-visible:border-[#0D733A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D733A]/25";

function Field({
  id,
  label,
  children,
  error,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 self-stretch">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <div className="text-[12px] text-red-600">{error}</div>}
    </div>
  );
}

export function EnquiryFormSection({
  serviceOptions,
}: {
  serviceOptions: EnquiryServiceOption[];
}) {
  const [dateFocused, setDateFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      service: "ushering" as const,
      eventDate: "",
      message: "",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedService = watch("service");

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await submitEnquiry(data);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit enquiry"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#FFFCF6]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col items-stretch gap-8 px-[clamp(1rem,7vw,100px)] py-8 sm:gap-10 sm:py-10 xl:flex-row xl:items-start xl:gap-[68px]">
        {/* Enquiry introduction */}
        <RevealItem className="flex w-full shrink-0 flex-col gap-6 sm:gap-7 xl:w-[430px]">
          <div className="flex flex-col gap-4">
            <SectionHeading size="wide" eyebrow="Enquiry Form" title="Send Us an Enquiry" />
            <p className="text-[16px] leading-[19px] text-[#625F56]">
              Tell us what you need and our team will get back to you.
            </p>
          </div>

          <div className="relative aspect-[430/380] w-full overflow-hidden rounded-[22px]">
            <Image
              src="/images/contact/contact-us-img.jpg"
              alt="Bhee Light client services professional answering an enquiry"
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Contact note */}
          <div className="flex items-start gap-3 rounded-xl bg-[#DCE8DF] p-4 sm:items-center sm:gap-[14px] sm:p-5">
            <ShieldCheck aria-hidden size={24} strokeWidth={1.7} className="shrink-0 text-[#123D32]" />
            <p className="text-[14px] leading-[17px] text-[#111110]">
              Share only the details relevant to your enquiry. We&apos;ll use them to understand your requirements and
              respond.
            </p>
          </div>
        </RevealItem>

        {/* Enquiry form */}
        {submitSuccess ? (
          <RevealItem className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-[22px] bg-[#DCE8DF] p-[clamp(1.25rem,2.5vw,2.25rem)] shadow-[0_12px_32px_rgba(18,61,50,0.094)]">
            <ShieldCheck size={64} strokeWidth={1.5} className="text-[#0D733A]" />
            <div className="text-center">
              <h3 className="text-[20px] font-semibold leading-[24px] text-[#092A22]">
                Enquiry Submitted Successfully
              </h3>
              <p className="mt-2 text-[14px] leading-[17px] text-[#625F56]">
                Thank you for your enquiry. Our team will get back to you shortly.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => {
                setSubmitSuccess(false);
                reset();
              }}
            >
              Submit Another Enquiry
            </Button>
          </RevealItem>
        ) : (
          <RevealItem className="min-w-0 flex-1">
          <form
            onSubmit={handleFormSubmit((data) => onSubmit(data))}
            className="flex w-full flex-col items-center gap-6 rounded-[22px] bg-[#F7F1E5] p-[clamp(1rem,2.5vw,2.25rem)] shadow-[0_12px_32px_rgba(18,61,50,0.094)] sm:gap-10"
          >
            {submitError && (
              <div className="w-full rounded-md bg-red-50 p-4 text-[14px] text-red-800">
                {submitError}
              </div>
            )}
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-[18px]">
                <Field
                  id="fullName"
                  label="Full Name"
                  error={errors.fullName?.message}
                >
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    placeholder="Enter your full name."
                    className={inputClass}
                    aria-invalid={errors.fullName ? "true" : "false"}
                  />
                </Field>
                <Field
                  id="phoneNumber"
                  label="Phone Number"
                  error={errors.phoneNumber?.message}
                >
                  <input
                    id="phoneNumber"
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="Enter your phone number."
                    className={inputClass}
                    aria-invalid={errors.phoneNumber ? "true" : "false"}
                  />
                </Field>
              </div>

              <Field id="email" label="Email Address" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email address."
                  className={inputClass}
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </Field>

              {/* Service selection */}
              <fieldset className="flex flex-col gap-2">
                <legend className={`${labelClass} mb-2`}>Service Required</legend>
                {errors.service && (
                  <span className="text-[12px] text-red-600">
                    {errors.service.message}
                  </span>
                )}
                <div className="overflow-hidden rounded-md border border-[#D4D0C9] bg-[#FFFCF6]">
                  {serviceOptions.map(({ value, label }) => {
                    const isSelected = selectedService === value;
                    return (
                      <label
                        key={value}
                        className={`flex cursor-pointer items-center justify-between border-b border-[#D4D0C9] px-4 py-3 last:border-b-0 focus-within:bg-[#F7F1E5] ${
                          isSelected ? "bg-[#F7F1E5]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register("service")}
                          className="sr-only"
                        />
                        <span
                          className={`text-[14px] leading-[17px] ${
                            isSelected ? "text-[#092A22]" : "text-[#625F56]"
                          }`}
                        >
                          {label}
                        </span>
                        {isSelected && (
                          <Circle
                            aria-hidden
                            size={16}
                            strokeWidth={2}
                            className="shrink-0 text-[#0D733A]"
                          />
                        )}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <Field id="eventDate" label="Event / Service Date">
                <input
                  id="eventDate"
                  // Text shows the placeholder; switches to a native date picker on focus
                  type={dateFocused ? "date" : "text"}
                  {...register("eventDate")}
                  onFocus={() => setDateFocused(true)}
                  onBlur={() => setDateFocused(false)}
                  placeholder="Select your preferred date if applicable."
                  className={inputClass}
                />
              </Field>

              <Field id="message" label="Message" error={errors.message?.message}>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us more about your requirements."
                  className={`${inputClass} h-[130px] resize-none`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
              </Field>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
          </RevealItem>
        )}
      </RevealGroup>
    </section>
  );
}