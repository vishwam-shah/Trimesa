import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PageLoader } from "@/components/common/page-loader";

export default function Home() {
  return (
    <PageLoader>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </PageLoader>
  );
}
