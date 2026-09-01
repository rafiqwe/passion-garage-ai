import { ArrowUpRight } from "lucide-react";
import React from "react";

interface RightTelemetryMatrixProps {
    enterGarage: () => void;
    handleSendMessage: (e: React.FormEvent | undefined, customText?: string) => void;
    questions: string[];
}

const RightTelemetryMatrix = ({enterGarage, handleSendMessage, questions}: RightTelemetryMatrixProps) => {
  return (
    <div className="space-y-6 prompt-container lg:col-span-8">
      <div className="relative pl-4 py-0.5">
        <div className="tech-border absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 origin-top" />
        <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-400">
          {" // Prompt Framework Staging"}
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
              setTimeout(() => handleSendMessage(undefined, question), 600);
            }}
            className="prompt-card group relative p-6 text-left transition-all duration-300 border rounded-2xl border-neutral-900 bg-linear-to-br from-neutral-950 to-black hover:border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col justify-between min-h-32.5"
          >
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
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
  );
};

export default RightTelemetryMatrix;
