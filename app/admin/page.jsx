"use client";

import React, { useState } from "react";
import { uploadApk } from "@/service/apkService";

const ApkUploader = () => {
  const [loaderType, setLoaderType] = useState("");
  const [apkName, setApkName] = useState("");
  const [apkKey, setApkKey] = useState("");
  const [expiry, setExpiry] = useState("");
  const [apkFile, setApkFile] = useState(null);
  const [telegramLink, setTelegramLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!loaderType) {
      return alert("Loader Type is required!");
    }

    const formData = new FormData();
    formData.append("loaderType", loaderType);
    formData.append("name", apkName);
    formData.append("key", apkKey);

    if (expiry) {
      const utcExpiry = new Date(expiry);
      formData.append("expiresAt", utcExpiry.toISOString());
    }

    if (apkFile) {
      formData.append("apkFile", apkFile);
    }

    formData.append("telegramLink", telegramLink);

    try {
      setLoading(true);
      await uploadApk(formData);
      setMessage("✅ APK uploaded or updated successfully!");
      setLoaderType("");
      setApkName("");
      setApkKey("");
      setExpiry("");
      setApkFile(null);
      setTelegramLink("");
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleUpload}
        className="max-w-xl mx-auto mt-8 space-y-4 p-6 bg-white border shadow rounded-xl"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Upload / Replace Loader APK
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Loader Type
          </label>
          <input
            type="text"
            placeholder="e.g. loader1"
            value={loaderType}
            onChange={(e) => setLoaderType(e.target.value)}
            className="block w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            APK Name
          </label>
          <input
            type="text"
            placeholder="APK Name"
            value={apkName}
            onChange={(e) => setApkName(e.target.value)}
            className="block w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            APK Key
          </label>
          <input
            type="text"
            placeholder="APK Key"
            value={apkKey}
            onChange={(e) => setApkKey(e.target.value)}
            className="block w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Expiry Date & Time
          </label>
          <input
            type="datetime-local"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="block w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Telegram Channel Link
          </label>
          <input
            type="url"
            placeholder="Telegram Channel Link"
            value={telegramLink}
            onChange={(e) => setTelegramLink(e.target.value)}
            className="block w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            APK File (.apk)
          </label>
          <input
            type="file"
            accept=".apk"
            onChange={(e) => setApkFile(e.target.files[0])}
            className="block w-full"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white px-4 py-2 rounded ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload / Update APK"}
        </button>

        {message && <p className="text-sm text-center mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default ApkUploader;
