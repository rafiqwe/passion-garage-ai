"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechBadges } from "./TechBadges";
import { FooterPrimaryCTA } from "./FooterPrimaryCTA";
import { FooterInfoGrid } from "./FooterInfoGrid";
import { FooterMetaLayout } from "./FooterMetaLayout";
import { FooterHeroSegment } from "./FooterHeroSegment";

gsap.registerPlugin(ScrollTrigger);

const exploreLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Scroll Story", href: "#scrollstory" },
  { label: "Featured Cars", href: "#legendgarage1" },
  { label: "BMW Story", href: "#bmwStory" },
  { label: "AI Garage", href: "#aigarage" },
];

const technologies = [
  "Next.js App Router",
  "GSAP",
  "Google Gemini",
  "TypeScript",
  "Tailwind CSS",
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/rafiqwe",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/muhammadrabbi.dev",
  },
  {
    name: "DEV Community",
    href: "https://dev.to/muhammad_rabbi_dev",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          markers: false, // Turn on true if you need debugging guides
        },
      });

      // 1. Animate background watermark text
      tl.fromTo(
        ".footer-watermark",
        { scale: 0.7, opacity: 0 },
        { scale: 1.1, opacity: 0.03, duration: 1.5, ease: "power2.out" },
      );

      // 2. Reveal text header groups
      tl.fromTo(
        [".footer-sub", ".footer-title", ".footer-desc"],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: (i) => (i === 2 ? 0.6 : 1),
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1", // Overlap slightly with watermark animation
      );

      // 3. Stagger individual technology tags in
      tl.fromTo(
        ".tech-badge",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)",
        },
        "-=0.6",
      );

      // 4. Pop the Action CTA Button
      tl.fromTo(
        ".footer-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.75)" },
        "-=0.4",
      );

      // 5. Fade up grid links at the very bottom
      tl.fromTo(
        ".footer-grid-section",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.2",
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-background min-h-screen flex items-center justify-center"
    >
      {/* Background Lights */}
      <div className="absolute left-1/2 top-1/2 h-225 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size[24px_24px] opacity-20" />

      {/* Watermark Element */}
      <h1 className="footer-watermark pointer-events-none absolute inset-0 flex items-center justify-center text-[18vw] font-black uppercase text-white">
        PASSION
      </h1>

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl py-28">
        {/* Hero Segment */}
        <FooterHeroSegment />

        {/* Tech Badges Container */}
        <TechBadges />

        {/* Primary CTA Action */}
        <FooterPrimaryCTA />

        {/* Info Grid Footer structure */}
        <FooterInfoGrid
          exploreLinks={exploreLinks}
          socials={socials}
          technologies={technologies}
        />

        {/* Copyright Attribution Meta layout */}
        <FooterMetaLayout />
      </div>
    </footer>
  );
}
