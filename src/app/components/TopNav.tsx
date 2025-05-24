"use client";

import { Menu, Mic, Search, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const categories = [
  "All",
  "Music",
  "Podcasts",
  "AI",
  "Tesla",
  "Economics",
  "Stocks",
  "Mixes",
  "Academic conference",
  "Calculus",
  "Universities",
  "Music of Nepal",
  "Study Skills",
  "Live",
  "Industry",
];

const sidebarItems = [
  { label: "Trending", icon: "🔥" },
  { label: "Famous", icon: "🌟" },
  { label: "Newly Added", icon: "🆕" },
];

const TopNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <ul className="p-4 space-y-3">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-base font-medium cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
              <span>{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Top Navigation */}
      <div className="w-full bg-white shadow-sm px-4 py-2 sticky top-0 z-30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 cursor-pointer" />
            </button>
            <div className="flex items-center gap-1">
              <Image
                src="/youtube-logo.png"
                alt="YouTube"
                width={90}
                height={30}
              />
              <span className="text-xs text-gray-500">NP</span>
            </div>
          </div>

          {/* Middle: Search */}
          <div className="flex w-full sm:w-auto sm:flex-1 sm:mx-10 max-w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            <button className="px-4 border border-gray-300 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Mic */}
          <div className="flex justify-end">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Category Row */}
        <div className="mt-3 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 whitespace-nowrap rounded-lg text-sm font-medium ${
                idx === 0
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNav;
