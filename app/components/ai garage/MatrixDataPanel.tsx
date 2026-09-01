import React from "react";
import RightTelemetryMatrix from "./RightTelemetryMatrix";
import { Cpu } from "lucide-react";

interface MatrixDataPanelProps {
  enterGarage: () => void;
  handleSendMessage: (e: React.FormEvent | undefined, customText?: string) => void;
  questions: string[];
  cars: string[];
}

const MatrixDataPanel = ({ enterGarage, handleSendMessage, questions, cars }: MatrixDataPanelProps) => {
  return (
    <div className="grid items-start grid-cols-1 gap-16 mt-20 lg:grid-cols-12">
      {/* Left Core Indices Cluster */}
      <div className="space-y-6 machine-container lg:col-span-4">
        <div className="relative pl-4 py-0.5">
          <div className="tech-border absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-500 origin-top" />
          <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-400">
            {" // System Core Indices "}
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
              className="machine-card group flex items-center justify-between w-full px-5 py-4 text-left text-sm text-neutral-400 transition-all duration-300 border rounded-xl border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-cyan-500/40 hover:bg-cyan-500/2 hover:text-white"
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
      <RightTelemetryMatrix
        enterGarage={enterGarage}
        handleSendMessage={handleSendMessage}
        questions={questions}
      />
    </div>
  );
};

export default MatrixDataPanel;