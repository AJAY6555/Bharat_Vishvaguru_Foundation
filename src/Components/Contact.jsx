import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaLocationArrow,
  FaVoicemail,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot, FaRepeat } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const images = [
    "https://www.reliancefoundation.org/image-captcha-generate/1720152/1778832527",
    "https://www.reliancefoundation.org/image-captcha-generate/1720405/1778834389",
    "https://www.reliancefoundation.org/image-captcha-generate/1720412/1778834405",
    "https://www.reliancefoundation.org/image-captcha-generate/1720418/1778834429",
    "https://www.reliancefoundation.org/image-captcha-generate/1720430/1778834444",
    "https://www.reliancefoundation.org/image-captcha-generate/1720442/1778834466",
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Image Change Function
  const changeImage = () => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div className="relative h-[75vh] mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[6px] text-cyan-300 font-semibold mb-6">
                Contact Us
              </p>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                Let’s Connect With Bharat Vishvaguru Foundation
              </h1>

              <p className="text-gray-200 text-xl leading-9 mt-8">
                For any enquiries or information, drop us an e-mail or contact
                us directly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto h-[400px]  bg-pink-50 mt-12 rounded-3xl text-center">
        <h1 className="text-5xl font-sans pt-10">Contact Address</h1>

        <div className=" flex justify-center text-lg font-san mt-5">
          <FaLocationDot className="text-[#20c997] mt-1 text-2xl mr-2" /> 9th
          Floor, Maker Chambers IV, 222, Jyoti Nagar Police Station, Jaipur-
          400021, Rajasthan
        </div>

        <div className="mt-9 text-2xl font-bold">
          For any general queries, email us:
        </div>

        <div className="text-gray-600 text-xl mt-4 underline flex justify-center">
          <HiOutlineMail className="mt-1 mr-2 text-[#20c997] text-2xl" />{" "}
          contactus@bharatvishvaguru.org
        </div>

        <div className="flex flex-wrap gap-3 mt-14 justify-center ">
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
              className="w-10 h-10 rounded-full bg-[#043E3B] hover:bg-[#20c997] text-white hover:text-white flex items-center justify-center text-xl transition duration-500 hover:scale-110 shadow-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="w-[80%] h-[900px] mt-10 bg-pink-50 m-auto rounded-3xl">
        <div className="text-5xl font-serif p-10">Get In Touch</div>

        <div className=" flex justify-around">
          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Name *
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-[500px] h-[65px] px-6 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>

          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Email *
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-[500px] h-[65px] px-6 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>
        </div>

        <div className=" flex justify-around mt-10">
          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Contact No *
            </label>

            <input
              type="text"
              placeholder="Enter your Number"
              className="w-[500px] h-[65px] px-6 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg"
            />
          </div>

          <div>
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Area Of Interest *
            </label>

            <select className="w-[500px] h-[65px] px-6 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg bg-white">
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

        <div>
          <div className="mt-10 w-[92%] m-auto ">
            <label className="text-[#0a1b38] font-semibold block mb-3">
              Message *
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-[100%]  p-6 rounded-2xl border border-gray-300 outline-none focus:border-blue-600 text-lg resize-none"
            ></textarea>
          </div>
        </div>

        <div className="mt-10  ml-10 flex ">
          <div>
            <input
              type="text"
              placeholder="Captcha"
              className=" rounded-2xl w-60 border border-gray-500 h-16 pl-5 text-lg"
            />

            <p className="mt-1">Enter the characters shown in the image.</p>
          </div>

          <div className=" ml-10 border border-gray-400 w-40 h-16 rounded-xl flex justify-center items-center font-serif text-3xl overflow-hidden bg-white">
            {/* Image */}
            <img
              src={images[currentImg]}
              alt="demo"
              className="w-full h-full object-contain "
            />
          </div>
          {/* Icon */}
          <div
            onClick={changeImage}
            className="bottom-2 right-2 w-10 h-10 mt-3 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <FaRepeat className="text-lg text-black" />
          </div>
        </div>

        <div>
          <button type="submit" className="w-36 h-12 rounded-3xl font-bold ml-10 mt-10 text-[#003C3C] bg-[#FFE7AB] hover:bg-[#003C3C] hover:text-white">SUBMIT</button>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="w-[80%] m-auto h-[450px]  bg-[#C0EDD0] mt-12 rounded-3xl text-center">
        <div className=" pt-14 text-6xl font-serif text-[#003C3C]">
          Sign up for our latest updates
        </div>

        <p className="mt-10 text-2xl text-[#003C3C]">
          Get our email updates on the projects accelerating the development to
          <br></br>
          an inclusive sustainable India
        </p>

        <input
          type="text"
          className="pt-10 w-[500px] mt-10 border-b-2 bg-[#C0EDD0] text-xl font-serif border-[#003C3C] pb-3 text-gray-500"
          placeholder="Enter your email address*"
        />

        <div>
          <button className="bg-[#003C3C] p-4 text-white font-bold rounded-full pl-11 mt-5 pr-11">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
