 import { ReactNode, useEffect, useState } from "react";
 import { Navigation } from "./Navigation";
 import { Footer } from "./Footer";
 import { MobileLayout } from "@/components/mobile/MobileLayout";
 
 interface LayoutProps {
   children: ReactNode;
  mobileContent?: ReactNode;
 }
 
 export function Layout({ children, mobileContent }: LayoutProps) {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const checkMobile = () => {
       setIsMobile(window.innerWidth < 768);
     };
     
     checkMobile();
     window.addEventListener("resize", checkMobile);
     return () => window.removeEventListener("resize", checkMobile);
   }, []);

   // Render mobile layout if on mobile and mobile content is provided
   if (isMobile && mobileContent) {
     return <MobileLayout>{mobileContent}</MobileLayout>;
   }

   // Desktop/Tablet layout
   return (
     <div className="min-h-screen flex flex-col">
       <Navigation />
       <main className="flex-1">{children}</main>
       <Footer />
     </div>
   );
 }