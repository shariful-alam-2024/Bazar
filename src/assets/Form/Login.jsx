import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isClose, setIsClose] = useState(false)

  const handelClose = (e) => {
    e.preventDefault()
    setIsClose(true)
  }

  return (
    <>
      {!isClose && (
        <div  style={{backgroundImage:`url('/img3.png')`}}  className="flex items-center bg-no-repeat justify-center min-h-screen">
          <div className=" text-white opacity-100 p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center pb-1 border-b-2">
              Login Form
            </h2>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Email :
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-1 p-2 w-full border rounded-lg bg-black text-white focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-white">
                  Password :
                </label>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="mt-1 p-2 w-full border  bg-black text-white rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="h-5 w-5" />
                    ) : (
                      <FaEyeSlash className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-4 relative">
                <label className="block text-sm font-medium text-white">
                  Confirm Password :
                </label>
                <div className="relative">
                  <input
                    required
                    placeholder="Enter your confirm password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="mt-1 p-2 w-full border  bg-black text-white rounded-lg focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEye className="h-5 w-5" />
                    ) : (
                      <FaEyeSlash className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                  onClick={handelClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
