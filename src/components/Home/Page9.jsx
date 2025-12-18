
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Page9 = () => {
  const enhanceList = [
    "Unblur & Sharpener",
    "Denoiser",
    "Old Photos Restorer",
    "Image Enlarger",
    "Color Fixer",
    "Face Enhancer",
    "Background Enhancer",
  ];

  const resourcesList = [
    "Web help center",
    "Contact us",
    "Try Remini",
    "Careers",
  ];

  const legalList = [
    "Privacy & cookie notice",
    "App privacy notice",
    "Terms of service",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-400 to-cyan-100 text-gray-800">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          
          {/* LOGO */}
          <div>
            <div className="flex items-center gap-2">
              <img src={'/logo.svg'} alt="Pixel Vision" className="w-6 sm:w-7 h-6 sm:h-7" />
              <span className="text-base sm:text-lg font-semibold">
                Pixel Vision
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm font-medium text-gray-700">
              © 2024 AI Creativity <br />
              All rights reserved.
            </p>

            <button className="mt-4 sm:mt-6 border border-gray-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-cyan-200 transition">
              Your cookies preferences
            </button>
          </div>

          {/* ENHANCE */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3">Enhance</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              {enhanceList.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-cyan-700 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* GENERATIVE AI */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3">
              Generative AI
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li className="hover:text-cyan-700 cursor-pointer transition">
                AI Photos
              </li>
            </ul>
          </div>

          {/* RESOURCES + LEGAL */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3">
                Resources
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                {resourcesList.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-cyan-700 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3">
                Legal
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                {legalList.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-cyan-700 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-20 text-center px-2">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-[anzo3]">
            Try Pixel Vision now!
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-700 max-w-xl mx-auto">
            Join the Pixel Vision community and discover the power of AI
            enhancement.
          </p>

          <Link
            to="/user-login"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs sm:text-base rounded-lg shadow-md transition"
          >
            Pixel Vision <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Page9;
