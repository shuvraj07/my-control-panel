"use client";

import React from "react";
import { Mic, MicOff, HandMetal } from "lucide-react";

export default function FooterControls() {
  return (
    <footer className="w-full bg-white fixed bottom-0 left-0 right-0 shadow-inner z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center space-x-6">
        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
          <Mic className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center">
          <MicOff className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center">
          <HandMetal className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
