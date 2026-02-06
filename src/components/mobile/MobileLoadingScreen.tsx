import { useState, useEffect } from "react";
import araLogo from "@/assets/ara-logo.png";

interface MobileLoadingScreenProps {
  onComplete: () => void;
}

export function MobileLoadingScreen({ onComplete }: MobileLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"zoomed" | "revealing" | "complete">("zoomed");

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Phase 1: Start zoomed in, wait a moment
    const revealTimer = setTimeout(() => {
      setPhase("revealing");
    }, 300);

    // Phase 2: Complete and fade out
    const completeTimer = setTimeout(() => {
      setPhase("complete");
    }, 2200);

    // Phase 3: Remove from DOM
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-400 ${
        phase === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo container with cinematic animation */}
      <div
        className={`relative flex items-center justify-center transition-all duration-[1800ms] ease-out ${
          phase === "zoomed"
            ? "scale-[5] translate-y-[20vh] opacity-0"
            : phase === "revealing"
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-100 translate-y-0 opacity-100"
        }`}
      >
        <img
          src={araLogo}
          alt="ARA Constructions"
          className="w-40 h-auto object-contain"
        />
      </div>

      {/* Elegant loading bar */}
      <div
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 w-48 transition-all duration-[1000ms] delay-500 ${
          phase === "zoomed" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/40 text-xs text-center mt-3 font-light tracking-wider">
          ARA CONSTRUCTIONS
        </p>
      </div>
    </div>
  );
}
