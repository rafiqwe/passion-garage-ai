import React from "react";
import CursorAnimation from "../common/CursorAnimation";
import Image from "next/image";

interface PanelThreeProps {
  panel3Ref: React.RefObject<HTMLDivElement | null>;
}

export const PanelThree = ({ panel3Ref }: PanelThreeProps) => {
  return (
    <div
      ref={panel3Ref}
      className="relative grid items-center h-screen text-white w-max shrink-0 min-w-screen"
    >
      <div className="absolute hidden md:block top-0 z-0 w-screen h-screen bg-hero-image">
        <Image
          alt="M4 GT4"
          src={"/images/bmw/M4 GT4 1.png"}
          fill
          className="object-cover bg-cover opacity-60"
        />
      </div>
      <div className="z-20 font-bold text-center font-sora md:text-7xl text-xl">
        <h2 className="emotion-text-line">
          Performance isn{`'`}t measured by speed.
        </h2>
        <h2 className="emotion-text-line"> It{`'`}s measured by emotion.</h2>
      </div>
        <CursorAnimation />
    </div>
  );
};
