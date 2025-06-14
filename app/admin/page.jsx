"use client";

import React, { useState } from "react"
import { uploadApk } from "@/service/apkService";

const ApkUploader = () => {
  const [loaderType, setLoaderType] = useState("");
  const [apkName, setApkName] = useState("");
  const [apkKey, setApkKey] = useState("");
  const [expiry, setExpiry] = useState("");
  const [apkFile, setApkFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleUpload = async (e) => {
    e.preventDefault();

    if (!apkFile || !apkKey || !expiry || !loaderType) {
      return alert("All fields are required including loader type!");
    }

    const formData = new FormData();
    formData.append("loaderType", loaderType);
    formData.append("name", apkName);
    formData.append("key", apkKey);
    formData.append("expiresAt", expiry);
    formData.append("apkFile", apkFile);

    try {
      setLoading(true);
      await uploadApk(formData);
      setMessage("✅ APK uploaded or updated successfully!");
      setLoaderType("");
      setApkName("");
      setApkKey("");
      setExpiry("");
      setApkFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed: " + err);
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

        <input
          type="text"
          placeholder="Loader Type (e.g. loader1)"
          value={loaderType}
          onChange={(e) => setLoaderType(e.target.value)}
          className="block w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          placeholder="APK Name"
          value={apkName}
          onChange={(e) => setApkName(e.target.value)}
          className="block w-full border px-3 py-2 rounded"
        />

        <input
          type="text"
          placeholder="APK Key"
          value={apkKey}
          onChange={(e) => setApkKey(e.target.value)}
          className="block w-full border px-3 py-2 rounded"
        />

        <input
          type="datetime-local"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="block w-full border px-3 py-2 rounded"
        />

        <input
          type="file"
          accept=".apk"
          onChange={(e) => setApkFile(e.target.files[0])}
          className="block w-full"
        />

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
