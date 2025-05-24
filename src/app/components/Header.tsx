"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          className="w-10 h-10 rounded-full border border-white"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Ekcamp Avatar"
          width={40}
          height={40}
        />
        <div>
          <h1 className="text-2xl font-bold text-blue-500">Ekcamp HQ</h1>
          <div className="flex items-center space-x-2 mt-1 text-sm text-gray-300">
            <span className="text-gray-500">·</span>
            <span className="text-red-500">Planet 🌎, Earth</span>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center w-10 h-10 bg-blue-700 hover:bg-blue-500 text-white rounded-full transition duration-200">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  );
}
