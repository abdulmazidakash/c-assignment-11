import { Link } from 'react-router-dom'
import errorLottie from '../assets/lottie/errorPage.json'
import Lottie from 'lottie-react'
import { Helmet } from 'react-helmet'

const ErrorPage = () => {
  return (
    <section className='bg-white container mx-auto mt-16 border-2 border-gray-100 rounded-lg p-4'>
       <Helmet>
        <title>404 Not Found | Artifact Atlas</title>
       </Helmet>
        <div className=' w-96 mx-auto'>
          <Lottie  animationData={errorLottie}></Lottie>
        </div>
      <div className='flex mt-6 gap-x-3 justify-center'>
            <button className='flex btn-outline items-center justify-center  px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 btn hover:text-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              to='/'
              className='px-5 py-2 text-sm btn  tracking-wide transition-colors duration-200 bg-gradient-to-r from-rose-700 via-gray-600 to-rose-500 text-white shadow-lg rounded-lg shrink-0  hover:bg-gray-600'
            >
              Take me home
            </Link>
          </div>
    </section>
  )
}

export default ErrorPage
