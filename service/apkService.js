import axiosApkInstance from "./urlService2";

// Upload or update APK for a specific loaderType
export const uploadApk = async (formData) => {
  try {
    const res = await axiosApkInstance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.error("Upload error:", error?.response?.data || error.message);
    throw error?.response?.data?.error || "APK Upload failed";
  }
};

// Get the latest uploaded APK across all loader types
export const getLatestApk = async () => {
  try {
    const res = await axiosApkInstance.get('/latest');
    return res.data;
  } catch (error) {
    console.error("Fetch error:", error?.response?.data || error.message);
    throw error?.response?.data?.error || "Failed to fetch APK info";
  }
};

// Get APK by loaderType (e.g., "loader1", "loader2", etc.)
export const getApkByLoaderType = async (loaderType) => {
  try {
    const res = await axiosApkInstance.get(`/${loaderType}`);
    return res.data;
  } catch (error) {
    console.error("Loader fetch error:", error?.response?.data || error.message);
    throw error?.response?.data?.error || "Failed to fetch APK for loader";
  }
};
