import { useState } from "react";
import Headers from "../cards/Header";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    setIsMobileOpen(false); // Close mobile menu on logout
    navigate("/user-login");
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsMobileOpen(false);
  };

  const enhanceMenu = [
    { name: "Unblur & Sharpener", path: "/unblur-sharpener" },
    { name: "Denoiser", path: "/denoiser" },
    { name: "Old Photos Restorer", path: "/old-photos-restorer" },
    { name: "Image Enlarger", path: "/image-enlarger" },
    { name: "Color Fixer", path: "/color-fixer" },
    { name: "Face Enhancer", path: "/face-enhancer" },
    { name: "Background Enhancer", path: "/background-enhancer" },
  ];

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 lg:-mt-10">
      <div className="flex items-center justify-start gap-52">
        {/* LOGO */}
        <img
          src={'/logo.svg'}
          alt="Pixel Vision"
          className="h-9 sm:h-11 cursor-pointer shrink-0"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {/* ENHANCE */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400">
              Enhance <i className="ri-arrow-down-s-line"></i>
            </button>

            {isOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 bg-gray-700 text-white rounded-2xl shadow-xl py-2 z-50">
                {enhanceMenu.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/ai-photos")}
            className="text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400"
          >
            AI Photos
          </button>

          <button
            onClick={() => navigate("/support")}
            className="text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400"
          >
            Support
          </button>
        </div>

        {/* AUTH */}
        <div className="hidden md:block">
          {isToken && <Headers userInfo={userInfo} onLogout={onLogout} />}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-gray-700"
        >
          <i
            className={`ri-${
              isMobileOpen ? "close-line" : "menu-line"
            } text-2xl`}
          ></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-700 text-white shadow-xl rounded-b-3xl z-50 px-6 py-6 space-y-4">
          <p className="text-sm font-semibold text-gray-300">Enhance</p>

          {enhanceMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="block w-full text-left py-2 text-sm hover:text-cyan-300 transition"
            >
              {item.name}
            </button>
          ))}

          <hr className="border-gray-500 my-3" />

          <button
            onClick={() => handleNavigation("/ai-photos")}
            className="block w-full text-left py-2 text-sm hover:text-cyan-300"
          >
            AI Photos
          </button>

          <button
            onClick={() => handleNavigation("/support")}
            className="block w-full text-left py-2 text-sm hover:text-cyan-300"
          >
            Support
          </button>

          {/* Always show logout when logged in */}
          {isToken && (
            <div className="pt-4 flex flex-col gap-2">
              <Headers userInfo={userInfo} onLogout={onLogout} />
              {/* Fallback direct logout button for mobile */}
              <button
                onClick={onLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-2 mt-2 text-sm font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
