"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Smoke Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[400px] h-[600px] bg-gradient-to-t from-smoke/20 to-transparent blur-[100px] animate-smoke"
            style={{
              left: `${i * 20}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
        <div>
          <h2 className="text-smoke font-bold tracking-[0.3em] uppercase mb-4 text-sm animate-pulse">
            Dev Agency
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            ASH<br />
            <span className="text-lily-red">LILIES</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-widest uppercase mb-10 max-w-xl mx-auto lg:mx-0">
            Build. Scale. Evolve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button className="bg-lily-red hover:bg-[#b34300] text-white px-12 py-5 rounded-none font-bold tracking-widest uppercase transition-all hover:scale-105 shadow-[0_0_30px_rgba(211,84,0,0.3)]">
              Initiate Project
            </button>
            <button className="border border-smoke hover:border-lily-red text-white px-12 py-5 rounded-none font-bold tracking-widest uppercase transition-all">
              The Portfolio
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Exact Logo Image in Hero */}
          <div className="relative w-80 h-80 md:w-[600px] md:h-[600px] group">
            <div className="absolute inset-0 bg-lily-red/10 blur-[120px] rounded-full group-hover:bg-lily-red/20 transition-all duration-1000" />
            <div className="relative w-full h-full animate-burn">
               <Image
                  src="/logo.png"
                  alt="Ash-Lilies Logo"
                  fill
                  className="object-contain"
                  priority
               />
            </div>
            
            {/* Background Smoke Effect behind logo */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-20 animate-smoke -z-10">
              <path d="M100,350 Q150,200 100,50" stroke="var(--smoke-grey)" strokeWidth="10" fill="none" />
              <path d="M300,350 Q250,200 300,50" stroke="var(--smoke-grey)" strokeWidth="10" fill="none" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
