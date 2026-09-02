"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { Columns } from "./Columns";
import { HeroHeader } from "./HeroHeader";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const colOne = [
  "https://i.pinimg.com/736x/e3/aa/9c/e3aa9ce17ab53f854ec61042b2a3dc1f.jpg",
  "https://i.pinimg.com/736x/a0/d3/14/a0d314111d86d1577f092ab9a2bbf1c6.jpg",
  "https://i.pinimg.com/736x/22/c5/2f/22c52f46ca0c00d69ee11cb7019f70d4.jpg",
];

const colTwo = [
  "/images/1-v2.jpg",
  "/videos/hero-v2.mp4",
  "https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg",
];

const colThree = [
  "https://i.pinimg.com/736x/b3/1f/26/b31f266d699f7695524c0b4145bd4797.jpg",
  "https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg",
  "/images/2-v2.jpg",
];

const MOBILE_BREAKPOINT = 1000;

export default function Hero() {
  // Root element used only for GSAP scoping.
  const rootRef = useRef<HTMLElement | null>(null);

  // Actual element ScrollTrigger pins.
  const heroRef = useRef<HTMLDivElement | null>(null);

  const heroHeaderTextRef = useRef<HTMLHeadingElement | null>(null);
  const heroFooterRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const heroButtonRef = useRef<HTMLAnchorElement | null>(null);
  const heroHeaderContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      if (!spotlightRef.current) return;
      if (!heroHeaderTextRef.current) return;

      /*
       * ----------------------------------------
       * INTRO TEXT ANIMATION
       * ----------------------------------------
       */

      const headerSplit = SplitText.create(heroHeaderTextRef.current, {
        type: "words",
        wordsClass: "word",
      });

      const headerFadeTargets = [
        ...headerSplit.words,
        heroButtonRef.current,
      ].filter(Boolean);

      gsap.set(headerFadeTargets, {
        opacity: 0,
        y: 20,
      });

      gsap.to(headerFadeTargets, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2,
      });

      /*
       * ----------------------------------------
       * RESPONSIVE SCROLL ANIMATIONS
       * ----------------------------------------
       */

      const mm = gsap.matchMedia();

      /*
       * DESKTOP
       */
      mm.add(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`, () => {
        const hero = heroRef.current;
        const spotlight = spotlightRef.current;

        if (!hero || !spotlight) return;

        gsap.set(spotlight, {
          scale: 3,
        });

        gsap.set(heroHeaderContainerRef.current, {
          clearProps: "transform,opacity,filter",
        });

        gsap.set(heroFooterRef.current, {
          clearProps: "transform,opacity,filter",
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            id: "hero-desktop",

            trigger: hero,

            start: "top top",

            // Use the actual pinned element's height
            // instead of window.innerHeight.
            end: () => `+=${hero.offsetHeight * 3}`,

            pin: true,

            // Important when other sections come after Hero.
            pinSpacing: true,

            scrub: 1,

            invalidateOnRefresh: true,

            // Hero is the first major pinned section,
            // so calculate it before sections below.
            refreshPriority: 10,

            anticipatePin: 1,

            // Enable while debugging:
            // markers: true,
          },
        });

        tl.to(
          spotlight,
          {
            scale: 1,
          },
          0,
        );

        tl.to(
          heroHeaderContainerRef.current,
          {
            scale: 0.5,
            opacity: 0,
            filter: "blur(10px)",
          },
          0,
        );

        tl.to(
          heroFooterRef.current,
          {
            scale: 0.75,
            opacity: 0,
            filter: "blur(20px)",
          },
          0,
        );

        // Calculate this pin immediately after the
        // timeline has been completely populated.
        tl.scrollTrigger?.refresh();
      });

      /*
       * MOBILE
       */
      mm.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
        const hero = heroRef.current;
        const spotlight = spotlightRef.current;

        if (!hero || !spotlight) return;

        gsap.set(spotlight, {
          scale: 5,
        });

        gsap.set(heroHeaderContainerRef.current, {
          clearProps: "transform,opacity,filter",
        });

        gsap.set(heroFooterRef.current, {
          clearProps: "transform,opacity,filter",
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            id: "hero-mobile",

            trigger: hero,

            start: "top top",

            /*
             * IMPORTANT:
             * hero.offsetHeight now comes from h-svh.
             *
             * We're no longer basing the pin duration
             * directly on window.innerHeight.
             */
            end: () => `+=${hero.offsetHeight * 2.5}`,

            pin: true,

            pinSpacing: true,

            scrub: 1,

            invalidateOnRefresh: true,

            refreshPriority: 10,

            anticipatePin: 1,

            // markers: true,
          },
        });

        tl.to(
          spotlight,
          {
            scale: 1,
          },
          0,
        );

        tl.to(
          heroHeaderContainerRef.current,
          {
            scale: 0.5,
            opacity: 0,
            filter: "blur(10px)",
          },
          0,
        );

        tl.to(
          heroFooterRef.current,
          {
            scale: 0.75,
            opacity: 0,
            filter: "blur(20px)",
          },
          0,
        );

        tl.scrollTrigger?.refresh();
      });

      return () => {
        mm.revert();
        headerSplit.revert();
      };
    },
    {
      scope: rootRef,
    },
  );

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative w-full overflow-x-clip bg-black"
    >
      <div
        ref={heroRef}
        className="
          relative
          w-full
          h-svh
          min-h-svh
          overflow-hidden
          bg-black
          hero
        "
      >
        <div className="relative w-full h-full hero-inner">
          {/* Spotlight gallery */}
          <div
            ref={spotlightRef}
            className="
              absolute
              top-1/2
              left-1/2
              flex
              w-full
              h-full
              gap-2
              origin-center
              -translate-x-1/2
              -translate-y-1/2
              hero-spotlight-gallery
              will-change-transform
            "
          >
            <Columns col={colOne} />

            <Columns col={colTwo} />

            <Columns col={colThree} />
          </div>

          {/* Header */}
          <HeroHeader
            heroHeaderContainerRef={heroHeaderContainerRef}
            heroHeaderTextRef={heroHeaderTextRef}
            heroButtonRef={heroButtonRef}
          />

          {/* Footer */}
          <div
            ref={heroFooterRef}
            className="
              absolute
              hidden
              text-white
              bottom-8
              right-8
              w-50
              md:block
            "
          >
            <h5>Discover the future of automotive innovation</h5>
          </div>
        </div>

        <div
          className="
            absolute
            inset-0
            bg-black
            opacity-0
            pointer-events-none
            overlay
          "
        />
      </div>
    </section>
  );
}
