import React from 'react'

const VerificationCode = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <fieldset className="border p-4 rounded-md">
        <legend className="text-lg font-semibold">Verification Code</legend>

        <label
          htmlFor="verification-code"
          className="block text-sm font-medium mt-2"
        >
          Enter the Verification Code:
        </label>
        <input
          type="text"
          id="verification-code"
          name="verification-code"
          required
          className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
        />
      </fieldset>

      <div className="mt-4">
        <input
          type="checkbox"
          id="job-experience"
          name="job-experience"
          value="if applicable"
          className="mr-2"
        />
        <label htmlFor="job-experience" className="text-sm">
          I declare that the information provided above is correct, true, and
          complete to the best of my knowledge and belief. I would like to
          proceed to the next step.
        </label>
      </div>

      <div className="mt-4 text-center">
        <button
          type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default VerificationCode
