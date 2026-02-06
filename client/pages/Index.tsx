import { Plus } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-60 mt-14">
        {/* Top Bar */}
          <div className="flex-1 p-6 align-middle flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="h-16 border-b border-[#F5F5F5] flex items-center justify-between px-8">
                  <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold text-dark">Lorem ipsum</h1>
                    <span className="text-sm font-medium text-gray-text">(12)</span>
                    <span className="text-sm font-medium text-dark">
                      Lorem ipsum dolar sit amet
                    </span>
                  </div>
                  <button className="h-[38px] px-4 bg-dark rounded-lg flex items-center gap-2 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    <Plus className="w-5 h-5" strokeWidth={1.5} />
                    Lorem ipsum
                  </button>
                </div>
                  {/* Content Area */}  
                  <Textarea placeholder="Enter text here..." rows={10} />
              </div>
          </div>

      </main>
    </div>
  );
}
