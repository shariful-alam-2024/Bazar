import React from 'react';

const Email = () => {
     return (
       <>
         <div className="md:flex lg:flex gap-2 items-center">
           <label htmlFor="" className="">
             Email :
           </label>
           <input
             type="email"
             placeholder="Enter Your Email"
             className="w-full flex-1 rounded border p-1"
             required
           />
         </div>
       </>
     )
};

export default Email;