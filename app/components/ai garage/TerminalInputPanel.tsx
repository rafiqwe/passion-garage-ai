import { Send } from "lucide-react";
import React from "react";

interface TerminalInputPanelProps {
  handleSendMessage: (e: React.FormEvent) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const TerminalInputPanel = ({ handleSendMessage, inputValue, setInputValue }: TerminalInputPanelProps) => {
  return (
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
  );
};

export default TerminalInputPanel;
