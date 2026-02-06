import { Plus } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="ml-60 mt-14">
        {/* Top Bar */}
        <div className="h-16 border-b border-[#F5F5F5] flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-dark">Lorem ipsum</h1>
            <span className="text-sm font-medium text-gray-text">(12)</span>
            <span className="text-sm font-medium text-dark">Lorem ipsum dolar sit amet</span>
          </div>
          
          <button className="h-[38px] px-4 bg-dark rounded-lg flex items-center gap-2 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            <Plus className="w-5 h-5" strokeWidth={1.5} />
            Lorem ipsum
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8">
          <div className="w-full max-w-[1080px] h-[213px] rounded-xl bg-[#D9D9D9]"></div>
        </div>
      </main>
    </div>
  );
}
