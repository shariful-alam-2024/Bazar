import React, { useState } from 'react';

const Pasport = () => {
     const [hasPasportNumber, setPasportNumber] = useState('');
     const handleChange = (event) => {
          setPasportNumber(event.target.value);
     }
     return (
       <>
         <div className="md:flex lg:flex gap-2">
           <label htmlFor="" className="md:text-sm">
             Your Pasport Number
           </label>
           <select
             name=""
             id=""
             className="flex-1 rounded border"
             onChange={handleChange}
           >
             <option value="select" className="">
               select
             </option>
             <option value="No" className="">
               No
             </option>
             <option value="Yes" className="">
               Yes
             </option>
           </select>
           {hasPasportNumber === 'Yes' && (
             <div className="">
               <label htmlFor="" className="">
                 [Your Pasport Number]:
               </label>
               <input
                 type="text"
                 className="w-full flex-1 rounded border"
                 placeholder="Enter Your Pasport Number"
                 required
               />
             </div>
           )}
         </div>
       </>
     )
};

export default Pasport;