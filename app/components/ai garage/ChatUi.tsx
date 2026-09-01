import React from "react";
import TerminalInputPanel from "./TerminalInputPanel";
import StreamBufferAre from "./StreamBufferAre";
import { ControlHeaderBar } from "./ControlHeaderBar";

interface ChatUiProps {
  handleSendMessage: (
    e: React.FormEvent | undefined,
    customText?: string,
  ) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  messages: { role: "user" | "assistant"; text: string }[];
  exitGarage: () => void;
  chatRef: React.RefObject<HTMLDivElement | null>;
}

const ChatUi = ({
  handleSendMessage,
  inputValue,
  setInputValue,
  messages,
  exitGarage,
  chatRef,
}: ChatUiProps) => {
  return (
    <div
      ref={chatRef}
      className="w-full max-w-6xl h-screen mx-auto border border-cyan-500/15 bg-zinc-950/80 backdrop-blur-2xl rounded-2xl shadow-[0_0_80px_rgba(6,182,212,0.04)] overflow-hidden flex flex-col "
    >
      {/* Control Header Bar */}
      <ControlHeaderBar exitGarage={exitGarage} />

      {/* Stream Buffer Area */}
      <div className="flex-1 p-6 pb-20 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 bg-linear-to-b from-zinc-950 to-zinc-900/50">
        {messages.map((msg, index) => (
          <StreamBufferAre key={index} msg={msg} />
        ))}
      </div>

      {/* Terminal Input Panel */}
      <TerminalInputPanel
        handleSendMessage={handleSendMessage}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default ChatUi;
