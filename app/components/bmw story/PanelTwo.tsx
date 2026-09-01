import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface PanelTwoProps {
  panel2Ref: React.RefObject<HTMLDivElement | null>;
}

export const PanelTwo = ({ panel2Ref }: PanelTwoProps) => {
  return (
    <div
      ref={panel2Ref}
      className="relative grid items-center h-screen text-2xl font-bold font font-jetbrains-mono w-max min-w-screen re shrink-0"
    >
      <div className="absolute flex items-center justify-center h-screen mx-auto w-100 md:w-290 md:left-40">
        <Image
          fill
          src={"/images/bmw/bmwtrs 1.png"}
          alt="bmw bg"
          className="object-contain bg-cover car-main-chassis"
        />
      </div>
      {/* Metric Badge: Horsepower */}
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute z-20 p-4 border shadow-2xl mt-80 md:mt-0 tech-spec-badge top-4 left-4 md:left-80 md:top-50 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl"
      >
        <span className="md:text-[10px] text-[8px] text-blue-400  tracking-widest font-mono uppercase block mb-0.5">
          Output Metrics
        </span>
        <p className="font-mono md:text-3xl text-xl font-black text-white">
          503<span className="ml-1 text-sm text-neutral-400">hp</span>
        </p>
      </motion.div>

      {/* Metric Badge: Drivetrain */}
      <div className="tech-spec-badge absolute md:bottom-4 md:left-1/2 bottom-20     bg-black/70 backdrop-blur-md border border-neutral-800 px-5 py-2.5 rounded-xl z-20 shadow-2xl">
        <span className="md:text-[10px] text-[8px] text-neutral-400 tracking-wider font-mono block mb-0.5">
          Drivetrain System
        </span>
        <p className="md:text-xl text-sm font-bold tracking-widest text-blue-400 uppercase">
          xDrive
        </p>
      </div>

      {/* Metric Badge: Top Speed */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute z-20 p-4 mt-70 md:mt-0 text-right border shadow-2xl tech-spec-badge top-4 right-4 md:right-30 md:top-20 bg-black/70 backdrop-blur-md border-blue-500/20 rounded-xl"
      >
        <span className="md:text-[10px] text-[8px] text-blue-400 tracking-widest font-mono uppercase block mb-0.5">
          V-Max Rating
        </span>
        <p className="font-mono md:text-3xl text-xl font-black text-white">
          310
          <span className="ml-1 text-sm font-medium text-neutral-400">
            km/h
          </span>
        </p>
      </motion.div>

      {/* Metric Badge: Induction */}
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
        className="tech-spec-badge absolute md:bottom-23 bottom-60 right-[8%] bg-black/70 backdrop-blur-md border border-neutral-800 p-4 rounded-xl z-20 shadow-2xl"
      >
        <span className="md:text-[10px] text-[8px] text-neutral-400 tracking-wider font-mono block mb-0.5">
          Induction Layout
        </span>
        <p className="md:text-2xl text-[18px] font-black tracking-tight text-white uppercase">
          Twin Turbo
        </p>
      </motion.div>

      {/* Bottom Statement Tag */}
      <div className="tech-spec-badge absolute bottom-8 left-4 border-l-2 border-blue-500 pl-4 py-0.5 z-20">
        <p className="text-xs italic font-medium tracking-wide md:text-sm text-neutral-400">
          {`"Built for the driver. Not the crowd."`}
        </p>
      </div>
    </div>
  );
};
