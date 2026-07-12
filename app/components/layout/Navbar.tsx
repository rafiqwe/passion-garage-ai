"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Garage", href: "#garage" },
    { label: "Timeline", href: "#timeline" },
    { label: "AI Garage", href: "#ai" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed z-50 w-full transition top-4 h-18" id="navbar">
      <nav className="mx-auto flex h-full w-[90%] items-center justify-between px-4 font-jetbrains-mono">
        {/* Brand Logo Group */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white font-jetbrains-mono md:text-4xl">
            IGNITE
          </p>
          <span className="font-sora text-[10px] tracking-[0.35em] text-secondary uppercase sm:text-[10px]">
            Driven by Passion
          </span>
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="items-center hidden gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary after:bg-accent relative text-[16px] tracking-[0.2em] text-white uppercase transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Explore CTA Button (Hidden on Mobile) */}
        <div className="hidden cursor-pointer md:block">
          <button className="group flex items-center gap-1 cursor-pointer hover:text-primary after:bg-accent relative text-[16px] tracking-[0.2em] text-white uppercase transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full">
            Explore
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Mobile Toggle Button (Visible only on Mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Panel */}
      <div
        className={`fixed inset-0 top-24 z-40 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 mt-4 text-lg  underline group underline-offset-4 cursor-pointer hover:text-primary after:bg-accent relative text-[16px] tracking-[0.2em] text-white uppercase transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full"
          >
            Explore
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;