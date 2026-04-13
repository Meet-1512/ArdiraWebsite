import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RecaptchaBadge } from "@/components/RecaptchaBadge";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import PartnerHub from "@/pages/PartnerHub";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import RelationshipVistaUserGuide from "@/pages/RelationshipVistaUserGuide";
import RelationshipVistaInstallationGuide from "@/pages/RelationshipVistaInstallationGuide";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // When changing routes we want an instant jump, not a smooth animation
    // Override the CSS 'scroll-behavior: smooth' temporarily
    document.documentElement.style.scrollBehavior = "auto";
    
    window.dispatchEvent(new Event("scroll-to-top"));
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    
    // Multiple retries for strict enforcement, still using instant
    const retries = [50, 100, 200];
    retries.forEach((ms) => {
      setTimeout(() => {
        if (window.scrollY !== 0) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
        }
      }, ms);
    });

    // Restore smooth scroll behavior for in-page anchors
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 400);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route
        path="/relationship-vista-user-guide"
        component={RelationshipVistaUserGuide}
      />
      <Route
        path="/relationship-vista-installation-guide"
        component={RelationshipVistaInstallationGuide}
      />
      <Route path="/partners" component={PartnerHub} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms-of-use" component={Terms} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
        <RecaptchaBadge />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
