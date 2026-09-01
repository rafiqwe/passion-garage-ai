import { ArrowLeft, ShieldCheck, Terminal } from 'lucide-react'
import React from 'react'

interface ControlHeaderBarProps {
  exitGarage: () => void;
}


export const ControlHeaderBar = ({
  exitGarage
}: ControlHeaderBarProps) => {
    return (
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
    )
}


