"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Sparkles,
  ArrowUpRight,
  Cpu,
  Send,
  ShieldCheck,
  Terminal,
  User,
  ArrowLeft,
} from "lucide-react";

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
  const [messages, setMessages] = useState([
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

  const enterGarage = contextSafe(() => {
    gsap.to([landingRef.current, ".ai-badge", ".ai-title", ".ai-description"], {
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
    });
  });

  const exitGarage = contextSafe(() => {
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
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px] z-0" />

      {/* Expanded Radiant Underglow Maps */}
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[160px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute right-5% top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/[0.04] blur-[140px] mix-blend-screen pointer-events-none z-0" />

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        {!isChatActive ? (
          /* ================= LANDING MODULE ================= */
          <div ref={landingRef} className="w-full">
            {/* Header Block */}
            <div className="flex flex-col items-center text-center">
              <div className="ai-badge inline-flex items-center gap-2 px-4 py-1.5 border rounded-full border-cyan-500/30 bg-cyan-500/5 text-xs font-mono tracking-widest text-cyan-400 uppercase backdrop-blur-sm">
                <Sparkles size={12} className="animate-pulse text-cyan-300" />
                Neural Engine // Gemini Pro Connected
              </div>

              <h2 className="mt-8 text-6xl font-black tracking-tight text-white uppercase ai-title md:text-8xl font-sora">
                AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                  GARAGE
                </span>
              </h2>

              <p className="max-w-xl mx-auto mt-6 text-sm font-medium leading-relaxed ai-description md:text-base text-neutral-400">
                Query sub-second performance metrics, telemetry layouts, and
                automotive architecture maps across history through
                conversational intelligence networks.
              </p>
            </div>

            {/* Matrix Data Panels */}
            <div className="grid items-start grid-cols-1 gap-16 mt-20 lg:grid-cols-12">
              {/* Left Core Indices Cluster */}
              <div className="space-y-6 machine-container lg:col-span-4">
                <div className="relative pl-4 py-0.5">
                  <div className="tech-border absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 origin-top" />
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-400">
                    // System Core Indices
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                    Featured Core Clusters
                  </h3>
                </div>
                <div className="flex flex-col gap-2.5">
                  {cars.map((car, idx) => (
                    <button
                      key={car}
                      onClick={() => {
                        enterGarage();
                        setTimeout(
                          () =>
                            handleSendMessage(
                              undefined,
                              `Analyze profile config specs for ${car}`,
                            ),
                          600,
                        );
                      }}
                      className="machine-card group flex items-center justify-between w-full px-5 py-4 text-left text-sm text-neutral-400 transition-all duration-300 border rounded-xl border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-cyan-500/40 hover:bg-cyan-500/[0.02] hover:text-white"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-[10px] text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <span className="font-semibold tracking-wide transition-colors duration-300">
                          {car}
                        </span>
                      </div>
                      <Cpu
                        size={14}
                        className="transition-all duration-300 text-neutral-700 group-hover:text-cyan-400 group-hover:rotate-45"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Telemetry Prompts Matrix */}
              <div className="space-y-6 prompt-container lg:col-span-8">
                <div className="relative pl-4 py-0.5">
                  <div className="tech-border absolute left-0 top-0 bottom-0 w-[2px] bg-indigo-500 origin-top" />
                  <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-400">
                    // Prompt Framework Staging
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                    Evaluated Logic Matrices
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {questions.map((question, idx) => (
                    <button
                      key={question}
                      onClick={() => {
                        enterGarage();
                        setTimeout(
                          () => handleSendMessage(undefined, question),
                          600,
                        );
                      }}
                      className="prompt-card group relative p-6 text-left transition-all duration-300 border rounded-2xl border-neutral-900 bg-gradient-to-br from-neutral-950 to-black hover:border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[130px]"
                    >
                      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
                      <div className="flex items-start justify-between w-full space-x-4">
                        <span className="font-mono text-[10px] uppercase text-neutral-600 tracking-widest">
                          Matrix Track // 0{idx + 1}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-neutral-700 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                        />
                      </div>
                      <p className="mt-4 text-sm font-semibold leading-snug tracking-wide transition-colors duration-200 text-neutral-400 group-hover:text-white">
                        {question}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col items-center justify-center pt-8 mt-20 border-t terminal-action border-neutral-900/60">
              <button
                onClick={enterGarage}
                className="group relative px-10 py-4.5 overflow-hidden text-xs font-mono font-bold tracking-widest text-black transition-all duration-300 rounded-xl bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 transition-transform duration-500 origin-left scale-x-0 bg-white group-hover:scale-x-100" />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>INITIALIZE AI GARAGE</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
              <span className="mt-4 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
                Secure client session handshake ready
              </span>
            </div>
          </div>
        ) : (
          /* ================= CHAT UI INTERFACE MODULE (PREMIUM DARK SCI-FI FIX) ================= */
          <div
            ref={chatRef}
            className="w-full max-w-6xl h-screen mx-auto border border-cyan-500/15 bg-zinc-950/80 backdrop-blur-2xl rounded-2xl shadow-[0_0_80px_rgba(6,182,212,0.04)] overflow-hidden flex flex-col "
          >
            {/* Control Header Bar */}
            <div className="px-6 py-4.5 bg-zinc-950 border-b border-cyan-500/10 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={exitGarage}
                  className="flex items-center space-x-1.5 text-zinc-400 hover:text-cyan-400 text-xs font-mono tracking-wider transition-colors duration-200"
                >
                  <ArrowLeft size={14} />
                  <span>DISCONNECT</span>
                </button>
                <div className="w-px h-4 bg-zinc-800" />
                <div className="flex items-center space-x-2">
                  <Terminal size={14} className="text-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs tracking-wide text-zinc-300">
                    CORE_SESSION // SYSTEM_ACTIVE
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-cyan-400/20 bg-cyan-500/5 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  <ShieldCheck size={11} />
                  <span>Uplink Secure</span>
                </div>
                <div className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
              </div>
            </div>

            {/* Stream Buffer Area */}
            <div className="flex-1 p-6 pb-20 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 max-w-3xl ${msg.role === "user" ? "ml-auto flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${
                      msg.role === "user"
                        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.05)]"
                        : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Cpu size={16} />
                    )}
                  </div>

                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-zinc-900/80 border border-indigo-500/15 text-zinc-200 shadow-lg"
                        : "bg-zinc-900/50 border border-cyan-500/15 text-zinc-200 shadow-lg"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Input Panel */}
            <form
              onSubmit={handleSendMessage}
              className="flex items-center p-5 space-x-3 border-t bg-zinc-950 border-cyan-500/10"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Query vehicle specifications, structural mechanics, benchmarks..."
                className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/10 transition-all duration-300 font-sans"
              />
              <button
                type="submit"
                className="p-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-lg shadow-cyan-400/10 transition-all duration-200 active:scale-95"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
