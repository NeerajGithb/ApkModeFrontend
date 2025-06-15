"use client";
import { useRouter } from "next/navigation";
import { BadgeCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function LoaderCard({ loader, apk, index }) {
  const router = useRouter();

  return (
    <motion.div
      key={index}
      onClick={() => router.push(loader.link)}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="cursor-pointer flex items-center justify-between bg-[#273d52] p-3 rounded-lg shadow-md  hover:scale-[1.01] hover:shadow-lg"
    >
      <img
        src={loader.image}
        alt={loader.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 ml-5">
        <p className="text-white font-semibold text-lg flex items-center">
          {loader.name}
          <BadgeCheck size={15} className="text-green-500 ml-2" />
        </p>
        {apk ? (
          <p className="text-gray-300 text-sm flex">
            Key Status:
            {new Date(apk.expiresAt) > new Date() ? (
              <span className="text-green-400 font-semibold ml-2 flex items-center">
                active <Check size={14} className="ml-1" />
              </span>
            ) : (
              <span className="text-red-400 font-semibold ml-2 flex items-center">
                expired <Check size={14} className="ml-1" />
              </span>
            )}
          </p>
        ) : (
          <p className="text-gray-400 text-sm">No APK uploaded yet</p>
        )}
      </div>
      <span className="relative group inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white text-sm font-semibold shadow-lg">
        <span className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 animate-pulse" />
        <span className="relative z-10">🔑 Key Link</span>
      </span>
    </motion.div>
  );
}
