"use client"
import React from "react";
import Link from "next/link";
export default function Home() {

 
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Download MOD APKs Safely & Fast</h2>
        <Link href={"/allMods/adminServer"}> Download Mods</Link>
        <p className="mb-6">Unlimited access to premium apps & games without limits</p>
        <input
          type="text"
          placeholder="Search for apps..."
          className="px-4 py-2 w-1/2 rounded-md text-black"
        />
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6">🔥 Trending MODs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["GTA 5", "Spotify Premium", "Minecraft", "YouTube Vanced"].map((title, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="h-32 bg-gray-200 rounded mb-3" />
              <h4 className="font-medium">{title}</h4>
              <p className="text-sm text-gray-600">MOD Features + Unlocked</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Uploads */}
      <section className="bg-white py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6 max-w-7xl mx-auto">🆕 Recently Added</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg">
              <div className="h-32 bg-gray-300 rounded mb-3" />
              <h4 className="font-medium">App Name {i + 1}</h4>
              <p className="text-sm text-gray-600">Latest MOD</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6">📂 Categories</h3>
        <div className="flex gap-4 flex-wrap">
          {["Games", "Streaming", "Tools", "Productivity", "Social", "Music"].map((cat, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-blue-200"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 ModVault. All rights reserved.</p>
        <p className="text-sm mt-2">This site does not host any APKs, only links are shared.</p>
      </footer>
    </div>
  );
}
