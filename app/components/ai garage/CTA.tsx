import React from "react";

interface CTAProps {
    enterGarage: () => void;
}
const CTA = ({enterGarage}: CTAProps) => {
  return (
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
  );
};

export default CTA;
