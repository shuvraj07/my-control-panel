"use client";

import Image from "next/image";
import React from "react";

const profiles = [
  {
    name: "Amit Sharma",
    src: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Rai",
    src: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Sujan Thapa",
    src: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Sneha Gurung",
    src: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    name: "Bikash K.C.",
    src: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

export default function Profiles() {
  return (
    <div className="flex space-x-6 overflow-x-auto">
      {profiles.map((profile, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <Image
            className="w-16 h-16 rounded-full"
            src={profile.src}
            alt={profile.name}
            width={64}
            height={64}
          />
          <p className="text-black text-sm mt-1">{profile.name}</p>
        </div>
      ))}
    </div>
  );
}
