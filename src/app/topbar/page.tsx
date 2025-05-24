// TopBar.tsx
import { Menu, Mic, Bell, Plus } from "lucide-react";

const navItems = [
  "All",
  "Music",
  "Music of Nepal",
  "Podcasts",
  "Mixes",
  "Taylor Swift",
  "AI",
  "Soul Music",
  "Live",
  "Country Music",
  "Contemporary R&B",
  "Electro-Pop",
  "Presentations",
  "Filmi",
  "Recently uploaded",
];

export default function TopBar() {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-2 flex flex-col sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-3">
          <Menu className="h-6 w-6 text-gray-700" />
          <span className="text-xl font-bold text-red-600">YouTube</span>
          <span className="text-xs text-gray-500 font-semibold">NP</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-4 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-100 px-4 py-2 rounded-r-full border border-gray-300 border-l-0">
            🔍
          </button>
          <button className="ml-2 p-2 bg-gray-100 rounded-full">
            <Mic className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-full">
            <Plus className="w-4 h-4" /> Create
          </button>
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              9+
            </span>
          </div>
          <img
            src="https://i.pravatar.cc/30"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>

      {/* Navigation Chips */}
      <div className="mt-3 overflow-x-auto whitespace-nowrap space-x-2 scrollbar-hide flex">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`inline-block px-4 py-1.5 text-sm rounded-lg whitespace-nowrap ${
              item === "All"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}
