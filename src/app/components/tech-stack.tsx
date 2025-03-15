"use client";
import React from "react";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 md:gap-6 gap-4 p-4">
        {[
          { src: "js", alt: "JavaScript" },
          { src: "ts", alt: "TypeScript" },
          { src: "next", alt: "Next.js" },
          { src: "react", alt: "React.js" },
          { src: "prisma", alt: "Prisma" },
          { src: "java", alt: "Java" },
          { src: "redux", alt: "Redux" },
          { src: "html", alt: "HTML" },
          { src: "css", alt: "CSS" },
          { src: "tailwind", alt: "Tailwind CSS" },
        ].map((tech) => (
          <Image
            key={tech.src}
            src={`https://skillicons.dev/icons?i=${tech.src}`}
            alt={tech.alt}
            width={40} // Default size
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
