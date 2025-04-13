import React from 'react'
import { FaRegFaceSadTear } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'
const Error = () => {
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base lg:text-4xl flex text-center gap-4 mx-[30%] font-semibold text-indigo-600">
            4<span className="text-red-800">0</span>4
            <FaRegFaceSadTear className="bg-black-700  text-sky-900  rounded-full" />
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-in hover:text-orange-800"
            >
              Go back home
            </a>

            <a
              href="#"
              className="text-sm flex font-semibold items-center text-fuchsia-800 ease-in hover:text-pink-800 "
            >
              Contact support
              <IoIosArrowRoundForward className="w-12 h-10 ease-in" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error
