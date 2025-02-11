import { Link } from 'react-router-dom';
import errorLottie from '../assets/lottie/errorPage.json';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <Helmet>
        <title>404 Not Found | Artifact Atlas</title>
      </Helmet>

      {/* Animation Section */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <Lottie animationData={errorLottie} />
      </div>

      {/* Button Section */}
      <div className="flex flex-wrap mt-6 gap-4 justify-center">
        <button className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded-lg gap-x-2 hover:text-black hover:border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Go back</span>
        </button>

        <Link
          to="/"
          className="px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-rose-900 text-white shadow-lg rounded-lg hover:bg-gray-600"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
