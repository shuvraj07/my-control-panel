"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Users } from "lucide-react";

export default function ClubhouseLanding() {
  const [rooms] = useState([
    {
      id: 1,
      title: "Kanjirowa National School",
      listeners: 152,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77tsya1aFCC1pXyizd7gSd_uz6oeAXjdaNQ&s",
    },
    {
      id: 2,
      title: "RN Brothers Auto Point",
      listeners: 87,
      image: "https://i.ytimg.com/vi/A0079AhtlVU/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "💼 Startup Pitches",
      listeners: 41,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8YNcTAj2e00rdsWQcRIBLellq8fb1e1eFw&s",
    },
    {
      id: 4,
      title: "Kathmandu Mahanagarpalika",
      listeners: 64,
      image: "https://risingnepaldaily.com/storage/media/4349/KMC1212.jpg",
    },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-green-500">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">ClubDemo</h1>
        <Link href="#" className="text-sm font-medium hover:underline">
          Sign in
        </Link>
      </header>

      {/* Hero */}

      {/* Live rooms grid */}
      <section id="rooms" className="bg-white py-10">
        <h3 className="text-center text-2xl font-semibold mb-8">
          Popular Rooms
        </h3>

        <div className="grid grid-cols-1 gap-6 px-6 max-w-3xl mx-auto">
          {rooms.map((room) => (
            <Link key={room.id} href="/room">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl bg-white p-5 border border-gray-200 shadow-sm hover:shadow-lg cursor-pointer transition space-y-4"
              >
                {/* Top row with profile image and title */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Profile thumbnail using the room image */}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5Ive_kRUSYdpsmOBtGgX7EGMURZytzDPFw&s"
                      alt="Avatar"
                      className="h-9 w-9 rounded-full object-cover border"
                    />
                    <h4 className="text-lg font-semibold">{room.title}</h4>
                  </div>
                  <CheckCircle className="h-5 w-5 text-red-500" />
                </div>

                {/* Room thumbnail */}
                <div className="w-full h-60 rounded-xl overflow-hidden">
                  <img
                    src={room.image}
                    alt="Room cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Camper badge aligned right with icon */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-blue-500 text-gray-700">
                    <Users className="w-3.5 h-3.5" />
                    {room.listeners.toLocaleString()} campers
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="h-14 flex items-center justify-center text-xs text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} ClubDemo. Built for demo purposes only.
      </footer>
    </main>
  );
}
