import React from 'react'

const Footer = () => {
  return (
    <footer className=" ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <a href="/" className="">
            {' '}
            <h2 className="text-2xl font-bold mb-2">bazaar.com</h2>
          </a>
          <p className="text-sm ">
            Trusted online marketplace where you can easily buy your favorite
            products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">quick Link</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/Blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/Location" className="hover:text-white">
                Location
              </a>
            </li>
            <li>
              <a href="/Document" className="hover:text-white">
                Document
              </a>
            </li>
            <li>
              <a href="/Library" className="hover:text-white">
                Library
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="/ContactPage" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/Return" className="hover:text-white">
                ReturnPolicy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm  mb-2">Subscribe to receive new updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-2 py-1 w-full border-cyan-700 border-2 rounded-l bg-gray-950 text-white placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 rounded-r hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 mt-6">
        {/* Pay with Text */}
        <p className="text-sm font-semibold text-gray-400">Pay with</p>

        {/* Left Vertical Line */}
        <div className="hidden sm:block w-px h-48 bg-gray-400"></div>

        {/* Payment Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-10 gap-4">
          {[
            '/Bkash.png',
            '/nagad.png',
            '/rocket.png',
            '/upay.png',
            '/mastercard.png',
            '/bank1.png',
            '/amex.png',
            '/citybank.png',
            '/dbbl.png',
            '/bracbank.png',
            '/onebank.png',
            '/ebl.png',
            '/ibbl.png',
            '/midlandbank.png',
            '/mutualtrustbank.png',
            '/southeastbank.png',
            '/standardchartered.png',
            '/ucbl.png',
            '/meghnabank.png',
            '/modhumotibank.png',
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Payment Logo ${index + 1}`}
              className="h-10 border-4 p-1 rounded-2xl 
       border-t-rose-800 border-b-emerald-700 
       border-l-violet-800 border-r-amber-400 
       hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Right Vertical Line */}
        <div className="hidden sm:block w-px h-48 bg-gray-400"></div>

        {/* SSL Commerz Text */}
        <p className="text-sm font-semibold text-gray-400 uppercase">
          SSL Commerz
        </p>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm ">
        © 2025 bazaar.com — All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
