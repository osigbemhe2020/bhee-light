interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  accentColor?: "orange" | "white" | "black";
  align?: "left" | "center";
  size?: "default" | "wide" | "compact" | "large" | "hero";
  as?: "h1" | "h2";
  titleColor?: "accent" | "foreground";
}


export function SectionHeading({
  eyebrow,
  title,
  description,
  accentColor = "orange",
  align = "left",
  size = "default",
  as: TitleTag = "h2",
  titleColor = "accent",
}: SectionHeadingProps) {
  const accentStyles = {
    orange: { bar: "bg-orange", text: "text-orange" },
    white: { bar: "bg-white", text: "text-white" },
    black: { bar: "bg-foreground", text: "text-foreground" },
  };

  const titleStyles = {
    orange: "text-dark-green",
    white: "text-white",
    black: "text-foreground",
  };

  const descriptionStyles = {
    orange: "text-foreground",
    white: "text-white/90",
    black: "text-foreground",
  };

  const currentAccent = accentStyles[accentColor];
  const currentTitleColor = titleColor === "foreground" ? "text-foreground" : titleStyles[accentColor];
  const alignmentStyles = align === "center" ? "w-full items-center text-center" : "";
  const eyebrowAlignment = align === "center" ? "justify-center" : "";

  const sizeStyles = {
    default: {
      container: "max-w-[600px] gap-4",
      eyebrow: "text-sm",
      title: "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] max-w-[760px]",
      description: "text-[16px]",
    },
    // Same as default, but the heading can use the full width of its column
    wide: {
      container: "w-full max-w-none gap-4",
      eyebrow: "text-sm",
      title: "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] max-w-none",
      description: "text-[16px]",
    },
    compact: {
      container: "w-full max-w-none gap-2",
      eyebrow: "text-sm",
      title: "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] max-w-none",
      description: "text-[16px]",
    },
    large: {
      container: "w-full max-w-none gap-4",
      eyebrow: "text-[clamp(1rem,1.2vw,1.5rem)]",
      title: "text-[clamp(2rem,3.2vw,4rem)] leading-[1.2] max-w-none",
      description: "text-[clamp(1rem,1.3vw,1.5rem)]",
    },
    hero: {
      container: "w-full max-w-none gap-2",
      eyebrow: "text-sm",
      title: "text-[clamp(1.875rem,4.2vw,3.75rem)] leading-[1.2] max-w-none",
      description: "text-[16px]",
    },
  }[size];

  return (
    <div className={`flex flex-col ${sizeStyles.container} ${alignmentStyles}`}>
      <div className={`flex items-center gap-2.5 ${eyebrowAlignment}`}>
        <div className={`h-px w-[28px] ${currentAccent.bar}`} />
        <span className={`${sizeStyles.eyebrow} font-semibold uppercase ${currentAccent.text}`}>
          {eyebrow}
        </span>
      </div>
      <TitleTag className={`${sizeStyles.title} font-semibold ${currentTitleColor}`}>{title}</TitleTag>
      {description && (
        <p className={`${sizeStyles.description} ${descriptionStyles[accentColor]}`}>{description}</p>
      )}
    </div>
  );
}