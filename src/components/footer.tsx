"use client";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full py-6 flex items-center justify-center text-white">
      <div className="flex space-x-6">
        <IconBrandGithub
          className="w-6 z-100 h-6 hover:text-gray-400 cursor-pointer transition-colors duration-300"
          onClick={() => openLink("https://github.com/archittgupta")}
        />
        <IconBrandTwitter
          className="w-6 h-6 z-100 hover:text-gray-400 cursor-pointer transition-colors duration-300"
          onClick={() => openLink("https://twitter.com/archittgupta")}
        />
        <IconBrandLinkedin
          className="w-6 h-6 z-100 hover:text-gray-400 cursor-pointer transition-colors duration-300"
          onClick={() => openLink("https://linkedin.com/in/archit-gupta-973b93261")}
        />
      </div>
    </footer>
  );
}
