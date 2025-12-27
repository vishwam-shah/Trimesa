import { Hero } from "@/components/ui/hero-1";
import { Navbar } from "@/components/ui/navbar";
import { BookCallButton } from "@/components/ui/button-rotate";
import FeatureSection from "@/components/ui/feature-section";
import Testimonials from "@/components/ui/testimonials";
import HomeLoader from "@/components/encrypted-text-demo-2";

export default function Home() {
  return (
    <HomeLoader>
      <Navbar />
      <div className="fixed top-4 right-6 z-50">
        <BookCallButton />
      </div>
      <Hero
        title="Build smarter tools for modern teams"
        subtitle="Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform."
        eyebrow="Next-Gen Productivity"
        ctaLabel="Get Started"
        ctaHref="#"
      />
      <FeatureSection />
      <Testimonials />
    </HomeLoader>
  );
}
