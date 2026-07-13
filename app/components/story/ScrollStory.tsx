"use client";
import { useGSAP } from "@gsap/react";
import StoryBlock from "./StoryBlock";
import { story } from "./storyData";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      let ctx: gsap.Context;

      requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          ScrollTrigger.refresh();

          // Initialize gsap.matchMedia for responsiveness
          const mm = gsap.matchMedia();

          mm.add(
            {
              // Desktop/Tablet layout rule
              isDesktop: "(min-width: 768px)",
              // Mobile layout rule
              isMobile: "(max-width: 767px)",
            },
            (context) => {
              const { isMobile } = context.conditions as { isMobile: boolean };

              // On mobile, reduce scroll duration multiplier to avoid overly long swipes
              const scrollMultiplier = isMobile ? 1.0 : 1.5;
              
              // Use modern CSS viewport units (vh/svh) safely calculated or fallback
              const getScrollEndHeight = () => {
                const baseHeight = containerRef.current?.clientHeight || window.innerHeight;
                return `+=${baseHeight * story.length * scrollMultiplier}px`;
              };

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: getScrollEndHeight,
                  scrub: isMobile ? 1.0 : 1.5, // Tighter scrub on mobile for better touch responsiveness
                  pin: true,
                  pinSpacing: true,
                  invalidateOnRefresh: true,
                  refreshPriority: 2,
                },
              });

              story.forEach((item, index) => {
                const blockSelector = `#story-wrapper-${item.id + 1}`;
                
                // Scale down motion values slightly on mobile to prevent elements from flying off screen too fast
                const yMove = isMobile ? 40 : 60; 

                if (index === 0) {
                  tl.fromTo(
                    blockSelector,
                    { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
                    {
                      opacity: 0,
                      scale: 1.12,
                      y: -yMove,
                      filter: isMobile ? "blur(10px)" : "blur(20px)", // Heavy blur drops frames on older mobile GPUs
                      duration: 1,
                      ease: "power3.in",
                    },
                  );
                } else {
                  tl.fromTo(
                    blockSelector,
                    {
                      opacity: 0,
                      scale: 0.85,
                      y: yMove,
                      filter: isMobile ? "blur(10px)" : "blur(20px)",
                    },
                    {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                      duration: 1,
                      ease: "power3.out",
                    },
                  ).to(blockSelector, {
                    opacity: 0,
                    scale: 1.12,
                    y: -yMove,
                    filter: isMobile ? "blur(10px)" : "blur(20px)",
                    duration: 1,
                    ease: "power3.in",
                  });
                }
              });

              tl.to({}, { duration: 0.3 });
            },
            containerRef
          );
        }, containerRef);
      });

      return () => {
        if (ctx) ctx.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    // Changed standard min-h-screen to h-[100dvh] to prevent mobile address-bar bouncing issues
    <div
      ref={containerRef}
      id="scrollstory"
      className="relative w-full h-[100dvh] bg-[#050505] overflow-hidden"
    >
      {story.map((item, index) => (
        <div
          key={item.id}
          id={`story-wrapper-${item.id + 1}`}
          className={`absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8 will-change-transform ${
            index === 0 ? "opacity-100 scale-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 w-full h-full opacity-60">
            <video
              src={item.video}
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline // Essential for iOS support
            />
            <div className="absolute inset-0 pointer-events-none bg-black/50" />
          </div>
          
          {/* Ensure wrapping layer leaves space for margins on mobile */}
          <div className="relative z-20 flex items-center justify-center w-full max-w-4xl mx-auto">
            <StoryBlock
              sectionRef={undefined}
              title={item.title}
              subtitle={item.subtitle}
            />
          </div>
        </div>
      ))}
    </div>
  );
}