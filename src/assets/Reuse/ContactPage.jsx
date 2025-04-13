import React from 'react'

const ContactPage = () => {
  return (
    <div className="    min-h-screen py-12 px-4 sm:px-6 pt-24  lg:px-8">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl  font-extrabold mb-8">Communication</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold  mb-2">Address</h3>
            <p className="">Uttara-1212,Dhaka-Bangladesh</p>

            <h3 className="text-xl font-semibold  mt-6 mb-2">Phone</h3>
            <p className="">+8801829197321</p>

            <h3 className="text-xl font-semibold  mt-6 mb-2">Email</h3>
            <p className="">sharifullinkdin2024@gmail.com</p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm  font-medium ">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Google Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold  mb-4">Location Map</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902109009013!2d90.40496641543102!3d23.750885494670497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b8edcda5d%3A0x8f572aff4556f93a!2sBanani!5e0!3m2!1sen!2sbd!4v1610172904261!5m2!1sen!2sbd"
            className="w-full h-64 border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
