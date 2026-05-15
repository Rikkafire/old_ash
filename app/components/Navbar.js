"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-4 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-2"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-4 group"
        >
          {/* Exact Logo Image */}
          <div className="relative w-16 h-16 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Ash-Lilies Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[0.4em] text-white uppercase leading-none">
              ASH<span className="text-lily-red">LILIES</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-smoke uppercase mt-1">
              Dev Agency
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {["Services", "Projects", "Process", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-all"
            >
              {item}
            </Link>
          ))}
          <button className="bg-lily-red hover:bg-[#b34300] text-white px-8 py-3 rounded-none text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-lily-red/20">
            Initiate
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer hover:text-lily-red transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
}
