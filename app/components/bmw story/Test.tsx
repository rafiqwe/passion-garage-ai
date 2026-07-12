"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const BmwStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate total overflow width dynamically
      const getScrollAmount = () => {
        return container.scrollWidth - window.innerWidth;
      };

      gsap.set("#navbar", { opacity: 0 });

      // Create main timeline attached to master container track scroll pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          // Forces track calculations to process after DOM paint finishes natively
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      // 1. Move the master wrapper layout track smoothly to the left
      tl.to(container, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      // 2. Panel 2 Blueprint Telemetry Reveal Animations
      tl.fromTo(".tech-spec-badge", 
        { opacity: 0, scale: 0.7, y: 50, filter: "blur(10px)" },
        { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.5, ease: "power2.out" },
        "-=0.5" // Snaps the telemetry reveal right as Panel 2 breaks over the viewer screen line
      )
      .fromTo(".blueprint-glow",
        { opacity: 0, scale: 0.8 },
        { opacity: 0.3, scale: 1, duration: 0.6, ease: "sine.out" },
        "<"
      )
      .fromTo(".car-main-chassis",
        { scale: 0.95, filter: "brightness(0.3)" },
        { scale: 1, filter: "brightness(1)", duration: 0.7, ease: "power3.out" },
        "<"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      // FIXED: Added overflow-x-hidden and clean tracking behaviors to prevent layout breaks
      className="relative flex items-center h-screen text-white bg-[#030303] flex-nowrap overflow-x-hidden"
    >
      {/* Panel 1 - Balanced Hero Grid */}
      <div className="relative shrink-0 flex items-center justify-center w-screen h-screen px-[5vw]">
        <h2 className="font-bold text-center text-[10vw] font-sora whitespace-nowrap tracking-tighter select-none">
          <span className="relative z-0">THE</span>{" "}
          <span className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">ULTIMATE</span>{" "}
          <span className="relative z-0">DRIVING</span>{" "}
          <span className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">MACHINE</span>
        </h2>

        {/* Float Grid Array Layers */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Card Image 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute w-[14vw] h-[14vw] min-w-[150px] min-h-[150px] rounded-3xl border border-white/10 shadow-2xl overflow-hidden top-1/4 left-[15vw] rotate-12"
          >
            <Image alt="layer-1" fill className="object-cover" src="/images/3-v2.jpg" />
          </motion.div>

          {/* Card Image 2 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute w-[16vw] h-[16vw] min-w-[180px] min-h-[180px] rounded-3xl border border-white/10 shadow-2xl overflow-hidden top-10 right-[20vw] -rotate-12"
          >
            <Image alt="layer-2" fill className="object-cover" src="/images/3-v2.jpg" />
          </motion.div>

          {/* Card Image 3 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute w-[13vw] h-[13vw] min-w-[140px] min-h-[140px] rounded-3xl border border-white/10 shadow-2xl overflow-hidden bottom-12 left-[45vw] rotate-6"
          >
            <Image alt="layer-3" fill className="object-cover" src="/images/3-v2.jpg" />
          </motion.div>
        </div>
      </div>

      {/* Panel 2 - Dynamic Blueprint Scanner View */}
      <div className="relative flex items-center h-screen w-screen shrink-0 bg-[#060608] border-x border-neutral-900 overflow-hidden px-12 md:px-24">
        {/* Engineering Background Grid layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14141a_1px,transparent_1px),linear-gradient(to_bottom,#14141a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        {/* Dynamic Glowing Vector Backplate */}
        <div className="blueprint-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[50vh] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Adaptive Specs Canvas Frame */}
        <div className="car-main-chassis relative w-full max-w-5xl h-[60vh] mx-auto flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl mx-auto aspect-video">
            <Image
              fill
              priority
              src="/images/bmw/bmwtrs 1.png"
              alt="BMW Core Engineering"
              className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.15)] z-10"
            />
          </div>

          {/* Metric Badge: Horsepower */}
          <div className="absolute z-20 p-4 border shadow-2xl tech-spec-badge top-4 left-4 md:left-12 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl">
            <span className="text-[10px] text-blue-400 tracking-widest font-mono uppercase block mb-0.5">Output Metrics</span>
            <p className="font-mono text-3xl font-black text-white">503<span className="ml-1 text-sm text-neutral-400">hp</span></p>
          </div>

          {/* Metric Badge: Drivetrain */}
          <div className="tech-spec-badge absolute bottom-4 left-[15%] bg-black/70 backdrop-blur-md border border-neutral-800 px-5 py-2.5 rounded-xl z-20 shadow-2xl">
            <span className="text-[10px] text-neutral-400 tracking-wider font-mono block mb-0.5">Drivetrain System</span>
            <p className="text-xl font-bold tracking-widest text-blue-400 uppercase">xDrive</p>
          </div>

          {/* Metric Badge: Top Speed */}
          <div className="absolute z-20 p-4 text-right border shadow-2xl tech-spec-badge top-4 right-4 md:right-12 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl">
            <span className="text-[10px] text-blue-400 tracking-widest font-mono uppercase block mb-0.5">V-Max Rating</span>
            <p className="font-mono text-3xl font-black text-white">310<span className="ml-1 text-sm font-medium text-neutral-400">km/h</span></p>
          </div>

          {/* Metric Badge: Induction */}
          <div className="tech-spec-badge absolute bottom-8 right-[15%] bg-black/70 backdrop-blur-md border border-neutral-800 p-4 rounded-xl z-20 shadow-2xl">
            <span className="text-[10px] text-neutral-400 tracking-wider font-mono block mb-0.5">Induction Layout</span>
            <p className="text-2xl font-black tracking-tight text-white uppercase">Twin Turbo</p>
          </div>

          {/* Bottom Statement Tag */}
          <div className="tech-spec-badge absolute -bottom-6 left-4 border-l-2 border-blue-500 pl-4 py-0.5 z-20">
            <p className="text-xs italic font-medium tracking-wide md:text-sm text-neutral-400">
              "Built for the driver. Not the crowd."
            </p>
          </div>
        </div>
      </div>

      {/* Panel 3 */}
      <div className="flex items-center justify-center w-screen h-screen text-5xl font-bold text-black shrink-0 bg-neutral-100">
        Content Section 2
      </div>

      {/* Panel 4 */}
      <div className="flex items-center justify-center w-screen h-screen text-5xl font-bold text-black bg-neutral-200 shrink-0">
        Content Section 3
      </div>
    </div>
  );
};

export default BmwStory;