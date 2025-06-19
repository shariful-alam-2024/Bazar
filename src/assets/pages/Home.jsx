import React from 'react';


import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="pt-20  px-4 text-black dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl text-white font-bold dark:text-white">
            Welcome to Bazar.com
          </h1>
          <p className="mt-4 text-lg dark:text-gray-300">
            Your one-stop shop for fashion, electronics, and more!
          </p>
          <Link
            to="/Shop"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Start Shopping
          </Link>
        </section>

        {/* Features or Categories */}
        <section className="grid gap-8 md:grid-cols-3 mt-10 max-w-6xl mx-auto">
          <div className="bg-white text-black dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Men</h3>
            <p className=" dark:text-gray-300">Stylish wear for modern men</p>
          </div>
          <div className="bg-white text-black dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Women</h3>
            <p className=" dark:text-gray-300">Latest trends for every woman</p>
          </div>
          <div className="bg-white text-black dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Kids</h3>
            <p className=" dark:text-gray-300">
              Adorable outfits for little ones
            </p>
          </div>
        </section>
      </div>
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/hero-banner.jpg')`, // Put your image in the public folder
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Your Style
          </h1>
          <p className="mt-4 text-lg">
            Trendy fashion, amazing deals – only at Bazar.com
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  )
};

export default Home;
