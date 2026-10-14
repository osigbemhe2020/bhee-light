import { Button } from "@/components/shared/button";

export function WhatsAppSection() {
  return (
    <section className="w-full bg-background px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-[100px] lg:py-20">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-dark-green">
          Chat With Us On WhatsApp
        </h2>
        <p className="text-[16px] text-gray-2 mb-8 max-w-[600px] mx-auto">
          Get instant responses to your questions. Our team is available on WhatsApp to assist you.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button>Chat With Us on WhatsApp</Button>
          <p className="text-lg text-foreground font-semibold">09162779962</p>
        </div>
      </div>
    </section>
  );
}
