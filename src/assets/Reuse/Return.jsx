import React from 'react';

const Return = () => {
     return (
       <div className="max-w-4xl mx-auto px-4 py-10  pt-24">
         <h1 className="text-3xl font-bold mb-6 text-center">রিটার্ন নীতি</h1>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2"> রিটার্নের সময়সীমা</h2>
           <p>
             পণ্য গ্রহণের ৭ দিনের মধ্যে আপনি রিটার্নের জন্য আবেদন করতে পারবেন।
           </p>
         </section>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2"> রিটার্নের শর্তাবলী</h2>
           <ul className="list-disc ml-6 space-y-1">
             <li>পণ্যটি অবশ্যই অব্যবহৃত এবং অক্ষত থাকতে হবে।</li>
             <li>মূল প্যাকেজিং এবং ট্যাগ সহ ফেরত দিতে হবে।</li>
             <li>অর্ডার নম্বর বা রিসিপ্ট থাকতে হবে।</li>
           </ul>
         </section>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2">
             কোন পণ্য রিটার্নযোগ্য নয়
           </h2>
           <ul className="list-disc ml-6 space-y-1">
             <li>খাবার বা নষ্ট হওয়ার মতো পণ্য</li>
             <li>ব্যবহৃত অন্তর্বাস, কসমেটিক্স, স্বাস্থ্য পণ্য</li>
             <li>কাস্টমাইজড অর্ডার</li>
           </ul>
         </section>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2">এক্সচেঞ্জ নীতি</h2>
           <p>
             পণ্যের সাইজ বা রঙ পরিবর্তনের জন্য এক্সচেঞ্জ করা যাবে। স্টকে না
             থাকলে আমরা রিফান্ড দিব।
           </p>
         </section>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2">রিফান্ড প্রক্রিয়া</h2>
           <p>
             রিফান্ড ৭-১০ কর্মদিবসের মধ্যে আপনার মূল পেমেন্ট মেথডে পাঠানো হবে।
           </p>
         </section>

         <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2">
             রিটার্ন করার প্রক্রিয়া
           </h2>
           <ul className="list-disc ml-6 space-y-1">
             <li>
               আমাদের কাস্টমার সার্ভিসে যোগাযোগ করে রিটার্ন রিকোয়েস্ট করতে হবে।
             </li>
             <li>পণ্যটি কুরিয়ারের মাধ্যমে আমাদের ঠিকানায় পাঠাতে হবে।</li>
             <li>কিছু ক্ষেত্রে রিটার্ন পিকআপও করা হতে পারে।</li>
           </ul>
         </section>

         <section>
           <h2 className="text-xl font-semibold mb-2"> যোগাযোগ</h2>
           <p>কোনো প্রশ্ন থাকলে যোগাযোগ করুন:</p>
           <ul className="mt-2 text-sm space-y-1">
             <li>
               <strong>ইমেইল:</strong> support@bazaar.com
             </li>
             <li>
               <strong>ফোন:</strong> 01234-567890
             </li>
           </ul>
         </section>
       </div>
     )
};

export default Return;