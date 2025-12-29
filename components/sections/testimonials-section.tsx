"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { ProfileCard } from "@/components/ui/profile-card";

const reviews = [
  {
    name: "Siddhant M.",
    username: "@siddhantmehta02",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/testimonial/Siddhant_01.JPG",
  },
  {
    name: "Vishwam S.",
    username: "@vishwamshah07",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/testimonial/vishwam_01.jpeg",
  },
  {
    name: "Jay T.",
    username: "@jaytreivedi06",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/testimonial/jay_01.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/10 bg-gray-950/10 hover:bg-gray-950/5",
        "dark:border-gray-50/5 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="w-10 h-10 relative shrink-0">
          <Image
            src={img}
            alt={`Profile picture of ${name}`}
            fill
            className="rounded-full object-cover"
            sizes="40px"
            priority
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const IndianFlag = (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#fff"/>
    <rect y="0" width="28" height="6.67" fill="#FF9933"/>
    <rect y="13.33" width="28" height="6.67" fill="#138808"/>
    <circle cx="14" cy="10" r="2.2" stroke="#000088" strokeWidth="0.8" fill="#fff"/>
    <circle cx="14" cy="10" r="1.2" fill="#000088"/>
  </svg>
);

const coFounders = [
  {
    imageUrl: "/testimonial/Siddhant_01.JPG",
    location: "Siddhant Mehta",
    flag: IndianFlag,
    stats: "Co-Founder",
    desc: "Lead Software Engineer",
    href: "#",
    themeColor: "150 50% 25%",
  },
  {
    imageUrl: "/testimonial/vishwam_01.jpeg",
    location: "Vishwam Shah",
    flag: IndianFlag,
    stats: "Co-Founder",
    desc: "AI Developer",
    href: "#",
    themeColor: "250 50% 30%",
  },
  {
    imageUrl: "/testimonial/Jay_01.jpg",
    location: "Jay Trivedi",
    flag: IndianFlag,
    stats: "Co-Founder",
    desc: "AI Researcher",
    href: "#",
    themeColor: "30 70% 40%",
  },
];

export function TestimonialsSection() {
  return (
    <>
      <section className="relative w-full py-20 bg-background">
        <div className="mx-auto max-w-5xl mb-12 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their workflow
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="w-full py-20 bg-background">
        <div className="mx-auto max-w-5xl mb-12 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Co-Founders
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">
          {coFounders.map((founder) => (
            <div key={founder.location} className="w-full max-w-[320px] h-112.5">
              <ProfileCard {...founder} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;
