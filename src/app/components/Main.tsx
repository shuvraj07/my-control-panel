import React, { useState } from "react";
import { Menu, Bell, User, Search, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Trending", path: "/trending" },
    { label: "Subscriptions", path: "/subscriptions" },
    { label: "Library", path: "/library" },
    { label: "History", path: "/history" },
  ];

  const sidebarClass = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${sidebarClass}`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="text-xl focus:outline-none">
          <X className="w-6 h-6" />
        </button>
      </div>
      <ul className="p-4 space-y-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <button
              onClick={() => {
                onClose();
              }}
              className="w-full text-left hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-2xl focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-3">
          <img
            src="/api/placeholder/40/40"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">MyTube</h1>
        </div>

        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gray-200 border border-l-0 rounded-r-full hover:bg-gray-300">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Bell className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <User className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
