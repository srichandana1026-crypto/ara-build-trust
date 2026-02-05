 import { ReactNode } from "react";
 import { useScrollAnimation } from "@/hooks/useScrollAnimation";
 import { cn } from "@/lib/utils";
 
 interface AnimatedSectionProps {
   children: ReactNode;
   className?: string;
   direction?: "up" | "left" | "right";
   delay?: number;
 }
 
 export function AnimatedSection({
   children,
   className,
   direction = "up",
   delay = 0,
 }: AnimatedSectionProps) {
   const { ref, isVisible } = useScrollAnimation();
 
   const directionClass = {
     up: "animate-on-scroll",
     left: "animate-on-scroll-left",
     right: "animate-on-scroll-right",
   }[direction];
 
   return (
     <div
       ref={ref}
       className={cn(directionClass, isVisible && "visible", className)}
       style={{ transitionDelay: `${delay}ms` }}
     >
       {children}
     </div>
   );
 }