import React from 'react';
import { Mari } from './religion';
const Marital = () => {
     return (
       <>
         <div className="md:flex lg:flex gap-2">
           <label htmlFor="" className="">
             Marital Status :
           </label>
           <select name="" id="" className="w-full flex-1 rounded border">
             <option value="select" className="">
               select
             </option>
             {Mari.map((marital, index) => (
               <option
                 key={index}
                 value={marital.toLowerCase().replace(/\s+/g, '-')}
                 className=""
               >
                 {marital}
               </option>
             ))}
           </select>
         </div>
       </>
     )
};

export default Marital;