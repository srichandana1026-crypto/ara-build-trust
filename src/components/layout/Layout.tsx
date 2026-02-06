import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { MobileLoadingScreen } from "@/components/mobile/MobileLoadingScreen";
import { MobilePageTransition } from "@/components/mobile/MobilePageTransition";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMobileFirstLoad } from "@/hooks/useMobileFirstLoad";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const { hasLoaded, markAsLoaded } = useMobileFirstLoad();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile-only loading screens */}
      {isMobile && !hasLoaded && (
        <MobileLoadingScreen onComplete={markAsLoaded} />
      )}
      {isMobile && hasLoaded && <MobilePageTransition />}

      {/* Desktop navigation - hidden on mobile */}
      <div className="hidden md:block">
        <Navigation />
      </div>
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      {/* Desktop footer - hidden on mobile */}
      <div className="hidden md:block">
        <Footer />
      </div>
      {/* Mobile bottom navigation - visible only on mobile */}
      <div className="md:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
}