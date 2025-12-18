import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = ({ onLogout }) => {
  return (
    <div
      className="
        relative
        flex items-center justify-end
        w-full
        px-4 sm:px-6 lg:px-10
        py-3 sm:py-4
      "
    >
      <button
        onClick={onLogout}
        className="
          flex items-center justify-center
          h-9 sm:h-10
          px-4 sm:px-6
          rounded-2xl
          bg-black text-slate-50
          text-xs sm:text-sm
          font-medium
          hover:text-cyan-100
          transition
        "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
