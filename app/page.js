"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BadgeCheck, Check} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [apks, setApks] = useState([]);
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/apks/latest`);
        const allApks = await res.json();
        setApks(allApks);
      } catch (err) {
        toast.error("Failed to fetch APK info");
      }
    };
    fetchData();
  }, []);

  const loaders = [
    { name: "Admin BT Loader 3.8", image: "/admin.jpeg", link: "/allMods/adminServer", loaderType: "Moon" },
    { name: "Var Paid Loader", image: "/war.jpeg", link: "/allMods/war", loaderType: "War" },
    { name: "Mars Vip Loader", image: "/mars.jpg", link: "/allMods/mars", loaderType: "Mars" },
    { name: "Star Official Vip", image: "/star.jpg", link: "/allMods/star", loaderType: "Star" },
    { name: "BGMI Loader Vip", image: "/bgmi.jpg", link: "/allMods/bgmi", loaderType: "Bgmi" },
    { name: "Game x Server V2", image: "/xserver.jpeg", link: "/allMods/xserver", loaderType: "Xserver" },
  ];

  const letters1 = ["T", "R", "I", "A", "L"];
  const letters2 = ["K", "E", "Y"];

  return (
    <div className="min-h-screen bg-[#1f2937] p-2 pb-20">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 pt-6">
        <h2 className="text-center text-white font-bold text-xl">Premium Loader</h2>
        <div className="rounded-sm flex items-center bg-gradient-to-br from-[#c026d3] to-[#9333ea] px-1 pb-1 gap-1 shadow-md">
          {letters1.map((char, idx) => (
            <div
              key={idx}
              className="text-pink-500 font-extrabold text-[18px] w-[18px] h-[18px] bounce-size flex items-center justify-center rounded-sm shadow-md bg-white"
            >
              {char}
            </div>
          ))}
        </div>
        <div className="rounded-sm flex items-center bg-gradient-to-br from-[#c026d3] to-[#9333ea] px-1 pb-1 gap-1 shadow-md">
          {letters2.map((char, idx) => (
            <div
              key={idx}
              className="text-pink-500 font-extrabold text-[18px] w-[18px] h-[18px] flex items-center justify-center rounded-sm shadow-md bg-white bounce-size"
            >
              {char}
            </div>
          ))}
        </div>
        <h1 className="text-lg text-white">👇</h1>
      </div>

      {/* Loader List */}
      <div className="space-y-3 mt-6">
        {loaders.map((loader, index) => {
          const matchedApk = apks.find(
            (apk) => apk.loaderType?.toLowerCase() === loader.loaderType?.toLowerCase()
          );

          return (
            <motion.div
              key={index}
              onClick={() => router.push(loader.link)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="cursor-pointer flex items-center justify-between bg-[#273d52] p-3 rounded-lg shadow-md transition hover:scale-[1.01] hover:shadow-lg"
            >
              <img
                src={loader.image}
                alt={loader.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 ml-5">
                <p className="text-white font-semibold text-lg flex items-center">{loader.name} <BadgeCheck size={15} className="text-green-500 ml-2" /></p>
                {matchedApk ? (
                  <>
                    <div className="flex flex-col">
                      <p className="text-gray-300 text-sm flex">
                        Key Status:
                        {new Date(matchedApk.expiresAt) > new Date() ? (
                          <span className="text-green-400 font-semibold ml-2 flex items-center text-shadow-2xs">active <Check size={14} className="ml-1" /></span>
                        ) : (
                          <span className="text-red-400 font-semibold ml-2 flex items-center "> expired <Check size={14} className="ml-1" /></span>
                        )}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 text-sm">No APK uploaded yet</p>
                )}

              </div>
              <span
                className="relative group inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
              >
                <span className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 group-hover:opacity-70 transition duration-500 animate-pulse"></span>
                <span className="relative z-10">🔑 Key Link</span>
              </span>

            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full text-sm">
        <p>&copy; 2025 ModVault. All rights reserved.</p>
        <p className="text-xs mt-1">This site does not host any APKs, only links are shared.</p>
      </footer>
    </div>
  );
}
