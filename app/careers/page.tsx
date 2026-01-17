import { Header } from "@/components/layout/header";
import { PageLoader } from "@/components/common/page-loader";
import { CareersHero } from "@/components/sections/careers/careers-hero";
import { JobListings } from "@/components/sections/careers/job-listings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Trimesha - Join Our Team",
    description: "Explore career opportunities at Trimesha and help us build the future of AI and digital technology.",
};

export default function CareersPage() {
    return (
        <PageLoader>
            <Header />
            <main className="min-h-screen">
                <CareersHero />
                <JobListings />
            </main>
        </PageLoader>
    );
}
