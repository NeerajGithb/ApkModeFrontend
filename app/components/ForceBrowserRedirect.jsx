"use client";
import { useEffect } from "react";

export default function ForceBrowserRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isInAppBrowser =
      ua.includes("fbav") || // Facebook
      ua.includes("instagram") ||
      ua.includes("line") ||
      ua.includes("micromessenger") || // WeChat
      ua.includes("kakaotalk") ||
      ua.includes("telegram") ||
      ua.includes("whatsapp") ||
      ua.includes("wv"); // Android WebView

    const isAndroid = /android/.test(ua);

    if (isInAppBrowser && isAndroid) {
      // Force open in Chrome using intent URL
      const url = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = url;
    }
  }, []);

  return null;
}
