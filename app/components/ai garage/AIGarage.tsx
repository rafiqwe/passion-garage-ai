"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MatrixDataPanel from "./MatrixDataPanel";
import HeaderBlock from "./HeaderBlock";
import CTA from "./CTA";
import ChatUi from "./ChatUi";

const cars = [
  "BMW M4",
  "Porsche 911 GT3",
  "Ferrari F8",
  "Nissan GT-R",
  "Toyota Supra",
  "BMW M5 CS",
];

const questions = [
  "Compare BMW M4 vs Nissan GT-R",
  "Which car is best for daily driving?",
  "Explain BMW xDrive",
  "Recommend a sports car under $100k",
  "Why do enthusiasts love Porsche?",
  "Best sounding V8 sports car",
];

export default function AiGarageLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; text: string }>
  >([
    {
      role: "assistant",
      text: "Neural uplink established. Ready to pull performance matrices, live telemetry specs, or mechanical diagnostic blueprints. What configuration are we analyzing today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const { contextSafe } = useGSAP({ scope: containerRef });

  // Entrance Landing Animations
  useGSAP(
    () => {
      if (isChatActive) return;

      const headerTl = gsap.timeline();
      headerTl
        .fromTo(
          ".ai-badge",
          { opacity: 0, y: -20, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
          },
        )
        .fromTo(
          ".ai-title",
          { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".ai-description",
          { opacity: 0, y: 15 },
          { opacity: 0.6, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.4",
        );

      gsap.fromTo(
        ".machine-card",
        { opacity: 0, x: -20, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        ".prompt-card",
        { opacity: 0, y: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 0.6,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        ".tech-border",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.6,
          ease: "power3.inOut",
          transformOrigin: "top center",
        },
      );
      gsap.fromTo(
        ".terminal-action",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" },
      );
    },
    { dependencies: [isChatActive] },
  );

  // Transition Reveal Framework
  useEffect(() => {
    if (isChatActive && chatRef.current) {
      gsap.fromTo(
        chatRef.current,
        { opacity: 0, scale: 0.97, y: 25, filter: "blur(12px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power4.out",
        },
      );
    }
  }, [isChatActive]);

  const enterGarage = () => {
    const animate = contextSafe(() => {
      if (!landingRef.current) return;

      gsap.to(
        [landingRef.current, ".ai-badge", ".ai-title", ".ai-description"],
        {
          opacity: 0,
          y: -30,
          scale: 0.98,
          filter: "blur(12px)",
          stagger: 0.03,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            setIsChatActive(true);
          },
        },
      );
    });

    animate();
  };

  const exitGarage = () => {
    const animate = contextSafe(() => {
      if (!chatRef.current) return;

      gsap.to(chatRef.current, {
        opacity: 0,
        scale: 0.97,
        y: 25,
        filter: "blur(12px)",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          setIsChatActive(false);
        },
      });
    });

    animate();
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (
    e?: React.FormEvent,
    customText?: string,
  ) => {
    if (e) e.preventDefault();

    const textToSend = customText || inputValue;

    if (!textToSend.trim() || isLoading) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: textToSend,
      },
    ]);

    if (!customText) {
      setInputValue("");
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.message,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I couldn't generate a response right now.",
        },
      ]);

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={containerRef}
      id="aigarage"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#030303] py-20 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 w-full"
    >
      {/* Editorial Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-4 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size[60px_60px] z-0" />

      {/* Expanded Radiant Underglow Maps */}
      <div className="absolute left-1/2 top-1/2 h-187.5 w-187.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[160px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute right-5% top-1/3 h-112.5 w-112.5 rounded-full bg-indigo-500/4 blur-[140px] mix-blend-screen pointer-events-none z-0" />

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        {!isChatActive ? (
          /* ================= LANDING MODULE ================= */
          <div ref={landingRef} className="w-full">
            {/* Header Block */}
            <HeaderBlock />

            {/* Matrix Data Panels */}
            <MatrixDataPanel
              enterGarage={enterGarage}
              handleSendMessage={handleSendMessage}
              questions={questions}
              cars={cars}
            />

            {/* Main CTA */}
            <CTA enterGarage={enterGarage} />
          </div>
        ) : (
          /* ================= CHAT UI INTERFACE MODULE (PREMIUM DARK SCI-FI FIX) ================= */
          <ChatUi
            handleSendMessage={handleSendMessage}
            inputValue={inputValue}
            setInputValue={setInputValue}
            messages={messages}
            exitGarage={exitGarage}
            chatRef={chatRef}
          />
        )}
      </div>
    </section>
  );
}
