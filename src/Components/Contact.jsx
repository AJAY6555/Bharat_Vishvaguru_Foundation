import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaLocationDot, FaRepeat } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const images = [
    "/captcha_1.jpg",
    "/captcha_2.jpg",
    "/captcha_3.jpg",
    "/captcha_4.jpg",
    "/captcha_5.jpg",
    "/captcha_6.jpg",
    "/captcha_7.jpg",
    "/captcha_8.jpg",
    "/captcha_9.jpg",
    "/captcha_10.jpg",
    "/captcha_11.jpg",
  ];

  const [currentImg, setCurrentImg] = useState(0);

  const changeImage = () => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[75vh] md:h-[75vh] mt-36 md:mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[4px] md:tracking-[6px] text-cyan-300 font-semibold mb-4 md:mb-6 text-sm md:text-base">
                Contact Us
              </p>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
                Let’s Connect With Bharat Vishvaguru Foundation
              </h1>

              <p className="text-gray-200 text-base md:text-xl leading-7 md:leading-9 mt-5 md:mt-8">
                For any enquiries or information, drop us an e-mail or contact
                us directly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONTACT ADDRESS */}
      <div className="w-[92%] lg:w-[80%] mx-auto bg-pink-50 mt-10 md:mt-12 rounded-3xl text-center px-5 py-10 md:p-12">
        <h1 className="text-3xl md:text-5xl font-serif">Contact Address</h1>

        <div className="flex flex-col md:flex-row justify-center items-center text-base md:text-lg mt-6 text-gray-700 gap-3">
          <FaLocationDot className="text-[#20c997] text-2xl" />

          <p>
            9th Floor, Maker Chambers IV, 222, Jyoti Nagar Police Station,
            Jaipur- 400021, Rajasthan
          </p>
        </div>

        <div className="mt-8 text-xl md:text-2xl font-bold">
          For any general queries, email us:
        </div>

        <div className="text-gray-600 text-lg md:text-xl mt-4 underline flex justify-center items-center flex-wrap gap-2">
          <HiOutlineMail className="text-[#20c997] text-2xl" />

          <span>contactus@bharatvishvaguru.org</span>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          {[
            {
              icon: <FaFacebookF />,
              link: "#",
            },

            {
              icon: <FaTwitter />,
              link: "#",
            },

            {
              icon: <FaLinkedinIn />,
              link: "#",
            },

            {
              icon: <FaInstagram />,
              link: "#",
            },

            {
              icon: <FaYoutube />,
              link: "#",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-11 h-11 rounded-full bg-[#043E3B] hover:bg-[#20c997] text-white flex items-center justify-center text-lg transition duration-500 hover:scale-110 shadow-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="w-[92%] lg:w-[80%] mx-auto bg-pink-50 mt-10 rounded-3xl p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl font-serif mb-10">Get In Touch</h1>

        {/* INPUT ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Name *
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-[60px] px-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>

          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Email *
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[60px] px-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>
        </div>

        {/* INPUT ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Contact No *
            </label>

            <input
              type="text"
              placeholder="Enter your Number"
              className="w-full h-[60px] px-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>

          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Area Of Interest *
            </label>

            <select className="w-full h-[60px] px-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg bg-white">
              <option>Select area of interest</option>

              <option>Education</option>

              <option>Healthcare</option>

              <option>Rural Development</option>

              <option>Women Empowerment</option>

              <option>Sports</option>

              <option>Environment</option>
            </select>
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="mt-8">
          <label className="text-[#0a1b38] font-semibold block mb-3">
            Message *
          </label>

          <textarea
            rows="6"
            placeholder="Write your message..."
            className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg resize-none"
          ></textarea>
        </div>

        {/* CAPTCHA */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 md:items-center">
          <div>
            <input
              type="text"
              placeholder="Captcha"
              className="rounded-2xl w-full md:w-60 border border-gray-500 h-14 pl-5 text-lg"
            />

            <p className="mt-2 text-sm text-gray-600">
              Enter the characters shown in the image.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex items-center gap-4">
            <div className="border border-gray-400 w-40 h-16 rounded-xl flex justify-center items-center overflow-hidden bg-white">
              <img
                src={images[currentImg]}
                alt="captcha"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </div>

            {/* REFRESH */}
            <div
              onClick={changeImage}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 bg-gray-200"
            >
              <FaRepeat className="text-lg text-black" />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-40 h-12 rounded-3xl font-bold text-[#003C3C] bg-[#FFE7AB] hover:bg-[#003C3C] hover:text-white transition duration-300"
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="w-[92%] lg:w-[80%] mx-auto bg-[#C0EDD0] mt-12 rounded-3xl text-center px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-6xl font-serif text-[#003C3C] leading-tight">
          Sign up for our latest updates
        </h1>

        <p className="mt-8 text-lg md:text-2xl text-[#003C3C] leading-8">
          Get our email updates on the projects accelerating the development to
          an inclusive sustainable India
        </p>

        <input
          type="text"
          className="w-full md:w-[500px] mt-10 border-b-2 bg-transparent text-lg md:text-xl font-serif border-[#003C3C] pb-3 text-gray-600 outline-none"
          placeholder="Enter your email address*"
        />

        <div>
          <button className="bg-[#003C3C] px-10 py-4 text-white font-bold rounded-full mt-8 hover:scale-105 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
