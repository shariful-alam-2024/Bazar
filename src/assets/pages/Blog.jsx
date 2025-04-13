import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'

const blogPosts = [
  {
    id: 1,
    title: 'নতুন সিজনের ট্রেন্ডিং ফ্যাশন',
    summary: '২০২৫ সালে ফ্যাশনে আসছে নানা নতুন ধারা, দেখে নাও আজকের ব্লগ।',
    image: '/img2.png',
    author: 'রাহাত',
    date: '১২ এপ্রিল, ২০২৫',
    category: 'ফ্যাশন',
  },
  {
    id: 2,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img2.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'গ্যাজেট',
  },
  {
    id: 3,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'গ্যাজেট',
  },
  {
    id: 4,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img2.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 5,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 6,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 7,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 8,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 9,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
  {
    id: 10,
    title: 'মোবাইল কেনার আগে জেনে নাও এই ৫টি টিপস',
    summary:
      'স্মার্টফোন কেনার আগে কী কী বিষয় লক্ষ্য রাখা উচিত তা জানো এই লেখায়।',
    image: '/img3.png',
    author: 'সায়েম',
    date: '১০ এপ্রিল, ২০২৫',
    category: 'অফার',
  },
]

const categories = ['All', 'ফ্যাশন', 'গ্যাজেট', 'হেলথ', 'অফার']

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory =
      selectedCategory === 'All' || post.category === selectedCategory
    const matchSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handleNextPage = () => {
    if (indexOfLastPost < filteredPosts.length) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="p-6 max-w-6xl pt-24 mx-auto">
      {/* হেডার */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">My Blog</h1>
        <p className="">Last Updet, Tips And Guidline</p>
      </div>

      {/* সার্চ ও ক্যাটেগরি */}
      <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
        {/* সার্চ */}
        <div className="w-full lg:w-1/2">
          <form
            className="flex w-full relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your favorite Category"
              className="w-full py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {searchTerm && (
              <MdClose
                className="absolute right-14 top-1/2 w-5 h-5 transform bg-gray-100 rounded-full -translate-y-1/2 text-black cursor-pointer"
                onClick={() => setSearchTerm('')}
              />
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoSearch className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* ক্যাটেগরি */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setCurrentPage(1) // ক্যাটেগরি বদলালে প্রথম পেজে চলে যাবে
              }}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ব্লগ পোস্ট */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className=" text-sm mb-2">
                {post.author} • {post.date}
              </p>
              <p className=" mb-3">{post.summary}</p>
              <button className="text-blue-600 hover:underline">
              More Read
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* পেজিনেশন */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-l hover:bg-gray-100 disabled:opacity-50"
        >
          ← আগের
        </button>
        <button className="px-4 py-2 border-t border-b">{currentPage}</button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastPost >= filteredPosts.length}
          className="px-4 py-2 border rounded-r hover:bg-gray-100 disabled:opacity-50"
        >
          পরের →
        </button>
      </div>
    </div>
  )
}

export default Blog
