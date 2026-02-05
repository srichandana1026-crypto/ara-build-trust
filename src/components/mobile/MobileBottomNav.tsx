 import { Link, useLocation } from "react-router-dom";
 import { Home, Briefcase, FolderKanban, Plus, MessageCircle } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 const navItems = [
   { name: "Home", path: "/", icon: Home },
   { name: "Services", path: "/services", icon: Briefcase },
   { name: "Projects", path: "/process", icon: FolderKanban },
   { name: "Start", path: "/contact", icon: Plus, primary: true },
   { name: "Contact", path: "/about", icon: MessageCircle },
 ];
 
 export function MobileBottomNav() {
   const location = useLocation();
 
   return (
     <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(var(--mobile-nav-bg))] border-t border-border/30 backdrop-blur-xl pb-safe">
       <div className="flex items-center justify-around h-16">
         {navItems.map((item) => {
           const isActive = location.pathname === item.path;
           const Icon = item.icon;
 
           if (item.primary) {
             return (
               <Link
                 key={item.path}
                 to={item.path}
                 className="flex flex-col items-center justify-center -mt-4 mobile-tap"
               >
                 <div className="w-14 h-14 rounded-full bg-[hsl(var(--mobile-accent))] flex items-center justify-center shadow-lg shadow-[hsl(var(--mobile-accent))]/30">
                   <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                 </div>
                 <span className="text-[10px] font-medium mt-1 text-[hsl(var(--mobile-accent))]">
                   {item.name}
                 </span>
               </Link>
             );
           }
 
           return (
             <Link
               key={item.path}
               to={item.path}
               className={cn(
                 "flex flex-col items-center justify-center px-3 py-2 mobile-tap",
                 isActive ? "text-foreground" : "text-muted-foreground"
               )}
             >
               <Icon
                 className={cn(
                   "h-6 w-6 transition-colors",
                   isActive ? "text-foreground" : "text-muted-foreground"
                 )}
                 strokeWidth={isActive ? 2.5 : 2}
               />
               <span
                 className={cn(
                   "text-[10px] font-medium mt-1 transition-colors",
                   isActive ? "text-foreground" : "text-muted-foreground"
                 )}
               >
                 {item.name}
               </span>
             </Link>
           );
         })}
       </div>
     </nav>
   );
 }