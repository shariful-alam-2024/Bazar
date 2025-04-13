import React from 'react';
import { departmental } from './religion';
const Departmental = () => {
     return (
       <>
         <div className="md:flex lg:flex gap-2 items-center">
           <label htmlFor="" className="">
             Departmental Status :
           </label>
           <select name="" id="" className="w-full flex-1 rounded border">
             <option value="select" className="">
               select
             </option>
             {departmental.map((departmentalStatus, index) => (
               <option
                 key={index}
                 value={departmentalStatus.toLowerCase().replace(/\s+/g, '-')}
                 className=""
               >
                 {departmentalStatus}
               </option>
             ))}
           </select>
         </div>
       </>
     )
};

export default Departmental;