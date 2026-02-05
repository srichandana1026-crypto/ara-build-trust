import { ReactNode } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
 import { Navigation } from "./Navigation";
 import { Footer } from "./Footer";
 
 interface LayoutProps {
   children: ReactNode;
 }
 
 export function Layout({ children }: LayoutProps) {
  useScrollToTop();

   return (
     <div className="min-h-screen flex flex-col">
       <Navigation />
       <main className="flex-1">{children}</main>
       <Footer />
     </div>
   );
 }