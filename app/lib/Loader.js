"use client";

import { motion } from "framer-motion";
import { Loader as Spinner } from "lucide-react"; // Generic loading icon

export default function Loader({ className = ""}) {
  const dotVariants = {
    hidden: { opacity: 0.3, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6,
      },
    }),
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full shadow-lg"
      >
        <Spinner className="w-10 h-10 text-gray-600 animate-spin" />
      </motion.div>

    </div>
  );
}
