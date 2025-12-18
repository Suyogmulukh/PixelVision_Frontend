import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function ActionButtons({ url, fileName }) {
  const handleDownload = async () => {
    try {
      if (!url) throw new Error("No image URL provided");

      let imageUrl = url;
      if (!url.startsWith("http") && !url.startsWith("blob:") && !url.startsWith("data:")) {
        imageUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3500"}${url}`;
      }

      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error(`Failed to download image (${response.status})`);

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName || `enhanced-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success("Image downloaded successfully");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error(`Download failed: ${error.message}`);
    }
  };

  return (
    <div className="w-full flex justify-center sm:justify-start mt-4">
      <button
        onClick={handleDownload}
        disabled={!url}
        className={`
          flex items-center justify-center gap-2
          w-full sm:w-48 md:w-52
          py-2.5 sm:py-3
          rounded-3xl
          font-[anzo3]
          text-sm sm:text-base md:text-lg
          transition-all
          ${
            url
              ? "bg-red-400 hover:bg-red-500 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }
        `}
      >
        <i className="ri-download-line"></i>
        Download
      </button>
    </div>
  );
}

ActionButtons.propTypes = {
  url: PropTypes.string,
  fileName: PropTypes.string,
};
