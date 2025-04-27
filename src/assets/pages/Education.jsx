import React from 'react';

const Education = () => {
     return (
       <div className="min-h-screen py-12 px-6">
         <h1 className="text-3xl font-bold mb-10">📚 Business Learning</h1>

         {/* === PDF Section === */}
         <section className="mb-12">
           <h2 className="text-2xl font-semibold mb-6">📄 PDF Resources</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 title: 'Startup Guide',
                 desc: 'Learn the basics of starting a business from scratch.',
                 price: '$2.99',
                 cover: 'https://via.placeholder.com/150',
               },
               {
                 title: 'Marketing Plan PDF',
                 desc: 'A full digital marketing guide for beginners.',
                 price: '$1.99',
                 cover: 'https://via.placeholder.com/150',
               },
             ].map((pdf, i) => (
               <div
                 key={i}
                 className="p-4 bg-white dark:bg-gray-800 rounded shadow"
               >
                 <img
                   src={pdf.cover}
                   alt="PDF Cover"
                   className="w-full h-40 object-cover rounded"
                 />
                 <h3 className="text-lg font-bold mt-3">{pdf.title}</h3>
                 <p className="text-sm mt-1">{pdf.desc}</p>
                 <div className="mt-4 flex justify-between items-center">
                   <span className="text-green-600 font-bold">{pdf.price}</span>
                   <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                     Buy PDF
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </section>

         {/* === Book Section === */}
         <section className="mb-12">
           <h2 className="text-2xl font-semibold mb-6">📘 Recommended Books</h2>
           <ul className="space-y-4">
             <li className="bg-white dark:bg-gray-800 p-4 rounded shadow">
               <h3 className="font-bold">The Lean Startup – Eric Ries</h3>
               <p className="text-sm">
                 Build and grow your startup using lean methods.
               </p>
               <a
                 href="https://example.com/lean-startup"
                 className="text-blue-600 dark:text-blue-400 hover:underline"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Read Book →
               </a>
             </li>
             <li className="bg-white dark:bg-gray-800 p-4 rounded shadow">
               <h3 className="font-bold">Zero to One – Peter Thiel</h3>
               <p className="text-sm">
                 Notes on startups and how to build the future.
               </p>
               <a
                 href="https://example.com/zero-to-one"
                 className="text-blue-600 dark:text-blue-400 hover:underline"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Read Book →
               </a>
             </li>
           </ul>
         </section>

         {/* === Quiz Section === */}
         <section>
           <h2 className="text-2xl font-semibold mb-6">📝 Quick Quiz</h2>
           <form className="space-y-6">
             <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
               <p className="font-semibold mb-2">1. What does MVP stand for?</p>
               <label className="block">
                 <input type="radio" name="q1" /> Most Valuable Product
               </label>
               <label className="block">
                 <input type="radio" name="q1" /> Minimum Viable Product
               </label>
               <label className="block">
                 <input type="radio" name="q1" /> Major Vision Plan
               </label>
             </div>
             <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
               <p className="font-semibold mb-2">
                 2. What is the purpose of a business plan?
               </p>
               <label className="block">
                 <input type="radio" name="q2" /> To entertain investors
               </label>
               <label className="block">
                 <input type="radio" name="q2" /> To outline goals and strategy
               </label>
               <label className="block">
                 <input type="radio" name="q2" /> To hire employees
               </label>
             </div>
             <button
               type="submit"
               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
             >
               Submit Quiz
             </button>
           </form>
         </section>
       </div>
     )
};

export default Education;