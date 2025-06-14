"use client";

import { motion } from "framer-motion";
import { Loader as Spinner } from "lucide-react"; // Generic loading icon

export default function Loader() {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full shadow-lg"
      >
        <Spinner className="w-10 h-10 text-gray-600 animate-spin" />
      </motion.div>

      {/* Dots Animation */}
      <div className="flex space-x-2 mt-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-gray-600 rounded-full"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={dotVariants}
          />
        ))}
      </div>
    </div>
  );
}
