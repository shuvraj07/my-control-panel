// app/dashboard/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = { title: "Dashboard | Demo Site" };

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6">
      {/* sidebar */}
      <aside className="w-44 shrink-0 space-y-2">
        <NavLink href="/dashboard">Overview</NavLink>
        <NavLink href="/dashboard/settings">Settings</NavLink>
      </aside>

      {/* page content */}
      <section className="flex-1">{children}</section>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded hover:bg-gray-200 text-sm"
    >
      {children}
    </Link>
  );
}
