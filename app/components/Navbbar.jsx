"use client"
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
const Navbbar = () => {
  const router = useRouter();


    return (
    <header className="bg-[#131c2b] shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-[14px]">
          <button
          onClick={()=>{router.push("/admin")}}
          >
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
            >

            </Image>
            
          </div>
          <h1 className="text-[24px] font-bold"><span className="text-whitee">Bgmi</span><span className="text-green-500">Paid</span><span className="text-white">Mode</span></h1>
          </div>
          
          <svg
            className="w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

        </div>
      </header>
  )
}

export default Navbbar