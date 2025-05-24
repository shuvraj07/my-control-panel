"use client";

import {
  BarChart2,
  Megaphone,
  LayoutDashboard,
  Users,
  Clock,
  Bookmark,
  Flag,
  PlayCircle,
  Layers,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-50 border-r px-4 py-6 space-y-6 overflow-y-auto">
      {/* Top Section */}
      <div className="space-y-4">
        <SidebarItem icon={<CircleLetter label="E" />} label="Ekamp" />
        <SidebarItem icon={<BarChart2 size={20} />} label="Ads Manager" />
        <SidebarItem icon={<Megaphone size={20} />} label="Ad Center" />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Professional dashboard"
        />
        <SidebarItem icon={<Layers size={20} />} label="Public presence" />
      </div>

      {/* Divider */}
      <hr />

      {/* Suggested Section */}
      <div>
        <h4 className="text-sm text-gray-500 font-medium mb-3">Suggested</h4>
        <div className="space-y-3">
          <SidebarItem icon={<Users size={20} />} label="Feeds" />
          <SidebarItem icon={<Users size={20} />} label="Groups" />
          <SidebarItem icon={<PlayCircle size={20} />} label="Video" />
          <SidebarItem icon={<Clock size={20} />} label="Memories" />
          <SidebarItem icon={<Bookmark size={20} />} label="Saved" />
          <SidebarItem icon={<Flag size={20} />} label="Pages" />
          <SidebarItem icon={<PlayCircle size={20} />} label="Reels" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3 text-sm text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition">
    <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
    <span>{label}</span>
  </div>
);

const CircleLetter = ({ label }: { label: string }) => (
  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-bold">
    {label}
  </div>
);

export default Sidebar;
