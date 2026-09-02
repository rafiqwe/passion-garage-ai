import { ArrowUpRight } from "lucide-react";
import React from "react";

export const FooterPrimaryCTA = () => {
  return (
    <div className="flex justify-center mt-24">
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="flex items-center gap-3 px-8 py-4 font-semibold text-black transition duration-300 rounded-full shadow-lg cursor-pointer footer-btn group bg-cyan-500 hover:scale-105 shadow-cyan-500/20"
      >
        Take Another Ride
        <ArrowUpRight
          size={20}
          className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};
