import type { Ref } from "react";

interface StoryBlockProps {
  title: string;
  subtitle: string;
  sectionRef: Ref<HTMLDivElement> | undefined;
}

export default function StoryBlock({
  title,
  subtitle,
  sectionRef,
}: StoryBlockProps) {
  return (
    <section ref={sectionRef} className="relative w-full max-w-6xl px-6 mx-auto text-center pointer-events-none select-none font-sora">
      
      {/* Radial Glow Layer (Moves inline inside text space cleanly) */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-5xl font-black leading-tight text-white uppercase md:text-7xl xl:text-8xl">
          {title}
        </h2>

        <p className="max-w-3xl mx-auto mt-10 text-xl leading-9 text-white/60">
          {subtitle}
        </p>
      </div>

    </section>
  );
}