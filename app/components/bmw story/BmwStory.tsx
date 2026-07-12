"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";
import CursorAnimation from "../common/CursorAnimation";

gsap.registerPlugin(ScrollTrigger);

const BmwStory = () => {
  // Point refs to the structural containers to orchestrate viewport entries safely
  const containerRef = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const panel4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const panel2 = panel2Ref.current;
      const panel3 = panel3Ref.current;
      const panel4 = panel4Ref.current;
      if (!container || !panel2 || !panel3 || !panel4) return;

      // Calculate exactly how much width overflows the screen total
      const getScrollAmount = () => {
        return container.scrollWidth - window.innerWidth;
      };

      gsap.set("#navbar", {
        opacity: 0,
      });

      // TIMELINE 1: Handles the horizontal scrolling track frame-by-frame
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });

      horizontalTl.to(container, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      // TIMELINE 2: Triggers the tech badges EXACTLY when Panel 2 rolls onto screen
      gsap.fromTo(
        gsap.utils.toArray(".tech-spec-badge", panel2),
        { delay: 0.4, opacity: 0, scale: 0.7, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel2,
            containerAnimation: horizontalTl,
            start: "left 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Blueprint Glow individual setup
      gsap.fromTo(
        gsap.utils.toArray(".blueprint-glow", panel2),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.3,
          scale: 1,
          duration: 0.5,
          ease: "sine.out",
          scrollTrigger: {
            trigger: panel2,
            containerAnimation: horizontalTl,
            start: "left 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Main Chassis configuration tracking
      gsap.fromTo(
        gsap.utils.toArray(".car-main-chassis", panel2),
        { scale: 0.95, filter: "brightness(0.3)" },
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel2,
            containerAnimation: horizontalTl,
            start: "left 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // TIMELINE 3: Panel 3 Emotion Typography & Background Reveals
      gsap.fromTo(
        gsap.utils.toArray(".emotion-text-line", panel3),
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          delay: 0.5,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel3,
            containerAnimation: horizontalTl,
            start: "left 65%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        gsap.utils.toArray(".bg-hero-image", panel3),
        { opacity: 0, scale: 1.05 },
        {
          opacity: 0.15,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel3,
            containerAnimation: horizontalTl,
            start: "left 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // TIMELINE 4: Panel 4 AI Insights Typography & Layout Element Animation
      gsap.fromTo(
        gsap.utils.toArray(".ai-reveal-element", panel4),
        { opacity: 0, y: 30, scale: 0.97, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel4,
            containerAnimation: horizontalTl,
            start: "left 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex items-center w-full h-full text-white bg-black flex-nowrap"
    >
      {/* Panel 1 */}
      <div className="relative ml-150 shrink-0 flex items-center justify-center w-max h-screen px-[10vw]">
        <h2 className="font-bold text-center text-[180px] font-sora whitespace-nowrap">
          <span className="relative z-0">THE</span>
          <span className="relative z-20">ULTIMATE</span>{" "}
          <span className="relative z-0">DRIVING</span>{" "}
          <span className="relative z-20">MACHINE</span>
        </h2>

        {/* Image 1 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute z-10 image-1 top-1/2 left-120 rotate-30 w-45 h-45 rounded-3xl"
        >
          <Image
            alt="image-1"
            fill
            sizes="100vh"
            className="object-cover bg-cover rounded-xl"
            src={"https://i.pinimg.com/1200x/63/a5/d9/63a5d9d6687f86ae5f6fb0e87df4d61c.jpg"}
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute z-10 image-2 top-55 left-347 -rotate-33 w-45 h-45 rounded-3xl"
        >
          <Image
            alt="image-2"
            fill
            sizes="100vh"
            className="object-cover bg-cover rounded-xl"
            src={"/images/3-v2.jpg"}
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute z-10 image-3 w-45 h-45 top-100 right-250 rotate-40 rounded-3xl"
        >
          <Image
            alt="image-3"
            fill
            sizes="100vh"
            className="object-cover bg-cover rounded-xl"
            src={"https://i.pinimg.com/736x/0e/51/27/0e51275fb9d14570c1ac0d5537cb3fef.jpg"}
          />
        </motion.div>
      </div>

      {/* Panel 2 */}
      <div
        ref={panel2Ref}
        className="relative grid items-center h-screen text-2xl font-bold font font-jetbrains-mono w-max min-w-screen re shrink-0"
      >
        <div className="absolute flex items-center justify-center h-screen mx-auto w-290 left-40">
          <Image
            fill
            src={"/images/bmw/bmwtrs 1.png"}
            alt="bmw bg"
            className="object-contain bg-cover car-main-chassis"
          />
        </div>
        {/* Metric Badge: Horsepower */}
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute z-20 p-4 border shadow-2xl tech-spec-badge top-4 left-4 md:left-80 md:top-50 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl"
        >
          <span className="text-[10px] text-blue-400 tracking-widest font-mono uppercase block mb-0.5">
            Output Metrics
          </span>
          <p className="font-mono text-3xl font-black text-white">
            503<span className="ml-1 text-sm text-neutral-400">hp</span>
          </p>
        </motion.div>

        {/* Metric Badge: Drivetrain */}
        <div className="tech-spec-badge absolute bottom-4 left-1/2 bg-black/70 backdrop-blur-md border border-neutral-800 px-5 py-2.5 rounded-xl z-20 shadow-2xl">
          <span className="text-[10px] text-neutral-400 tracking-wider font-mono block mb-0.5">
            Drivetrain System
          </span>
          <p className="text-xl font-bold tracking-widest text-blue-400 uppercase">
            xDrive
          </p>
        </div>

        {/* Metric Badge: Top Speed */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute z-20 p-4 text-right border shadow-2xl tech-spec-badge top-4 right-4 md:right-30 md:top-20 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl"
        >
          <span className="text-[10px] text-blue-400 tracking-widest font-mono uppercase block mb-0.5">
            V-Max Rating
          </span>
          <p className="font-mono text-3xl font-black text-white">
            310
            <span className="ml-1 text-sm font-medium text-neutral-400">
              km/h
            </span>
          </p>
        </motion.div>

        {/* Metric Badge: Induction */}
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className="tech-spec-badge absolute bottom-23 right-[8%] bg-black/70 backdrop-blur-md border border-neutral-800 p-4 rounded-xl z-20 shadow-2xl"
        >
          <span className="text-[10px] text-neutral-400 tracking-wider font-mono block mb-0.5">
            Induction Layout
          </span>
          <p className="text-2xl font-black tracking-tight text-white uppercase">
            Twin Turbo
          </p>
        </motion.div>

        {/* Bottom Statement Tag */}
        <div className="tech-spec-badge absolute bottom-8 left-4 border-l-2 border-blue-500 pl-4 py-0.5 z-20">
          <p className="text-xs italic font-medium tracking-wide md:text-sm text-neutral-400">
            {`"Built for the driver. Not the crowd."`}
          </p>
        </div>
      </div>

      {/* Panel 3 */}
      <div
        ref={panel3Ref}
        className="relative grid items-center h-screen text-white w-max shrink-0 min-w-screen"
      >
        <div className="absolute top-0 z-0 w-screen h-screen bg-hero-image">
          <Image
            alt="M4 GT4"
            src={"/images/bmw/M4 GT4 1.png"}
            fill
            className="object-cover bg-cover opacity-60"
          />
        </div>
        <div className="z-20 font-bold text-center font-sora text-7xl">
          <h2 className="emotion-text-line">
            Performance isn{`'`}t measured by speed.
          </h2>
          <h2 className="emotion-text-line"> It{`'`}s measured by emotion.</h2>
        </div>
        <CursorAnimation />
      </div>

      {/* Panel 4: AI Insights Panel */}
      <div
        ref={panel4Ref}
        className="relative flex items-center justify-center w-screen h-screen px-12 overflow-hidden md:px-24 shrink-0 bg-neutral-950"
      >
        <div className="z-10 flex flex-col-reverse items-center w-full max-w-6xl">
          {/* Left Text and Interactive CTA Pillar */}
          <div className="flex flex-col items-start justify-center mt-10 space-y-6 md:col-span-6">
            <button className="group cursor-pointer relative flex items-center space-x-3 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-blue-500/20 text-sm font-bold font-mono tracking-wider text-white transition-all duration-300 transform hover:-translate-y-0.5 ai-reveal-element">
              <span>Ask AI</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="w-full md:col-span-6 ai-reveal-element">
            <div className="relative p-8 overflow-hidden border shadow-2xl md:p-10 rounded-2xl bg-linear-to-br from-neutral-900 to-neutral-950 border-neutral-800 group">
              <div className="absolute top-0 right-0 w-24 h-24 transition-all duration-500 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20" />

              <div className="flex flex-col space-y-4">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  AI Insight
                </span>

                <p className="text-xl italic font-medium leading-relaxed md:text-2xl font-sora text-neutral-200">
                  &ldquo;The BMW M4 Competition is ideal for drivers who value
                  precision handling over pure straight-line speed.&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
                  <span className="font-mono text-xs text-blue-400">
                    Gemini LLM Connected
                  </span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmwStory;
