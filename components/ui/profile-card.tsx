import * as React from "react";
import { cn } from "@/lib/utils";

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag: React.ReactNode;
  stats: string;
  href: string;
  themeColor: string;
  desc?: string;
}

const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ className, imageUrl, location, flag, stats, href, themeColor, desc, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg \
                     transition-all duration-500 ease-in-out \
                     group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`Explore details for ${location}`}
          style={{
             boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center \
                       transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
            }}
          />
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              {location} {flag && (
                <span className="text-2xl ml-1" role="img" aria-label="flag">
                  {flag}
                </span>
              )}
            </h3>
            <p className="text-sm text-white/80 mt-1 font-medium">{stats}</p>
            {desc && (
              <p className="text-xs text-white/70 mt-1 font-normal">{desc}</p>
            )}
          </div>
        </a>
      </div>
    );
  }
);
ProfileCard.displayName = "ProfileCard";

export { ProfileCard };
