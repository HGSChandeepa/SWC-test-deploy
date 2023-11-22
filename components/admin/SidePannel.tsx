"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { LayoutDashboard } from "lucide-react";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

//routes
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin-dashboard/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Sales Agent Acc Approval",
    icon: LayoutDashboard,
    href: "/admin-dashboard/sales-agent-accounts-approval",
    color: "text-sky-500",
  },
  {
    label: "Sales Agent Acc Manage",
    icon: LayoutDashboard,
    href: "/admin-dashboard/sales-agent-accounts-manage",
    color: "text-sky-500",
  },
  {
    label: "Add Product",
    icon: LayoutDashboard,
    href: "/admin-dashboard/add-products",
    color: "text-sky-500",
  },
  {
    label: "Online Product",
    icon: LayoutDashboard,
    href: "/admin-dashboard/online-products",
    color: "text-sky-500",
  },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#575858e5] text-white rounded-sm">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex py-2 px-2 w-full justify-start font-medium rounded-md hover:bg-[#575858] hover:text-white",
                pathname === route.href ? "bg-[#575858] text-white" : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
