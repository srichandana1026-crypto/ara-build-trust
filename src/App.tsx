import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Services
import ResidentialConstruction from "./pages/services/ResidentialConstruction";
import CommercialConstruction from "./pages/services/CommercialConstruction";
import DesignBuild from "./pages/services/DesignBuild";
import Renovation from "./pages/services/Renovation";
import ProjectManagement from "./pages/services/ProjectManagement";
import ConstructionProcess from "./pages/services/ConstructionProcess";
import Quality from "./pages/services/Quality";
import Estimation from "./pages/services/Estimation";

// Projects
import ResidentialProjects from "./pages/projects/ResidentialProjects";
import CommercialProjects from "./pages/projects/CommercialProjects";
import Villas from "./pages/projects/Villas";

// About
import Story from "./pages/about/Story";
import Vision from "./pages/about/Vision";
import WhyUs from "./pages/about/WhyUs";

// Contact
import StartProject from "./pages/contact/StartProject";
import Consultation from "./pages/contact/Consultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services */}
          <Route path="/services/residential" element={<ResidentialConstruction />} />
          <Route path="/services/commercial" element={<CommercialConstruction />} />
          <Route path="/services/design-build" element={<DesignBuild />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/process" element={<ConstructionProcess />} />
          <Route path="/services/quality" element={<Quality />} />
          <Route path="/services/estimation" element={<Estimation />} />
          
          {/* Projects */}
          <Route path="/projects/residential" element={<ResidentialProjects />} />
          <Route path="/projects/commercial" element={<CommercialProjects />} />
          <Route path="/projects/villas" element={<Villas />} />
          
          {/* About */}
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/why-us" element={<WhyUs />} />
          
          {/* Contact */}
          <Route path="/contact/start-project" element={<StartProject />} />
          <Route path="/contact/consultation" element={<Consultation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
