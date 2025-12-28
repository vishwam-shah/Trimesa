"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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
        // light styles
        "border-gray-950/10 bg-gray-950/10 hover:bg-gray-950/5",
        // dark styles
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

import CoFounderSection from "@/components/ui/co-founder";

export default function Testimonials() {
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
      <CoFounderSection />
    </>
  );
}
