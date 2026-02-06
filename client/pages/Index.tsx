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
          <div className="flex-1 px-6 align-middle flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="h-16 border-b border-[#F5F5F5] flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold text-dark">Lorem ipsum</h1>
                    <span className="md:block hidden text-sm font-medium text-gray-text">(12)</span>
                    <span className="md:block hidden text-sm font-medium text-dark">
                      Lorem ipsum dolar sit amet
                    </span>
                  </div>
                  <button className="h-[38px] px-4 bg-dark rounded-lg flex items-center gap-2 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    <Plus className="w-5 h-5" strokeWidth={1.5} />
                    <span className="md:block hidden">Lorem ipsum</span>
                  </button>
                </div>
                <span className="md:hidden block text-sm font-medium text-gray-text">(12)</span>
                <span className="md:hidden block dtext-sm font-medium text-dark my-3">
                    Lorem ipsum dolar sit amet
                </span>
                  {/* Content Area */}  
                  <textarea
                    className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 x-lg:w-[1080px] md:h-[213px] mt-5"
                    placeholder="Enter text here..."
                    rows={10}
                  />
                  {/* Alternatively, using the Textarea component */}
                  {/* <Textarea placeholder="Enter text here..." rows={10} /> */} 
              </div>
          </div>  
      </main>
    </div>
  );
}
