import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const images: string[] = [
  "/images/bmw/M4 GT4 1.png",
  "https://i.pinimg.com/736x/5d/ce/1c/5dce1cc4a7c2a05dc6fb5615f24af582.jpg",
  "https://i.pinimg.com/736x/54/dc/eb/54dcebf23f86ad301e3d4a43246efcd5.jpg",
  "https://i.pinimg.com/736x/7b/2b/e9/7b2be922694034952b7ba3b366fcf0fd.jpg",
  "https://i.pinimg.com/736x/c6/bf/6c/c6bf6c45f578f8994666e5b609f4c213.jpg",
  "https://i.pinimg.com/736x/0e/51/27/0e51275fb9d14570c1ac0d5537cb3fef.jpg",
];

interface Position {
  x: number;
  y: number;
}

const CursorAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef<number>(0);
  const lastPos = useRef<Position>({ x: 0, y: 0 });

  const createTrail = (x: number, y: number): void => {
    if (!containerRef.current) return;

    const img = document.createElement("img");
    img.src = images[indexRef.current % images.length];

    img.className =
      "absolute object-cover h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none w-60 rounded-2xl";

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    containerRef.current.appendChild(img);
    indexRef.current++;

    // GSAP Animation
    gsap.fromTo(
      img,
      { scale: 0, opacity: 1, rotate: Math.random() * 20 - 10 },
      {
        scale: 1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => img.remove(),
      },
    );
  };

  useEffect(() => {
    const THRESHOLD = 50;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!containerRef.current) return;

      // Get the bounding box of the tracking container.
      // This tracks the exact layout shift even if GSAP transforms it horizontally!
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate cursor position local to the wide layout container
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      const distance = Math.hypot(
        localX - lastPos.current.x,
        localY - lastPos.current.y
      );

      if (distance > THRESHOLD) {
        createTrail(localX, localY);
        lastPos.current = { x: localX, y: localY };
      }
    };

    // Attaching event listener to window ensures it captures movement across panels
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // Fixed: Made sure it explicitly acts as a wrapper extending across the layout canvas
      className="absolute  inset-y-0 left-0 w-full min-h-screen overflow-hidden pointer-events-none z-[125]"
    />
  );
};

export default CursorAnimation;