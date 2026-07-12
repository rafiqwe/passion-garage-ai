"use client";

import Image from "next/image";
import { forwardRef } from "react";

const CarSlide = forwardRef<HTMLDivElement, any>(({ car }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center w-full h-[100dvh] overflow-hidden car-slide p-4 md:p-8"
    >
      {/* Radial Gradient Glow effect */}
      <div
        className={`car-glow absolute inset-0 bg-gradient-radial ${car.glow} to-transparent opacity-30 md:opacity-40 blur-[100px] md:blur-[180px] pointer-events-none`}
      />

      {/* Large Dynamic Background Text */}
      <h2 className="car-bg-title absolute text-[24vw] md:text-[18vw] font-black uppercase text-white/[0.02] md:text-white/[0.03] select-none pointer-events-none z-0 whitespace-nowrap">
        {car.bgTitle}
      </h2>

      {/* Main content positioning */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full h-full gap-6 md:gap-8 mx-auto max-w-7xl pt-12 md:pt-0">
        
        {/* Left Stats/Text column */}
        <div className="w-full md:max-w-xl text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <p className="car-label mb-1 md:mb-4 uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 text-xs md:text-sm">
            Featured Machine
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white car-title">
            {car.title}
          </h2>

          <p className="mt-2 md:mt-8 text-sm sm:text-base md:text-xl leading-relaxed car-quote text-white/60 max-w-md md:max-w-none">
            {car.quote}
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-14 w-full max-w-xs md:max-w-none">
            {car.stats.map((stat: any) => (
              <div key={stat.label} className="car-stat">
                <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/40">
                  {stat.label}
                </p>
                <h3 className="mt-0.5 md:mt-2 text-lg sm:text-xl md:text-3xl font-bold text-white">
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Graphic column */}
        <div className="relative w-full h-48 sm:h-64 md:h-137.5 md:w-175 flex-1 md:flex-none flex items-center justify-center max-w-md md:max-w-none">
          <Image
            src={car.image}
            alt={car.title}
            fill
            priority
            className="object-contain car-image"
          />
        </div>

      </div>
    </div>
  );
});

CarSlide.displayName = "CarSlide";

export default CarSlide;