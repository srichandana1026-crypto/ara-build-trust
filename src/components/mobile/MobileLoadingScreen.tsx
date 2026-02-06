import { useState, useEffect } from "react";
import araLogo from "@/assets/ara-logo.png";

interface MobileLoadingScreenProps {
  onComplete: () => void;
}

export function MobileLoadingScreen({ onComplete }: MobileLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"initial" | "revealing" | "settled" | "fading">("initial");

  useEffect(() => {
    // Total duration: 3000ms (3 seconds)
    // Phase timing:
    // 0-200ms: Initial state (logo zoomed in, invisible)
    // 200-2200ms: Revealing (logo zooms out and fades in) - 2000ms
    // 2200-2600ms: Settled (logo at rest, progress completes) - 400ms
    // 2600-3000ms: Fading out - 400ms

    // Progress bar: smooth fill over 2.6 seconds
    const progressDuration = 2600;
    const progressInterval = 20;
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
    }, 200);

    // Phase 2: Logo settles into final position
    const settledTimer = setTimeout(() => {
      setPhase("settled");
    }, 2200);

    // Phase 3: Start fading out
    const fadeTimer = setTimeout(() => {
      setPhase("fading");
    }, 2600);

    // Phase 4: Complete and remove from DOM at exactly 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

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
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-400 ease-out ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo container with cinematic animation */}
      <div
        className="relative flex items-center justify-center"
        style={{
          transform: phase === "initial" 
            ? "scale(5) translateY(30vh)" 
            : "scale(1) translateY(0)",
          opacity: phase === "initial" ? 0 : 1,
          transition: "transform 2000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out",
        }}
      >
        <img
          src={araLogo}
          alt="ARA Constructions"
          className="w-44 h-auto object-contain"
        />
      </div>

      {/* Elegant loading bar */}
      <div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-52"
        style={{
          opacity: phase === "initial" ? 0 : 1,
          transform: phase === "initial" ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 600ms ease-out 400ms, transform 600ms ease-out 400ms",
        }}
      >
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.4) 100%)",
              transition: "width 20ms linear",
            }}
          />
        </div>
        <p 
          className="text-white/30 text-[10px] text-center mt-4 font-light tracking-[0.25em] uppercase"
          style={{
            opacity: phase === "initial" ? 0 : 1,
            transition: "opacity 800ms ease-out 600ms",
          }}
        >
          Building Excellence
        </p>
      </div>
    </div>
  );
}
