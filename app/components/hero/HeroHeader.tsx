import Link from "next/link";
import { RefObject } from "react";

interface HeroHeaderProps {
  heroHeaderContainerRef: RefObject<HTMLDivElement | null>;
  heroHeaderTextRef: RefObject<HTMLHeadingElement | null>;
  heroButtonRef: RefObject<HTMLAnchorElement | null>;
}

export const HeroHeader = ({heroHeaderContainerRef, heroHeaderTextRef, heroButtonRef}: HeroHeaderProps) => {
  return (
    <div
      ref={heroHeaderContainerRef}
      className="hero-header font-jetbrains-mono absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[45%] flex flex-col items-center gap-3 text-white pointer-events-none will-change-transform"
    >
      <h1
        ref={heroHeaderTextRef}
        className="text-xl font-medium leading-relaxed md:text-2xl"
      >
        Experience legendary machines through cinematic storytelling, immersive
        visuals, and an AI-powered automotive companion.
      </h1>
      <Link
        href="#"
        className="px-6 py-3 text-white border pointer-events-auto bo btn rounded-3xl border-accent"
        ref={heroButtonRef}
      >
        Explore Garage
      </Link>
    </div>
  );
};
