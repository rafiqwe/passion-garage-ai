import { Cpu, User } from "lucide-react";
import react from "react";

interface StreamBufferAreProps {
  key: number;
  msg: { role: string; text: string };
}

export const StreamBufferAre = ({ key, msg }: StreamBufferAreProps) => {
  return (
    <div
      key={key}
      className={`flex items-start space-x-4 max-w-3xl ${msg.role === "user" ? "ml-auto flex-row-reverse space-x-reverse" : ""}`}
    >
      <div
        className={`p-2.5 rounded-xl border shrink-0 ${
          msg.role === "user"
            ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.05)]"
            : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
        }`}
      >
        {msg.role === "user" ? <User size={16} /> : <Cpu size={16} />}
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
  );
};

export default StreamBufferAre;
