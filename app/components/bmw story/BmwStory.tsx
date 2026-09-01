"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { PanelOne } from "./PanelOne";
import { PanelTwo } from "./PanelTwo";
import { PanelThree } from "./PanelThree";
import { PanelFour } from "./PanelFour";

gsap.registerPlugin(ScrollTrigger);

const BmwStory = () => {
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
      id="bmwStory"
      className="relative flex items-center w-full h-full text-white bg-black flex-nowrap"
    >
      {/* Panel 1 */}
      <PanelOne />

      {/* Panel 2 */}
      <PanelTwo panel2Ref={panel2Ref} />

      {/* Panel 3 */}
      <PanelThree panel3Ref={panel3Ref} />

      {/* Panel 4: AI Insights Panel */}
      <PanelFour panel4Ref={panel4Ref} />
    </div>
  );
};

export default BmwStory;
