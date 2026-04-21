import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RecaptchaBadge } from "@/components/RecaptchaBadge";

const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/Products"));
const Team = lazy(() => import("@/pages/Team"));
const Contact = lazy(() => import("@/pages/Contact"));
const PartnerHub = lazy(() => import("@/pages/PartnerHub"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const RelationshipVistaUserGuide = lazy(() => import("@/pages/RelationshipVistaUserGuide"));
const RelationshipVistaInstallationGuide = lazy(() => import("@/pages/RelationshipVistaInstallationGuide"));

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
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#43AF57]"></div></div>}>
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
    </Suspense>
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
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
