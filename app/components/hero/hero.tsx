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

            <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black hero">
                <div className="relative w-full h-full hero-inner">
                    
                    <div 
                        ref={spotlightRef} 
                        className="absolute flex w-full h-full gap-2 origin-center transform -translate-x-1/2 -translate-y-1/2 hero-spotlight-gallery top-1/2 left-1/2 will-change-transform"
                    >
                        {/* Column 1 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/e3/aa/9c/e3aa9ce17ab53f854ec61042b2a3dc1f.jpg' className="relative object-cover transform scale-125" priority/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/a0/d3/14/a0d314111d86d1577f092ab9a2bbf1c6.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/22/c5/2f/22c52f46ca0c00d69ee11cb7019f70d4.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/1-v2.jpg' 
                                className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <video 
                                    src={'/videos/hero-v2.mp4'}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 object-cover w-full h-full transform scale-125"
                                />
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col flex-1 h-full gap-2 col">
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/b3/1f/26/b31f266d699f7695524c0b4145bd4797.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg' className="relative object-cover transform scale-125"/>
                            </div>
                            <div className="relative flex-1 overflow-hidden item">
                                <Image fill sizes="(max-width: 1000px) 33vw, 15vw" alt="" src='/images/2-v2.jpg' className="relative object-cover transform scale-125"/>
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