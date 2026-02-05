 import { ReactNode, useEffect, useState } from "react";
 import { useLocation } from "react-router-dom";
 import { MobileBottomNav } from "./MobileBottomNav";
 
 interface MobileLayoutProps {
   children: ReactNode;
 }
 
 export function MobileLayout({ children }: MobileLayoutProps) {
   const location = useLocation();
   const [isVisible, setIsVisible] = useState(false);
 
   useEffect(() => {
     // Reset scroll to top on route change
     window.scrollTo(0, 0);
     
     // Trigger page transition
     setIsVisible(false);
     const timer = setTimeout(() => setIsVisible(true), 50);
     return () => clearTimeout(timer);
   }, [location.pathname]);
 
   return (
     <div className="min-h-screen bg-background text-foreground">
       <main
         className={`pb-24 transition-all duration-200 ease-out ${
           isVisible
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-2"
         }`}
       >
         {children}
       </main>
       <MobileBottomNav />
     </div>
   );
 }