"use client";
import { useState, useEffect, useCallback } from "react";

const texts = [
  "Hi, I'm Archit, a full-stack web dev.",
  "Hi, I'm Archit, a learner.",
  "Hi, I'm Archit, I know how to get it done.",
  "Hi, I'm Archit, a chess player.",
  "Hi, I'm Archit, a SeedheMaut fan.",
  "Hi, I'm Archit, a drone enthusiast.",

];

const allowedCharacters = ["B", "A", "R", "C", "D", "リ","ス","ト","か","ら", "R", "0", "1", "M", "L", "K", "J", "I", "H", "G", "F", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const getRandomCharacter = () =>
  allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];

export default function AnimatedText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = useCallback(async (nextText: string) => {
    setIsAnimating(true);
    const currentText = displayText;
    const maxLength = nextText.length-15; // Keep the scrambled text size close to target length
  
    // Scrambling effect
    for (let i = 0; i < 6; i++) { // Reduce iterations for a smoother effect
      const scrambled = Array.from({ length: maxLength }, (_, index) =>
        Math.random() > 0.7 ? nextText[index] : getRandomCharacter()
      ).join("");
  
      setDisplayText(scrambled);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
  
    // Set final text
    setDisplayText(nextText);
    setIsAnimating(false);
  }, [displayText]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        animateText(texts[nextIndex]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, isAnimating, animateText]);

  // Initial scramble on mount
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    animateText(texts[0]);
  }, []);

  return (
    <h1 className=" text-3xl sm:text-4xl md:text-5xl transition-all duration-500 max-w-[90vw] break-words text-center">
      {displayText}
    </h1>
  );
}