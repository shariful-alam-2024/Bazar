import React from 'react'

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">শর্তাবলী</h1>

      {/* 1. ভূমিকা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">১. ভূমিকা</h2>
        <p>
          এই ওয়েবসাইটটি ব্যবহার করার মাধ্যমে আপনি আমাদের শর্তাবলীতে সম্মত
          হচ্ছেন। যদি আপনি এই শর্তগুলোর সাথে একমত না হন, তাহলে দয়া করে আমাদের
          ওয়েবসাইটটি ব্যবহার করবেন না।
        </p>
      </section>

      {/* 2. অ্যাকাউন্ট ও নিরাপত্তা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ২. অ্যাকাউন্ট ও নিরাপত্তা
        </h2>
        <p>
          আপনি যখন আমাদের ওয়েবসাইটে অ্যাকাউন্ট তৈরি করবেন, তখন আপনাকে সঠিক তথ্য
          প্রদান করতে হবে। আপনার পাসওয়ার্ড গোপন রাখার দায়িত্ব সম্পূর্ণরূপে
          আপনার।
        </p>
      </section>

      {/* 3. ক্রয়-বিক্রয় সম্পর্কিত নিয়ম */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৩. ক্রয়-বিক্রয় সম্পর্কিত নিয়ম
        </h2>
        <p>
          অর্ডার কনফার্মেশন পেমেন্ট সফলভাবে সম্পন্ন হওয়ার পরে হয়। আমরা যেকোনো
          সময় মূল্য পরিবর্তন করতে পারি এবং আপনার অর্ডার বাতিল করার অধিকার রাখি।
        </p>
      </section>

      {/* 4. রিটার্ন ও রিফান্ড নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৪. রিটার্ন ও রিফান্ড নীতি
        </h2>
        <p>
          পণ্য গ্রহনের ৭ দিনের মধ্যে আপনি রিটার্ন করতে পারবেন নির্দিষ্ট শর্তে।
          ব্যবহৃত, ক্ষতিগ্রস্ত বা অফার প্রোডাক্ট রিটার্নযোগ্য নয়।
        </p>
      </section>

      {/* 5. প্রাইভেসি নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৫. প্রাইভেসি নীতি</h2>
        <p>
          আপনার ব্যক্তিগত তথ্য আমাদের প্রাইভেসি নীতির অধীনে সুরক্ষিত। বিস্তারিত
          জানতে
          <a href="/privacy" className="text-blue-600 underline ml-1">
            প্রাইভেসি নীতি
          </a>{' '}
          দেখুন।
        </p>
      </section>

      {/* 6. নিষিদ্ধ ব্যবহার */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৬. নিষিদ্ধ ব্যবহার</h2>
        <p>
          আপনি আমাদের সাইট কোন অবৈধ, ক্ষতিকর, বা প্রতারণামূলক কাজে ব্যবহার করতে
          পারবেন না। ভুয়া অর্ডার দেওয়া সম্পূর্ণরূপে নিষিদ্ধ।
        </p>
      </section>

      {/* 7. কপিরাইট ও মালিকানা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৭. কপিরাইট ও মালিকানা</h2>
        <p>
          আমাদের ওয়েবসাইটে ব্যবহৃত সকল লেখা, ছবি, লোগো এবং কনটেন্টের মালিকানা
          bazaar.com এর। অনুমতি ছাড়া এগুলো কপি বা ব্যবহার করা যাবে না।
        </p>
      </section>

      {/* 8. পরিবর্তন ও বাতিল */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৮. শর্ত পরিবর্তন ও অ্যাক্সেস বাতিল
        </h2>
        <p>
          আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করতে পারি এবং যেকোনো
          ব্যবহারকারীর অ্যাক্সেস বাতিল করার অধিকার সংরক্ষণ করি।
        </p>
      </section>

      {/* 9. দায়বদ্ধতার সীমা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৯. দায়বদ্ধতার সীমা</h2>
        <p>
          ডেলিভে বিলম্ব, প্রোডাক্টের ত্রুটি বা সার্ভিসে কোনো সমস্যার কারণে
          bazaar.com কিছু সীমিত দায় স্বীকার করে, যা আমাদের রিটার্ন নীতিতে
          ব্যাখ্যা করা হয়েছে।
        </p>
      </section>

      {/* 10. যোগাযোগ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">১০. যোগাযোগ</h2>
        <p>
          এই শর্তাবলী সম্পর্কে যদি আপনার কোনো প্রশ্ন থাকে, তাহলে আমাদের সাথে
          যোগাযোগ করুন:
          <br />
          <span className="font-medium">ইমেইল:</span> support@bazaar.com
        </p>
      </section>
    </div>
  )
}

export default Terms
