import React from 'react';
import { quota } from './religion';
const Quota = () => {
     return (
       <>
         <div className="md:flex lg:flex gap-2 items-center">
           <label htmlFor="" className="">
             Your quota :
           </label>
           <select name="" id="" className="w-full flex-1 rounded border ">
             <option value="select" className="">
               select
             </option>
             {quota.map((myQuota, index) => (
               <option
                 key={index}
                 value={myQuota.toLowerCase().replace(/\s+/g, '-')}
                 className=""
               >
                 {myQuota}
               </option>
             ))}
           </select>
         </div>
       </>
     )
};

export default Quota;