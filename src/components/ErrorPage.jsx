import { Link } from 'react-router-dom'
import errorLottie from '../assets/lottie/errorPage.json'
import Lottie from 'lottie-react'

const ErrorPage = () => {
  return (
    <section className='bg-white '>
      <div className='container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12'>
 
        <div className='mt-8  lg:mt-0'>
    
          <Lottie animationData={errorLottie}></Lottie>
        </div>
        
      </div>
      <div className='flex mt-6 gap-x-3 justify-center'>
            <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
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
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600'
            >
              Take me home
            </Link>
          </div>


    </section>
  )
}

export default ErrorPage
