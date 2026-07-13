"use client";

import { useRef } from "react";
import CarSlide from "./CarSlide";
import { cars } from "./carData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GarageDoor from "./GarageDoor";

gsap.registerPlugin(ScrollTrigger);

export default function LegendGarage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const garageDoorRef = useRef<HTMLDivElement>(null);
  const carRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      let ctx: gsap.Context;

      requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          ScrollTrigger.refresh();

          const mm = gsap.matchMedia();

          mm.add(
            {
              isDesktop: "(min-width: 768px)",
              isMobile: "(max-width: 767px)",
            },
            (context) => {
              const { isMobile } = context.conditions as { isMobile: boolean };

              // Responsive animation tuning configurations
              const entryX = isMobile ? 200 : 500;
              const exitX = isMobile ? -250 : -600;
              const scrollLength = isMobile ? cars.length * 1200 : cars.length * 2000;

              // Clean responsive state resets
              gsap.set(carRefs.current.filter(Boolean), {
                opacity: 0,
                x: entryX,
                scale: isMobile ? 0.9 : 0.8,
              });
              gsap.set(".car-image", { scale: isMobile ? 0.95 : 0.8, opacity: 0 });
              gsap.set(".car-title", { y: isMobile ? 40 : 100, opacity: 0 });
              gsap.set(".car-quote", { y: isMobile ? 30 : 80, opacity: 0 });
              gsap.set(".car-stat", { y: 30, opacity: 0 });
              gsap.set(".car-bg-title", { scale: isMobile ? 1.4 : 2, opacity: 0 });
              gsap.set(".car-glow", { opacity: 0 });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top top",
                  end: () => `+=${scrollLength}px`,
                  scrub: isMobile ? 1.0 : 1.2,
                  pin: true,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                  refreshPriority: 1,
                },
              });

              // Intro Title Animation
              tl.fromTo(
                titleRef.current,
                { opacity: 0, scale: isMobile ? 1.3 : 2, filter: "blur(15px)" },
                { opacity: 1, scale: 1, duration: 2, ease: "power3.inOut", filter: "blur(0px)" },
              )
                .to({}, { duration: 1 })
                .to(titleRef.current, {
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(15px)",
                  duration: 1.5,
                });

              // Dynamic Loops through Car Slides
              cars.forEach((_, index) => {
                const carEl = carRefs.current[index];
                if (!carEl) return;

                tl.to(carEl, {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 2,
                  ease: "power4.out",
                })
                  .to(
                    carEl.querySelector(".car-image"),
                    { opacity: 1, scale: 1, duration: 2, ease: "power3.out" },
                    "<",
                  )
                  .to(
                    carEl.querySelector(".car-bg-title"),
                    { opacity: 1, scale: 1, duration: 2 },
                    "<",
                  )
                  .to(
                    carEl.querySelector(".car-glow"),
                    { opacity: 0.45, duration: 2 },
                    "<",
                  );

                tl.to(
                  carEl.querySelector(".car-title"),
                  { opacity: 1, y: 0, duration: 1 },
                  "-=1.2",
                )
                  .to(
                    carEl.querySelector(".car-quote"),
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.8",
                  )
                  .to(
                    carEl.querySelectorAll(".car-stat"),
                    { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 },
                    "-=0.5",
                  );

                tl.to(carEl.querySelector(".car-image"), {
                  y: isMobile ? -10 : -25,
                  duration: 2,
                  ease: "sine.inOut",
                })
                  .to(carEl.querySelector(".car-image"), {
                    y: 0,
                    duration: 2,
                    ease: "sine.inOut",
                  })
                  .to({}, { duration: 2 });

                if (index < cars.length - 1) {
                  tl.to(carEl.querySelectorAll(".car-stat"), {
                    opacity: 0,
                    y: -30,
                    stagger: 0.08,
                  })
                    .to(carEl.querySelector(".car-quote"), { opacity: 0, y: -30 }, "<")
                    .to(carEl.querySelector(".car-title"), { opacity: 0, y: -40 }, "<")
                    .to(
                      carEl.querySelector(".car-image"),
                      {
                        x: exitX,
                        rotation: isMobile ? -4 : -8,
                        scale: isMobile ? 0.9 : 0.8,
                        opacity: 0,
                        duration: 2,
                        ease: "power4.in",
                      },
                      "<",
                    )
                    .to(carEl.querySelector(".car-glow"), { opacity: 0 }, "<")
                    .to(
                      carEl.querySelector(".car-bg-title"),
                      { scale: isMobile ? 1.4 : 2, opacity: 0, duration: 2 },
                      "<",
                    )
                    .to(carEl, { opacity: 0, duration: 0.5 }, "<");
                }
              });
            },
            sectionRef
          );
        }, sectionRef);
      });

      return () => {
        if (ctx) ctx.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="legendgarage"
      
      className="relative w-full md:-mt-70 h-[100dvh] bg-background overflow-hidden"
    >
      {/* Centered Intro Title */}
      <div
        ref={titleRef}
        id="legendgarage1"
        className="absolute inset-0 z-20 flex items-center justify-center w-full h-full p-4 pointer-events-none"
      >
        <h2 className="font-black font-jetbrains-mono leading-[1.1] md:leading-none text-center text-white uppercase text-4xl sm:text-6xl md:text-8xl max-w-4xl tracking-tight">
          Machines
          <br />
          <span className="flex flex-row flex-wrap items-center justify-center gap-2 md:flex-nowrap">
            That{" "}
            <span className="inline-block w-24 h-10 overflow-hidden align-middle bg-red-400 rounded-full sm:w-36 sm:h-14 md:w-50 md:h-20">
              <video
                src={"/videos/machine.mp4"}
                loop
                autoPlay
                playsInline
                muted
                className="object-cover w-full h-full rounded-full"
              />
            </span>{" "}
            Changed
          </span>
          History
        </h2>
      </div>

      {/* Stacked Car Canvas Slides */}
      <div className="absolute inset-0 grid w-full h-full place-items-center">
        {cars.map((car, index) => (
          <CarSlide
            key={car.id}
            ref={(el: HTMLDivElement | null) => {
              carRefs.current[index] = el;
            }}
            car={car}
          />
        ))}
      </div>

      {/* Garage Door layer */}
      <div ref={garageDoorRef} className="absolute inset-0 z-30 pointer-events-none">
        <GarageDoor />
      </div>
    </section>
  );
}