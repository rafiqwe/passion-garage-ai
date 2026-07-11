"use client";

import { useRef } from "react";

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      // 0.30 minutes = 30 seconds
      videoRef.current.currentTime = 30;
      
      // Force play after skipping ahead
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  };

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        onLoadedMetadata={handleLoadedMetadata}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}