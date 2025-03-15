"use client";
import React from "react";
import { ShootingStars } from "@/app/components/ui/shooting-stars";
import { StarsBackground } from "@/app/components/ui/stars-background";
import AnimatedText from "./ui/animated-text";
import TechStack from "./tech-stack";
import Footer from "./footer";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex flex-col items-center  relative px-6 md:px-12">
      
      {/* Animated Heading */}
      <div className="relative z-10 h-28 text-4xl sm:text-5xl md:text-6xl mt-[27vh] lg:text-7xl md:mt-[30vh] sm:mt-[30vh] leading-tight text-center tracking-tight font-semibold bg-clip-text text-transparent bg-white flex flex-col md:flex-row items-center gap-4 md:gap-6">
        
        <AnimatedText />
      </div>

      {/* Tech Stack Section */}
      <div className="  mt-44 sm:mt-38 md:mt-28 flex flex-col items-center">
       
        <TechStack />
      </div>
      <div className="  md:mt-28 pt-6"><Footer/></div>

      {/* Animated Effects */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
