import React, { useState } from 'react'

const faqs = [
  {
    question: 'আমি কীভাবে পণ্য অর্ডার করবো?',
    answer:
      'আপনার পছন্দের পণ্যটি সিলেক্ট করে “অর্ডার করুন” বাটনে ক্লিক করুন এবং প্রয়োজনীয় তথ্য দিয়ে অর্ডার নিশ্চিত করুন।',
  },
  {
    question: 'অর্ডার পেতে কত সময় লাগে?',
    answer: 'সাধারণত ২-৫ কর্মদিবসের মধ্যে পণ্য ডেলিভারি হয়।',
  },
  {
    question: 'আমি কীভাবে পেমেন্ট করতে পারি?',
    answer:
      'আপনি নগদ, বিকাশ, রকেট এবং ক্রেডিট/ডেবিট কার্ড ব্যবহার করে পেমেন্ট করতে পারবেন।',
  },
  {
    question: 'পণ্য রিটার্ন করতে চাইলে কী করবো?',
    answer:
      'ডেলিভারির ৭ দিনের মধ্যে রিটার্ন রিকোয়েস্ট করতে হবে। বিস্তারিত জানার জন্য আমাদের রিটার্ন নীতিমালা দেখুন।',
  },
  {
    question: 'পাসওয়ার্ড ভুলে গেলে কী করবো?',
    answer:
      'লগইন পেজে “পাসওয়ার্ড ভুলে গেছেন?” অপশন সিলেক্ট করুন এবং ইমেইল দিন।',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        প্রশ্ন ও উত্তর (FAQ)
      </h2>

      {/* Search Box */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="প্রশ্ন খুঁজুন..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 rounded-l bg-gray-200 text-gray-700 focus:outline-none"
        />
      </div>

      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <p className="text-center text-gray-500">কোনো প্রশ্ন পাওয়া যায়নি।</p>
        ) : (
          filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.62 5.38a1 1 0 010 1.42L10.41 12l5.21 5.21a1 1 0 11-1.42 1.42l-6-6a1 1 0 010-1.42l6-6a1 1 0 011.42 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.38 4.62a1 1 0 011.42 0L10 8.59l3.21-3.21a1 1 0 111.42 1.42l-4.58 4.58a1 1 0 01-1.42 0l-4.58-4.58a1 1 0 010-1.42z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default FAQ
