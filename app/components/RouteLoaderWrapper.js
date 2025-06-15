"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "../lib/Loader";

export default function RouteLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show loader on homepage
    if (pathname === "/") return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust as needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && pathname !== "/" && <Loader />}
      {children}
    </>
  );
}
