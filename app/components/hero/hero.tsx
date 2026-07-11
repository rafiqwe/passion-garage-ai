"use client";

import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
    const heroHeaderTextRef = useRef<HTMLHeadingElement | null>(null); 
    const heroRef = useRef<HTMLDivElement | null>(null); 
    const logoRef = useRef<HTMLDivElement | null>(null); 
    const logoTextRef = useRef<HTMLHeadingElement | null>(null);
    const heroFooterRef = useRef<HTMLDivElement | null>(null); 
    const spotlightRef = useRef<HTMLDivElement | null>(null); 
    const heroButtonRef = useRef<HTMLAnchorElement | null>(null); 
    const heroHeaderContainerRef = useRef<HTMLDivElement | null>(null);

    const MOBILE_BREAKPOINT = 1000;

    useGSAP(() => {
        // Intro Split Text for Main Header
        const handleSplit = SplitText.create(heroHeaderTextRef.current, {
            type: 'words',
            wordsClass: 'word',
        });

        // Intro Split Text for Logo (Creates an elegant, high-end entry animation)
        const logoSplit = SplitText.create(logoTextRef.current, {
            type: 'chars',
            charsClass: 'char',
        });

        const headerFadeTargets = [...handleSplit.words, heroButtonRef.current];
        
        // Initial States
        gsap.set(headerFadeTargets, { opacity: 0, y: 20 });
        gsap.set(logoSplit.chars, { opacity: 0, filter: "blur(10px)", y: 10 });

        // Animate Header Content In
        gsap.to(headerFadeTargets, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.2
        });

        // Animate Logo Characters In beautifully
        gsap.to(logoSplit.chars, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power2.out",
            delay: 0.1
        });

        const mm = gsap.matchMedia();

        // DESKTOP WORKFLOW
        mm.add(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`, () => {
            gsap.set(spotlightRef.current, { scale: 3 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: () => `+=${window.innerHeight * 3}px`, 
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
          refreshPriority: 3, 
                }
            });

            tl.to(spotlightRef.current, { scale: 1, ease: "none" }, 0);
            tl.to(heroHeaderContainerRef.current, { scale: 0.5, opacity: 0, filter: "blur(10px)", ease: "none" }, 0);
            
            // Subtle premium scroll transition for the logo (Scales down slightly and settles)
            tl.to(logoRef.current, {
                scale: 0.85,
                textShadow: "0 0 20px rgba(255,255,255,0.2)",
                ease: "power1.inOut"
            }, 0);
            
            tl.to(heroFooterRef.current, { scale: 0.75, filter: "blur(20px)", opacity: 0, ease: "none" }, 0);
        });

        // MOBILE WORKFLOW
        mm.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
            gsap.set(spotlightRef.current, { scale: 5 }); 

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: () => `+=${window.innerHeight * 2.5}px`, 
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(spotlightRef.current, { scale: 1, ease: "none" }, 0);
            tl.to(heroHeaderContainerRef.current, { scale: 0.5, opacity: 0, filter: "blur(10px)", ease: "none" }, 0);
            tl.to(logoRef.current, { scale: 0.9, ease: "none" }, 0);
            tl.to(heroFooterRef.current, { scale: 0.75, filter: "blur(20px)", opacity: 0, ease: "none" }, 0);
        });

        return () => {
            handleSplit.revert();
            logoSplit.revert();
            mm.revert();
        };
    }, { scope: heroRef });

    return (
        <section className="relative w-full overflow-x-hidden">
            {/* Kept static in layout flow to prevent crazy screen jumping */}
            <div ref={logoRef} className="fixed z-50 flex items-center justify-start w-auto text-white origin-bottom-left pointer-events-none select-none logo bottom-8 left-10 will-change-transform whitespace-nowrap">
                <h5 ref={logoTextRef} className="text-xl font-light tracking-[0.25em] uppercase font-sora md:text-2xl">
                    Passion Garage AI
                </h5>
            </div> 

            <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black hero">
                <div className="relative w-full h-full hero-inner">
                    
                    <div 
                        ref={spotlightRef} 
                        className="absolute flex w-full h-full gap-2 origin-center transform -translate-x-1/2 -translate-y-1/2 hero-spotlight-gallery top-1/2 left-1/2 will-change-transform"
                    >
                        {/* Column 1 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/1-v2.jpg' className="relative object-cover transform scale-125" priority/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/2-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/3-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/4-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <video 
                                    src={'/videos/hero.mp4'}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 object-cover w-full h-full transform scale-125"
                                />
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/6-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/7-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/8-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/9-v2.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                        </div>
                    </div>

                    <div ref={heroHeaderContainerRef} className="hero-header font-jetbrains-mono absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[45%] flex flex-col items-center gap-3 text-white pointer-events-none will-change-transform">
                        <h1 ref={heroHeaderTextRef} className="text-xl font-medium leading-relaxed md:text-2xl">
                            Experience legendary machines through cinematic storytelling, immersive visuals, and an AI-powered automotive companion.
                        </h1>
                        <Link href='#' className='px-6 py-3 text-white border pointer-events-auto bo btn rounded-3xl border-accent' ref={heroButtonRef}>
                            Explore Garage
                        </Link>
                    </div>

                    <div ref={heroFooterRef} className="absolute hidden text-white bottom-8 right-8 w-50 md:block">
                        <h5>Discover the future of automotive innovation</h5>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none overlay will-change-auto"></div>
            </section>
        </section>
    );
}