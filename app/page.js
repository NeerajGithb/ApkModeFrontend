import LoaderCard from "./components/LoaderCard";

export const dynamic = "force-dynamic"; // Disable caching

export default async function Home() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${BASE_URL}/api/apks/latest`, {
    cache: "no-store",
  });
  const apks = await res.json();

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
            <div key={idx} className="text-pink-500 font-extrabold text-[18px] w-[18px] h-[18px] flex items-center justify-center rounded-sm shadow-md bg-white">
              {char}
            </div>
          ))}
        </div>
        <div className="rounded-sm flex items-center bg-gradient-to-br from-[#c026d3] to-[#9333ea] px-1 pb-1 gap-1 shadow-md">
          {letters2.map((char, idx) => (
            <div key={idx} className="text-pink-500 font-extrabold text-[18px] w-[18px] h-[18px] flex items-center justify-center rounded-sm shadow-md bg-white">
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
            <LoaderCard key={index} loader={loader} apk={matchedApk} index={index} />
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
