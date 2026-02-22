import { useState, useEffect } from "react";
import araLogo from "@/assets/ara-logo.png";

interface MobileLoadingScreenProps {
  onComplete: () => void;
}

export function MobileLoadingScreen({ onComplete }: MobileLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"initial" | "revealing" | "settled" | "fading">("initial");

  useEffect(() => {
    // Total duration: 4500ms (4.5 seconds)
    // Phase timing (evenly paced):
    // 0-300ms: Initial state (logo zoomed in at 5x, off-screen, invisible)
    // 300-3300ms: Revealing (logo smoothly zooms out and rises into center) - 3000ms
    // 3300-4000ms: Settled (logo at rest, progress bar completes) - 700ms
    // 4000-4500ms: Fading out smoothly - 500ms

    // Progress bar: smooth fill over 4 seconds
    const progressDuration = 4000;
    const progressInterval = 25;
    const progressStep = (100 / progressDuration) * progressInterval;
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressStep;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, progressInterval);

    // Phase 1: Start revealing (logo animation begins)
    const revealTimer = setTimeout(() => {
      setPhase("revealing");
    }, 300);

    // Phase 2: Logo settles into final position
    const settledTimer = setTimeout(() => {
      setPhase("settled");
    }, 3300);

    // Phase 3: Start fading out
    const fadeTimer = setTimeout(() => {
      setPhase("fading");
    }, 4000);

    // Phase 4: Complete and remove from DOM at exactly 4.5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(revealTimer);
      clearTimeout(settledTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-out ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo container with cinematic animation */}
      <div
        className="relative flex items-center justify-center"
        style={{
          transform: phase === "initial" 
            ? "scale(5) translateY(40vh)" 
            : "scale(1) translateY(0)",
          opacity: phase === "initial" ? 0 : 1,
          transition: "transform 3000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1200ms ease-out",
        }}
      >
        <img
          src={araLogo}
          alt="ARA Constructions"
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* Elegant loading bar */}
      <div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-56"
        style={{
          opacity: phase === "initial" ? 0 : 1,
          transform: phase === "initial" ? "translateY(24px)" : "translateY(0)",
          transition: "opacity 800ms ease-out 500ms, transform 800ms ease-out 500ms",
        }}
      >
        <div className="h-[2px] w-full bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)",
              transition: "width 25ms linear",
            }}
          />
        </div>
        <p 
          className="text-black/30 text-[10px] text-center mt-5 font-light tracking-[0.3em] uppercase"
          style={{
            opacity: phase === "initial" ? 0 : 1,
            transition: "opacity 1000ms ease-out 800ms",
          }}
        >
          Building Excellence
        </p>
      </div>
    </div>
  );
}
