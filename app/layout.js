import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbbar from "./components/Navbbar";
import { Toaster } from "react-hot-toast";
import RouteLoaderWrapper from "./components/RouteLoaderWrapper";
import ForceBrowserRedirect from "./components/ForceBrowserRedirect";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paid Loader",
  description: "BGMI Paid Mode APKs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ForceBrowserRedirect />
        <Navbbar />
        <RouteLoaderWrapper>
          {children}
        </RouteLoaderWrapper>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
