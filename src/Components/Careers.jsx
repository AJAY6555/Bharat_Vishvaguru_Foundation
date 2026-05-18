import React from "react";

function Careers() {
  return (
    <>
      <div className="mt-36 w-[80%] m-auto h-[500px] rounded-3xl relative">
        <img
          className="h-full rounded-3xl"
          src="careers_img.jpg"
          alt="careers"
        />

        <div className="absolute z-30 text-7xl font-serif font-bold bottom-10 left-10 text-white">
          Careers
        </div>
      </div>

      <div className="w-[80%] m-auto mt-10 h-[650px] flex gap-12">
        <div className="w-[48%] bg-pink-100 rounded-3xl cursor-pointer hover:-translate-y-2 hover:transition-transform hover:shadow-lg">
          <div className="w-full bg-gray-500 rounded-3xl rounded-b-none h-72">
            <img
              className="h-full rounded-3xl rounded-b-none"
              src="careers_working.png"
              alt="careers"
            />
          </div>
          <div>
            <div className="text-4xl font-serif mt-5 ml-5 text-green-950">
              Working at Bharat Vishvaguru Foundation
            </div>
            <p className="font-sans text-2xl mt-5 ml-5 text-green-950">
              Bharat Vishvaguru Foundation offers a dynamic and collaborative
              work environment that encourages innovation and values the
              contribution of each team member. We welcome individuals who share
              our commitment to making a difference.
            </p>
            <button className="w-44 rounded-3xl h-12  bg-orange-200 mt-5 ml-5 font-bold text-gray-600 hover:bg-green-950 hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>

        <div className="w-[48%] bg-pink-100 rounded-3xl cursor-pointer hover:-translate-y-2 hover:transition-transform hover:shadow-lg">
          <div className="w-full bg-gray-500 rounded-3xl rounded-b-none h-72">
            <img
              className="h-full rounded-3xl rounded-b-none"
              src="careers_apply.png"
              alt="careers"
            />
          </div>

          <div>
            <div className="text-4xl font-serif mt-8 ml-5 text-green-950">
              Apply Now
            </div>

            <p className="font-sans text-2xl mt-5 mr-5 ml-5 text-green-950">
              Take the first step towards a fulfilling career by applying to
              join Bharat Vishvaguru Foundation. Your skills and passion can
              contribute to our mission, creating a positive impact on
              communities and helping us achieve our vision for a better
              tomorrow.
            </p>
            <button className="w-44 rounded-3xl h-12  bg-orange-200 mt-5 ml-5 font-bold text-gray-600 hover:bg-green-950 hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto h-[450px]  bg-[#C0EDD0] mt-12 rounded-3xl text-center">
        <div className=" pt-14 text-6xl font-serif text-[#003C3C]">
          Sign up for our latest updates
        </div>

        <p className="mt-10 text-2xl text-[#003C3C]">
          Get our email updates on the projects accelerating the development to<br></br>
          an inclusive sustainable India
        </p>

        <input type="text" className="pt-10 w-[500px] mt-10 border-b-2 bg-[#C0EDD0] text-xl font-serif border-[#003C3C] pb-3 text-gray-500" placeholder="Enter your email address*" />


       <div>
        <button className="bg-[#003C3C] p-4 text-white font-bold rounded-full pl-11 mt-5 pr-11">SUBSCRIBE</button>
       </div>
      </div>
    </>
  );
}

export default Careers;
