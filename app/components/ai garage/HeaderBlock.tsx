import { Sparkles } from "lucide-react";
import React from "react";

const HeaderBlock = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="ai-badge inline-flex items-center gap-2 px-4 py-1.5 border rounded-full border-cyan-500/30 bg-cyan-500/5 text-xs font-mono tracking-widest text-cyan-400 uppercase backdrop-blur-sm">
        <Sparkles size={12} className="animate-pulse text-cyan-300" />
        Neural Engine // Gemini Pro Connected
      </div>

      <h2 className="mt-8 text-6xl font-black tracking-tight text-white uppercase ai-title md:text-8xl font-sora">
        AI{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-200 to-neutral-500">
          GARAGE
        </span>
      </h2>

      <p className="max-w-xl mx-auto mt-6 text-sm font-medium leading-relaxed ai-description md:text-base text-neutral-400">
        Query sub-second performance metrics, telemetry layouts, and automotive
        architecture maps across history through conversational intelligence
        networks.
      </p>
    </div>
  );
};

export default HeaderBlock;
