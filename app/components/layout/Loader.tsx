"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  const loaderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intro animation
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    tl.from(
      progressBarRef.current,
      {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl.from(
      taglineRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
      },
      "-=0.4"
    );

    // Loading Progress
    let value = 0;

    const interval = setInterval(() => {
      value++;

      setProgress(value);

      gsap.to(progressBarRef.current, {
        width: `${value}%`,
        duration: 0.08,
        ease: "none",
      });

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onDone,
          });
        }, 400);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative flex flex-col items-center w-full max-w-2xl px-8">

        <h1
          ref={titleRef}
          className="text-center font-sora text-5xl font-black uppercase tracking-[0.25em] md:text-7xl"
        >
          PASSION GARAGE
        </h1>

        <div className="mt-12 h-[3px] w-full overflow-hidden rounded-full bg-white/10">

          <div
            ref={progressBarRef}
            className="w-0 h-full rounded-full bg-cyan-400"
          />

        </div>

        <div className="mt-6 text-2xl font-jetbrains-mono text-cyan-400">
          {progress}%
        </div>

      </div>

      <div
        ref={taglineRef}
        className="absolute hidden text-right bottom-10 right-10 md:block"
      >
        <p className="font-jetbrains-mono text-sm uppercase tracking-[0.35em] text-white/60">
          Driven by Passion
        </p>
      </div>
    </div>
  );
}