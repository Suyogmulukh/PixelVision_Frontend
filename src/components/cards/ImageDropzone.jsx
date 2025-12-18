import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ImageDropzone = ({ onFileChange, preview, onClearImage }) => {
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const dropArea = dropAreaRef.current;

    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const highlight = () =>
      dropArea.classList.add("bg-pink-100", "border-pink-400");

    const unhighlight = () =>
      dropArea.classList.remove("bg-pink-100", "border-pink-400");

    const handleFiles = (file) => {
      if (file && file.type.startsWith("image/")) {
        onFileChange(file);
        setError("");
      } else {
        setError("Please select a valid image file");
      }
    };

    const handleDrop = (e) => {
      preventDefaults(e);
      unhighlight();
      const file = e.dataTransfer.files[0];
      if (file) handleFiles(file);
    };

    ["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
      dropArea.addEventListener(event, preventDefaults);
    });

    ["dragenter", "dragover"].forEach((event) => {
      dropArea.addEventListener(event, highlight);
    });

    ["dragleave", "drop"].forEach((event) => {
      dropArea.addEventListener(event, unhighlight);
    });

    dropArea.addEventListener("drop", handleDrop);

    return () => {
      ["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
        dropArea.removeEventListener(event, preventDefaults);
      });
      ["dragenter", "dragover"].forEach((event) => {
        dropArea.removeEventListener(event, highlight);
      });
      ["dragleave", "drop"].forEach((event) => {
        dropArea.removeEventListener(event, unhighlight);
      });
      dropArea.removeEventListener("drop", handleDrop);
    };
  }, [onFileChange]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
      setError("");
    }
  };

  return (
    <div
      ref={dropAreaRef}
      className="
        w-full
        max-w-sm sm:max-w-md lg:max-w-lg
        min-h-[180px] sm:min-h-[220px]
        p-4 sm:p-6
        flex flex-col items-center justify-center
        border-2 border-dashed border-gray-300
        rounded-3xl
        transition-all duration-300
        hover:border-pink-400
      "
    >
      {preview ? (
        <div className="relative w-full flex justify-center">
          <img
            src={preview}
            alt="Preview"
            className="
              max-h-40 sm:max-h-48 md:max-h-56
              w-auto
              rounded-xl
              object-contain
            "
          />
          <button
            type="button"
            onClick={onClearImage}
            className="
              absolute top-2 right-2
              w-7 h-7
              flex items-center justify-center
              rounded-full
              bg-red-500 text-white
              hover:bg-red-600
              transition
            "
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>
      ) : (
        <>
          <i className="ri-image-add-line text-4xl sm:text-5xl text-gray-400 mb-3" />

          <label
            className="
              cursor-pointer
              bg-pink-500 text-white
              px-5 sm:px-6
              py-2 sm:py-2.5
              rounded-full
              text-sm sm:text-base
              hover:bg-pink-600
              transition
            "
          >
            Choose Image
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          <p className="text-gray-400 mt-2 text-xs sm:text-sm">
            or drop it here
          </p>
        </>
      )}

      {error && (
        <p className="text-red-500 mt-2 text-xs sm:text-sm text-center">
          {error}
        </p>
      )}
    </div>
  );
};

ImageDropzone.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  preview: PropTypes.string,
  onClearImage: PropTypes.func.isRequired,
};

export default ImageDropzone;
