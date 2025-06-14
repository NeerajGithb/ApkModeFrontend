"use client"; // if you're in app directory of Next.js

import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation"; // for router.push()

const Sidebar = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleRoute = (path) => {
    router.push(path);
    onClose(); // Close sidebar after navigating
  };

  const navItems = [
    { label: "Admin Login", path: "/admin" },
    { label: "See All Mods", path: "/allMods" },
    { label: "Premium Loaders", path: "/premium-loaders" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* Background Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-white bg-opacity-5 transition-opacity duration-300",
          isOpen ? "opacity-10 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-[250px] h-full z-50 transform transition-transform duration-300 ease-in-out",
          "bg-black text-white",
          isOpen
            ? "translate-x-0 shadow-[6px_0_12px_rgba(255,255,255,0.2)]"
            : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button
            className="text-white text-xl hover:text-gray-300"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>

          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleRoute(item.path)}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
