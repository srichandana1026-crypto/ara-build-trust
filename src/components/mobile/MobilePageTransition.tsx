import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import araLogo from "@/assets/ara-logo.png";

export function MobilePageTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger transition on route change
    setIsTransitioning(true);
    setProgress(0);

    // Quick progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 30);

    // Hide after short duration
    const hideTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-200">
      {/* Subtle logo with gentle pulse */}
      <div className="animate-pulse">
        <img
          src={araLogo}
          alt="ARA Constructions"
          className="w-20 h-auto object-contain opacity-90"
        />
      </div>

      {/* Minimal loading bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32">
        <div className="h-[1px] w-full bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-black/40 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
