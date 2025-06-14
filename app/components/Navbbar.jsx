"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { Home } from "lucide-react";
const Navbbar = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleHome = () => {
    router.push("/");
  };
  return (
    <header className="bg-[#131c2b] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-[14px]">
        <button onClick={toggleSidebar} className="pr-2 py-2">
          <svg
            className="w-6 h-6 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full border-gray-100 border-2  overflow-hidden">
            <Image
              src={"/logoDp.jpg"}
              alt="Paid mode"
              width={40}
              height={40}
              priority
            ></Image>
          </div>
          <h1 className="text-[24px] font-bold">
            <span className="text-white">Bgmi</span>
            <span className="text-green-500">Paid</span>
            <span className="text-white">Mode</span>
          </h1>
        </div>

        <button
          onClick={() => {
            handleHome();
          }}
        >
          <Home size={20} className="text-white" />
        </button>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

export default Navbbar;
