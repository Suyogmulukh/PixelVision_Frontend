import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";

const Navbar2 = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 lg:-mt-10">
      <div className="flex items-center justify-start gap-52">
        {/* LOGO */}
        <img
          src={'/logo.svg'}
          alt="Pixel Vision"
          className="h-9 sm:h-11 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/support"
            className="flex items-center gap-2 text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400 transition"
          >
            Help <FaHandsHelping />
          </Link>

          <Link
            to="/User-Signup"
            className="flex items-center gap-2 text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400 transition"
          >
            Signup <SiGnuprivacyguard />
          </Link>

          <Link
            to="/user-login"
            className="flex items-center gap-2 text-gray-700 font-semibold font-[anzo] text-base lg:text-lg hover:text-blue-400 transition"
          >
            Login <CiLogin />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-gray-700"
        >
          <i
            className={`ri-menu-${isMobileOpen ? "close" : "line"} text-2xl`}
          ></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 right-0 bg-white rounded-b-3xl shadow-2xl p-6 space-y-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>

            {/* MENU ITEMS */}
            <Link
              to="/support"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3 text-gray-700 font-semibold text-base hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition"
            >
              <FaHandsHelping className="text-lg" /> Help
            </Link>

            <Link
              to="/User-Signup"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3 text-gray-700 font-semibold text-base hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition"
            >
              <SiGnuprivacyguard className="text-lg" /> Signup
            </Link>

            <Link
              to="/user-login"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-3 text-gray-700 font-semibold text-base hover:text-blue-400 hover:bg-blue-50 p-3 rounded-lg transition"
            >
              <CiLogin className="text-lg" /> Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
