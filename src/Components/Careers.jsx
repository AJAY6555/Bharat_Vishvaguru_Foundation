import React from "react";

function Careers() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="mt-36 md:mt-36 w-[92%] lg:w-[80%] mx-auto relative rounded-3xl overflow-hidden">
        <img
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          src="careers_img.jpg"
          alt="careers"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXT */}
        <div className="absolute bottom-6 left-5 md:bottom-10 md:left-10 z-30">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white">
            Careers
          </h1>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="w-[92%] lg:w-[80%] mx-auto mt-10 flex flex-col lg:flex-row gap-8">
        {/* CARD 1 */}
        <div className="w-full lg:w-1/2 bg-pink-100 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          {/* IMAGE */}
          <div className="w-full h-[240px] sm:h-[280px]">
            <img
              className="w-full h-full object-cover"
              src="careers_working.png"
              alt="careers"
            />
          </div>

          {/* CONTENT */}
          <div className="p-5 md:p-7">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-green-950 leading-snug">
              Working at Bharat Vishvaguru Foundation
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl mt-5 text-green-950 leading-7">
              Bharat Vishvaguru Foundation offers a dynamic and collaborative
              work environment that encourages innovation and values the
              contribution of each team member. We welcome individuals who share
              our commitment to making a difference.
            </p>

            <button className="w-40 h-12 rounded-3xl bg-orange-200 mt-7 font-bold text-gray-700 hover:bg-green-950 hover:text-white transition duration-300">
              KNOW MORE
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-full lg:w-1/2 bg-pink-100 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          {/* IMAGE */}
          <div className="w-full h-[240px] sm:h-[280px]">
            <img
              className="w-full h-full object-cover"
              src="careers_apply.png"
              alt="careers"
            />
          </div>

          {/* CONTENT */}
          <div className="p-5 md:p-7">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-green-950">
              Apply Now
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl mt-5 text-green-950 leading-7">
              Take the first step towards a fulfilling career by applying to
              join Bharat Vishvaguru Foundation. Your skills and passion can
              contribute to our mission, creating a positive impact on
              communities and helping us achieve our vision for a better
              tomorrow.
            </p>

            <button className="w-40 h-12 rounded-3xl bg-orange-200 mt-7 font-bold text-gray-700 hover:bg-green-950 hover:text-white transition duration-300">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="w-[92%] lg:w-[80%] mx-auto bg-[#C0EDD0] mt-12 rounded-3xl text-center px-5 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#003C3C] leading-tight">
          Sign up for our latest updates
        </h1>

        <p className="mt-8 text-base sm:text-lg md:text-2xl text-[#003C3C] leading-8">
          Get our email updates on the projects accelerating the development to
          an inclusive sustainable India
        </p>

        {/* INPUT */}
        <input
          type="text"
          className="w-full md:w-[500px] mt-10 border-b-2 bg-transparent text-lg md:text-xl font-serif border-[#003C3C] pb-3 text-gray-600 outline-none"
          placeholder="Enter your email address*"
        />

        {/* BUTTON */}
        <div>
          <button className="bg-[#003C3C] px-10 py-4 text-white font-bold rounded-full mt-8 hover:scale-105 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
}

export default Careers;
