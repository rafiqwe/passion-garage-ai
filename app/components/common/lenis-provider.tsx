"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        autoRaf: true,        // Automatically handles the scroll loop animation
        duration: 1.2,        // Scroll duration in seconds
        syncTouch: false,     // Keeps native touch momentum on mobile devices
      }}
    >
      {children}
    </ReactLenis>
  );
}