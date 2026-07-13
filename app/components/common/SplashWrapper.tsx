"use client";
import { useState } from "react";

import { ScrollTrigger } from "gsap/all";
import Loader from "../layout/Loader";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <div className={`${showSplash ? "overflow-hidden" : ""} h-screen`}>
        {showSplash && (
          <Loader
            onDone={() => {
              setShowSplash(false);
              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 100);
            }}
          />
        )}

        <div
          className={showSplash ? "opacity-0 overflow-hidden" : "opacity-100"}
        >
          {children}
        </div>
      </div>
    </>
  );
}
