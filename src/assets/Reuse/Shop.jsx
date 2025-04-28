import React from 'react';
const dummyProducts = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    image: '/download.jpg',
  },
  {
    id: 2,
    name: 'Stylish Dress',
    price: 49.99,
    image: '/download.jpg',
  },
  {
    id: 3,
    name: 'Kids Hoodie',
    price: 19.99,
    image: '/download.jpg',
  },
]
const Shop = () => {
     return (
       <div className="pt-20 px-4 min-h-screen  ">
         <h1 className="text-3xl font-bold text-center mb-8  ">
           Our Collection
         </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {dummyProducts.map((product) => (
             <div
               key={product.id}
               className=" rounded-xl shadow-md p-4 text-center"
             >
               <img
                 src={product.image}
                 alt={product.name}
                 className="w-full h-52 object-cover rounded-lg"
               />
               <h2 className="text-xl font-semibold mt-4  ">{product.name}</h2>
               <p className="text-lg  dark:text-gray-300">${product.price}</p>
               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
                 Add to Cart
               </button>
             </div>
           ))}
         </div>
       </div>
     )
};

export default Shop;