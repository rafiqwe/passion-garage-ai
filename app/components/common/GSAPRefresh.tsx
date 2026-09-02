"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPRefresh() {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const refresh = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh(true);
      }, 100);
    };

    // Initial page calculation
    refresh();

    // Images/fonts/etc may change section heights
    window.addEventListener("load", refresh);

    // Real breakpoint changes
    window.addEventListener("resize", refresh);

    document.fonts?.ready.then(() => {
      refresh();
    });

    return () => {
      clearTimeout(timeout);

      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}