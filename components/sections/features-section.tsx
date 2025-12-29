"use client";

import { CardStack, type CardData } from "@/components/ui/card-stack";
import { Icon } from "@iconify/react";

const digitalServices: CardData[] = [
  {
    id: "1",
    title: "Web Development",
    description: "We craft high-performance, SEO-optimized websites and web applications using cutting-edge technologies like Next.js, React, and TypeScript.",
    icon: <Icon icon="line-md:document-code" className="w-16 h-16" />,
  },
  {
    id: "2",
    title: "Mobile Applications",
    description: "Build powerful native iOS and Android applications with React Native and Flutter for seamless cross-platform experiences.",
    icon: <Icon icon="line-md:phone-call-loop" className="w-16 h-16" />,
  },
  {
    id: "3",
    title: "Custom Software",
    description: "Enterprise-grade software solutions tailored to your unique business needs. CRM systems, ERP solutions, and workflow automation.",
    icon: <Icon icon="line-md:cog-loop" className="w-16 h-16" />,
  },
  {
    id: "4",
    title: "UI/UX Design",
    description: "Transform your vision into stunning, user-centered interfaces through research-driven wireframes, prototypes, and design systems.",
    icon: <Icon icon="line-md:paint-drop-half-filled-loop" className="w-16 h-16" />,
  },
  {
    id: "5",
    title: "Cloud Infrastructure",
    description: "Deploy and scale with confidence on AWS, Azure, or Google Cloud with CI/CD pipelines and 99.9% uptime guarantee.",
    icon: <Icon icon="line-md:cloud-alt-download-loop" className="w-16 h-16" />,
  },
  {
    id: "6",
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions, penetration testing, and 24/7 threat monitoring.",
    icon: <Icon icon="line-md:shield-check" className="w-16 h-16" />,
  },
  {
    id: "7",
    title: "API Development",
    description: "Build robust RESTful and GraphQL APIs with scalable microservices architecture and seamless third-party integrations.",
    icon: <Icon icon="line-md:lightning-loop" className="w-16 h-16" />,
  },
  {
    id: "8",
    title: "Data Analytics",
    description: "Unlock the power of your data with AI-driven analytics, custom dashboards, and machine learning models.",
    icon: <Icon icon="line-md:speedometer-loop" className="w-16 h-16" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full py-20 bg-background">
      <div className="mx-auto max-w-5xl mb-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What We Provide
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          End-to-end digital solutions to transform your business and accelerate growth
        </p>
      </div>

      <div className="flex items-center justify-center min-h-100 mx-auto px-4">
        <CardStack
          cards={digitalServices}
          autoPlayInterval={3000}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
