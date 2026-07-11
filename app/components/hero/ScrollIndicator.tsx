export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">

      <div className="flex flex-col items-center gap-3">

        <span className="text-xs uppercase tracking-[0.4em] text-white/60">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">

          <div className="mt-2 h-3 w-1 rounded-full bg-white animate-bounce" />

        </div>

      </div>

    </div>
  );
}