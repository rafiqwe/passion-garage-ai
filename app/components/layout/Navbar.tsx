"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDeskTop";
import { NavLogo } from "./NavLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Garage", href: "#legendgarage" },
    { label: "Timeline", href: "#scrollstory" },
    { label: "AI Garage", href: "#aigarage" },
    { label: "Gallery", href: "#imagegalary" },
  ];

  return (
    <header className="fixed z-50 w-full transition top-4 h-18" id="navbar">
      <nav className="mx-auto flex h-full w-[90%] items-center justify-between px-4 font-jetbrains-mono">
        {/* Brand Logo Group */}
        <NavLogo />

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <NavDesktop navItems={navItems} />

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
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </header>
  );
};

export default Navbar;
