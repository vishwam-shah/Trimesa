"use client";

import { Hero } from "@/components/ui/hero";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  ctaLabel?: string;
}

export function HeroSection({
  title = "Build smarter tools for modern teams",
  subtitle = "Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform.",
  eyebrow = "Next-Gen Productivity",
  ctaLabel = "Get Started",
}: HeroSectionProps) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      ctaLabel={ctaLabel}
    />
  );
}

export default HeroSection;
