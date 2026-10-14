import { Button } from "@/components/shared/button";

export function CTASection() {
  return (
    <section className="w-full py-20 px-[100px] bg-background">
      <div className="max-w-[1440px] text-center">
        <h2 className="text-[48px] font-semibold text-foreground mb-6">
          Adaptable By Experience. Consistent In Purpose.
        </h2>
        <p className="text-xl text-foreground max-w-[800px] mx-auto mb-10">
          We&apos;ve learned from every challenge, celebrated every success, and evolved to better serve our clients. Our commitment to excellence remains unwavering.
        </p>
        <Button>See Our Services</Button>
      </div>
    </section>
  );
}
