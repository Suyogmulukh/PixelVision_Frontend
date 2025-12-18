import Loading from "../EnhancesHelp/Loading";
import PropTypes from "prop-types";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="
      mt-6 sm:mt-8
      w-full max-w-5xl
      px-4 sm:px-0
      grid grid-cols-1
      md:grid-cols-2
      gap-4 sm:gap-6
    ">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="
          text-base sm:text-lg md:text-xl
          font-semibold text-center
          bg-gray-800 text-white
          py-2 sm:py-3
        ">
          Original Image
        </h2>

        <div className="
          h-56 sm:h-64 md:h-72 lg:h-80
          flex items-center justify-center
          bg-gray-100
        ">
          {uploaded ? (
            <img
              src={uploaded}
              alt="Original"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-sm sm:text-base text-gray-500">
              No Image Selected
            </span>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="
          text-base sm:text-lg md:text-xl
          font-semibold text-center
          bg-blue-800 text-white
          py-2 sm:py-3
        ">
          Enhanced Image
        </h2>

        <div className="
          h-56 sm:h-64 md:h-72 lg:h-80
          flex items-center justify-center
          bg-gray-100
        ">
          {enhanced && !loading ? (
            <img
              src={enhanced}
              alt="Enhanced"
              className="max-h-full max-w-full object-contain"
            />
          ) : loading ? (
            <Loading />
          ) : (
            <span className="text-sm sm:text-base text-gray-500">
              No Enhanced Image
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  uploaded: PropTypes.string,
  enhanced: PropTypes.string,
  loading: PropTypes.bool,
};

export default ImagePreview;
