import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full py-6">
      <div
        className="
          animate-spin
          rounded-full
          border-4
          border-red-300 border-t-transparent
          w-6 h-6
          sm:w-8 sm:h-8
          md:w-10 md:h-10
        "
        aria-label="Loading"
      />
    </div>
  );
};

export default Loading;
