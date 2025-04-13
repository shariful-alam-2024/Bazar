import React from 'react';
import { gender } from './religion';
const Gender = () => {
     return (
       <>
         <div className="md:flex lg:flex gap-2">
           <label htmlFor="" className="">
             Gender :
           </label>
           <select name="" id="" className="w-full flex-1 rounded border">
             <option value="select" className="">
               select
             </option>
             {gender.map((MyGender, index) => (
               <option
                 key={index}
                 value={MyGender.toLowerCase().replace(/\s+/g, '-')}
                 className=""
               >
                 {MyGender}
               </option>
             ))}
           </select>
         </div>
       </>
     )
};

export default Gender;