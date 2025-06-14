"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "../lib/Loader";

export default function RouteLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // show loader on route change start
    const timeout = setTimeout(() => {
      setLoading(false); // hide after slight delay (simulate real load)
    }, 300); // adjust timing as needed

    return () => clearTimeout(timeout);
  }, [pathname]); // runs on every route change

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
