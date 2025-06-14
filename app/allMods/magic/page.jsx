"use client";

import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import {
  BadgeCheck,
  BellRing,
  ChevronsRight,
  ClipboardCheck,
  Copy,
  Gem,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaAndroid } from "react-icons/fa";
import toast from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [apkSize, setApkSize] = useState(null);
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [telegramLink, setTelegramLink] = useState("")
  const [endTime, setEndTime] = useState(null);
  const [now, setNow] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const letters1 = ["T", "R", "I", "A", "L"];
  const letters2 = ["K", "E", "Y"];
  const handleTextClick = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success("Copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(fileUrl); // ✅ Direct Cloudinary URL
      const contentLength = response.headers.get("content-length");

      if (!response.ok || !contentLength) {
        alert("Download failed");
        setDownloading(false);
        return;
      }

      const total = parseInt(contentLength, 10);
      const reader = response.body.getReader();
      let received = 0;
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        setProgress(Math.round((received / total) * 100));
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name || "loader.apk";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Error downloading file");
    }

    setDownloading(false);
    setProgress(0);
  };

  const getRemainingTime = () => {
    const diff = endTime - now;
    if (diff <= 0) return null;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    return `${hours}h ${mins}m ${secs}s`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/apks/Moon`);
        const data = await res.json();

        setFileUrl(data.fileUrl); // ✅ Cloudinary URL
        setKey(data.key);
        setName(data.name);
        setTelegramLink(data.telegramLink);
        setEndTime(new Date(data.expiresAt));

        const head = await fetch(data.fileUrl, { method: "HEAD" }); // ✅ direct fetch
        const contentLength = head.headers.get("content-length");
        if (contentLength) {
          const sizeInMB = (parseInt(contentLength) / (1024 * 1024)).toFixed(2);
          setApkSize(sizeInMB);
        }
      } catch (err) {
        toast.error("Failed to fetch APK info");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { text: "Brutal Aimbot 150m", tag: "SAFE" },
    { text: "Bullet Track 150 Mtr", tag: "SAFE" },
    { text: "Smart ESP", tag: "SAFE" },
    { text: "Vehicle Esp", tag: "WORK" },
    { text: "Visibility check", tag: "SAFE" },
  ];

  return (
    <div className="bg-[#1f2937] min-h-screen w-full pt-2 border-t-gray-400 border-t">
      <div className="bg-[#273d52] text-white max-w-sm rounded-xl p-5 space-y-2 shadow-lg mx-auto">
        <div onClick={handleDownload} className="flex items-center gap-2">
          <div className="bg-blue-500 rounded-full p-3 w-12 h-12 flex items-center justify-center relative">
            {downloading ? (
              <ImSpinner2 className="animate-spin text-white text-xl" />
            ) : (
              <FaArrowDown className="text-white text-lg" />
            )}

            {downloading && (
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-white">
                {progress}%
              </div>
            )}
          </div>

          {/* Text Info */}
          <div>
            <p className="text-sm font-semibold">
              {name}
            </p>
            <p className="text-xs text-gray-400">
              {apkSize ? `${apkSize} MB` : "Loading size..."}
            </p>
          </div>
        </div>
        {/* Header */}
        <div className="flex items-center gap-2 text-sm pt-3">
          <span className="text-red-400 font-bold">NEW</span>
          <span className="bg-red-600 text-xs px-2 py-0.5 rounded-md font-bold">
            VIP
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 text-green-400 font-semibold text-base">
          <MdCheckCircle className="text-green-400" size={20} />
          {name.replace(/\.apk/gi, '')} (64 Bit)
          <span className="text-green-400 text-xl">●</span>
        </div>

        {/* Premium Features */}
        <h3 className="font-medium">
          Premium Features <span className="text-yellow-400">⭐</span>
        </h3>
        <div className="text-green-400 text-xs">▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶◀◀◀◀◀◀◀◀◀</div>

        {/* Feature List */}
        <ul className="font-bold">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-green-400" />
              <span>{item.text}</span>
              {item.tag && (
                <span
                  className={`ml-2 text-xs px-1 rounded-sm ${
                    item.tag === "SAFE"
                      ? "bg-green-700 text-green-300"
                      : "bg-yellow-700 text-yellow-300"
                  }`}
                >
                  {item.tag}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Support */}
        <div className="flex gap-3 items-center text-blue-400 text-sm pt-2">
          <FaTwitter /> Twitter support ✔
          <FaFacebook className="ml-4 text-blue-600" /> Facebook Support
          <span className="text-blue-400 ml-1">✔</span>
        </div>

        {/* Android Info */}
        <div className="flex items-center text-green-300 text-sm pt-2 gap-2">
          <FaAndroid className="text-green-500" />
          Supports All Android (9 To 15)
          <span className="text-pink-500">💯</span>
        </div>
        <div className="flex items-center">
          <span className="flex items-center gap-2">
            {" "}
            <IoSettingsSharp className="text-green-500" /> MAIN ACCOUNT{" "}
            <span className="text-green-400">FULL SAFE</span> 1000 💯❤️
          </span>
        </div>
        <div className="py-2 max-w-md mx-auto space-y-4">
          {/* Display key + Copy button */}
          {key ? (
            <div className="flex flex-col py-4 px-1 w-full relative mt-[25px] border-b-[25px] border-[#2f2f2f]">
              <div className=" ml-2 absolute -top-6 font-bold flex items-center gap-2">
                <div className="bg-yellow-400 p-1 rounded-full shadow-md bounce-size">
                  <BellRing size={15} className="text-black" />
                </div>
                <div className="rounded-sm flex items-center bg-gradient-to-br from-[#c026d3] to-[#9333ea] px-1 pb-0.5 gap-[3px] shadow-md">
                  {letters1.map((char, idx) => (
                    <div
                      key={idx}
                      className="text-pink-500 font-extrabold  text-[18px] w-[17px] h-[17px] bounce-size  flex items-center justify-center rounded-sm shadow-md bg-white"
                      style={{
                        background: "white",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </div>
                  ))}
                </div>
                <div className="rounded-[2px] flex items-center bg-gradient-to-br from-[#c026d3] to-[#9333ea] px-1 pb-0.5 gap-0.5 shadow-md">
                  {letters2.map((char, idx) => (
                    <div
                      key={idx}
                      className="text-pink-500 font-extrabold  text-[18px] w-[17px] h-[17px] flex items-center justify-center rounded-sm shadow-md bg-white bounce-size"
                      style={{
                        background: "white",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-400 p-1 rounded-full shadow-md bounce-size">
                  <BellRing size={15} className="text-black" />
                </div>
              </div>
              {/* Copy button on top */}
              <button
                onClick={() => handleTextClick(key)}
                className="cursor-pointer text-white px-3 py-2 rounded-lg transition absolute -top-8 right-1 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <ClipboardCheck size={14} className="text-green-400" />{" "}
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy
                  </>
                )}
              </button>

              {/* Clickable Key Text */}
              <div className="font-mono  font-semibold">
                <h1
                  className="ml-5 cursor-pointer hover:underline active:translate-0.5"
                  onClick={() => handleTextClick(key)}
                >
                  {key}
                </h1>
                <h1
                  className="ml-10 cursor-pointer hover:underline active:translate-0.5"
                  onClick={() => handleTextClick(key)}
                >
                  {key}
                </h1>
                <h1
                  className="ml-20 cursor-pointer hover:underline active:translate-0.5"
                  onClick={() => handleTextClick(key)}
                >
                  {key}
                </h1>
              </div>
              <div className="font-mono text-white flex items-center justify-between absolute -bottom-6">
                {endTime > now ? (
                  <>
                    <p className="text-green-400 text-sm">
                      ⏳ Expires In: {getRemainingTime()}
                    </p>
                  </>
                ) : (
                  <h1 className="text-red-500 text-sm">🔥 Key Expired!</h1>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <h1 className="flex items-center gap-1 font-mono font-bold">
                Premium Hack Price <Gem size={14} className="text-green-500" />
              </h1>
              <p className="flex items-center">
                <ChevronsRight size={20} className="text-red-500" /> 1 Day Price
                :- 150₹/
              </p>
              <p className="flex items-center">
                <ChevronsRight size={20} className="text-red-500" /> 7 Day Price
                :- 600₹/
              </p>
              <p className="flex items-center">
                <ChevronsRight size={20} className="text-red-500" /> 30 Day
                Price :- 1200₹/
              </p>
            </div>
          )}
        </div>
        <div className="space-y-2 overflow-hidden">
          <h1 className="text">Download Apk from Telegram 👇👇👇👇👇</h1>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-full flex items-center justify-center px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-3xl text-white bg-green-500 hover:bg-green-600 transition-colors"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
