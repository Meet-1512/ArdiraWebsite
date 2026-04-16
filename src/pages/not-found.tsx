import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 font-sans">
      <Card className="w-full max-w-md mx-4 shadow-xl shadow-emerald-900/5 border-slate-200/60 rounded-2xl">
        <CardContent className="pt-10 pb-10 text-center flex flex-col items-center">
          <div className="bg-emerald-50 p-5 rounded-full mb-6">
            <AlertCircle className="h-12 w-12 text-[#43AF57]" />
          </div>
          
          <h1 className="text-3xl font-bold font-display text-[#0f172a] mb-3">
            404
          </h1>
          <h2 className="text-xl font-semibold text-[#0f172a] mb-2">
            Page Not Found
          </h2>

          <p className="text-base text-slate-500 mb-8 px-4">
            The Page you are trying to find is not available.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#43AF57] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-600 transition-all shadow-md active:scale-95 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return to Homepage
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
