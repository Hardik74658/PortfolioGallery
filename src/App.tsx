import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import './index.css'; // Ensure global styles are imported

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          {/* Left Vertical Wavy Lines */}
          <div className="fixed top-0 left-0 h-screen w-32 z-[9999] pointer-events-none flex items-center">
            <div className="flex flex-row gap-2">
              <svg
                className="h-screen w-16 text-blue-500 opacity-80 blur-sm animate-wave"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M50 0 Q70 25 50 50 T50 100" />
              </svg>
              <svg
                className="h-screen w-16 text-blue-300 opacity-80 blur-sm animate-wave"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M50 0 Q30 25 50 50 T50 100" />
              </svg>
            </div>
          </div>

          {/* Right Vertical Wavy Lines */}
          <div className="fixed top-0 right-0 h-screen w-32 z-[9999] pointer-events-none flex items-center justify-end">
            <div className="flex flex-row gap-2">
              <svg
                className="h-screen w-16 text-purple-500 opacity-80 blur-sm animate-wave"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M50 0 Q30 25 50 50 T50 100" />
              </svg>
              <svg
                className="h-screen w-16 text-purple-300 opacity-80 blur-sm animate-wave"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M50 0 Q70 25 50 50 T50 100" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
