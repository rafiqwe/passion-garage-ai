"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely
gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "GSAP",
  "Tailwind CSS",
  "Google Gemini",
  "Vercel",
];

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

  useGSAP(() => {
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
      { scale: 1.1, opacity: 0.03, duration: 1.5, ease: "power2.out" }
    );

    // 2. Reveal text header groups
    tl.fromTo(
      [".footer-sub", ".footer-title", ".footer-desc"],
      { y: 50, opacity: 0 },
      { y: 0, opacity: (i) => i === 2 ? 0.6 : 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      "-=1" // Overlap slightly with watermark animation
    );

    // 3. Stagger individual technology tags in
    tl.fromTo(
      ".tech-badge",
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" },
      "-=0.6"
    );

    // 4. Pop the Action CTA Button
    tl.fromTo(
      ".footer-btn",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.75)" },
      "-=0.4"
    );

    // 5. Fade up grid links at the very bottom
    tl.fromTo(
      ".footer-grid-section",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.2"
    );

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#050505] min-h-screen flex items-center justify-center">
      {/* Background Lights */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      {/* Watermark Element */}
      <h1 className="footer-watermark pointer-events-none absolute inset-0 flex items-center justify-center text-[18vw] font-black uppercase text-white">
        PASSION
      </h1>

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl py-28">
        {/* Hero Segment */}
        <div className="text-center">
          <p className="footer-sub uppercase tracking-[0.5em] text-cyan-400 font-medium">
            Final Chapter
          </p>

          <h2 className="mt-8 text-6xl font-black leading-none tracking-tight text-white uppercase footer-title md:text-8xl">
            Passion
            <br />
            Never Stops.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-xl leading-9 footer-desc text-white/60">
            Every legendary machine begins with someone{`'`}s passion.
            <br />
            Thanks for experiencing Passion Garage.
          </p>
        </div>

        {/* Tech Badges Container */}
        <div className="mt-20">
          <p className="footer-sub mb-8 text-center uppercase tracking-[0.4em] text-white/40 text-sm">
            Built With
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 text-white transition duration-300 border rounded-full tech-badge border-white/10 bg-white/5 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA Action */}
        <div className="flex justify-center mt-24">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-3 px-8 py-4 font-semibold text-black transition duration-300 rounded-full shadow-lg cursor-pointer footer-btn group bg-cyan-500 hover:scale-105 shadow-cyan-500/20"
          >
            Take Another Ride
            <ArrowUpRight
              size={20}
              className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Info Grid Footer structure */}
        <div className="grid gap-16 pt-16 border-t footer-grid-section mt-28 border-white/10 md:grid-cols-3">
          {/* Explore Grid block */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 transition group text-white/60 hover:text-cyan-400"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Grid block */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Technologies</h3>
            <ul className="space-y-4 text-white/60">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Socials Grid block */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Connect</h3>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition group text-white/60 hover:text-cyan-400"
                  >
                    {social.name}
                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Attribution Meta layout */}
        <div className="pt-8 mt-16 border-t footer-grid-section border-white/10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="text-lg font-semibold text-white">Designed & Developed</h4>
              <p className="mt-2 text-white/50">Muhammad Rabbi</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/40">Every legend starts with passion.</p>
              <p className="mt-2 text-sm text-white/30">
                © 2026 Passion Garage • Built for the DEV Weekend Challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}