"use client";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex items-center justify-center text-white">
      <div className="flex space-x-6">
        <a
          href="https://github.com/archittgupta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a
          href="https://twitter.com/archittgupta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a
          href="https://linkedin.com/in/archit-gupta-973b93261"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
}
