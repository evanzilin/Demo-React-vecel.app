import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-dark flex items-center justify-between px-4 z-50">
      {/* Beta Badge */}
      <div className="flex items-center gap-4 w-[240px]">
        <div className="ml-[123px] h-[22px] px-[10px] bg-dark-secondary rounded-full flex items-center justify-center">
          <span className="text-gray-text text-xs font-medium">beta</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-[540px] mx-auto">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search className="w-[18px] h-[18px] text-gray-text" strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-9 pl-10 pr-20 bg-dark-secondary border border-dark-tertiary rounded-xl text-sm text-gray-text placeholder:text-gray-text focus:outline-none focus:ring-1 focus:ring-dark-tertiary"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <div className="w-[22px] h-[22px] bg-dark-tertiary rounded-lg flex items-center justify-center">
              <span className="text-gray-text text-sm font-medium">⌘</span>
            </div>
            <div className="w-[22px] h-[22px] bg-dark-tertiary rounded-lg flex items-center justify-center">
              <span className="text-gray-text text-xs font-medium">K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 w-[240px] justify-end">
        <button className="h-8 px-4 bg-purple rounded-lg text-dark text-sm font-semibold hover:opacity-90 transition-opacity">
          Account plans
        </button>
        <Bell className="w-5 h-5 text-white" strokeWidth={1.5} />
        <button className="text-white text-sm font-medium hover:opacity-80">
          Support
        </button>
        <div className="w-9 h-9 rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <span className="text-dark text-xs font-medium">KC</span>
        </div>
      </div>
    </header>
  );
}
