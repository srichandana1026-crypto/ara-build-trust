import { useState, useEffect } from "react";

const FIRST_LOAD_KEY = "ara-mobile-first-load";

export function useMobileFirstLoad() {
  const [hasLoaded, setHasLoaded] = useState(() => {
    // Check if we've already shown the loading screen this session
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(FIRST_LOAD_KEY) === "true";
    }
    return false;
  });

  const markAsLoaded = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(FIRST_LOAD_KEY, "true");
    }
    setHasLoaded(true);
  };

  return { hasLoaded, markAsLoaded };
}
