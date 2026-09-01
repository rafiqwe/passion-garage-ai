import React from "react";

interface PanelFourProps {
  panel4Ref: React.RefObject<HTMLDivElement | null>;
}

export const PanelFour = ({ panel4Ref }: PanelFourProps) => {
  return (
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

              <p className="text-sm italic font-medium leading-relaxed md:text-2xl font-sora text-neutral-200">
                &ldquo;The BMW M4 Competition is ideal for drivers who value
                precision handling over pure straight-line speed.&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
                <span className="font-mono md:text-xs text-[10px] text-blue-400">
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
  );
};
