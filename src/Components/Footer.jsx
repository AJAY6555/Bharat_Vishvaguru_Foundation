import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#06163a] text-white pt-20 mt-20">
        {/* TOP SECTION */}

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
            {/* LOGO + ABOUT */}

            <div className="lg:col-span-2">
              {/* LOGO */}

              {/* YHA APNA LOGO LGA DENA */}

              <img src="/logo.png" alt="logo" className="w-[180px] mb-8" />

              <p className="text-[15px] leading-8 text-gray-300 max-w-[420px]">
                Bharat Vishvaguru Foundation is committed to empowering
                communities through education, healthcare, sustainability,
                innovation and social transformation.
              </p>

              {/* SOCIAL */}

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#06163a] duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#06163a] duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#06163a] duration-300"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#06163a] duration-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#06163a] duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* ABOUT */}

            <div>
              <h2 className="text-[18px] font-semibold mb-7">About Us</h2>

              <div className="flex flex-col gap-5 text-[15px] text-gray-300">
                <Link to="/" className="hover:text-white duration-300">
                  Our Story
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Leadership
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Annual Report
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Awards
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Careers
                </Link>
              </div>
            </div>

            {/* WHAT WE DO */}

            <div>
              <h2 className="text-[18px] font-semibold mb-7">What We Do</h2>

              <div className="flex flex-col gap-5 text-[15px] text-gray-300">
                <Link to="/" className="hover:text-white duration-300">
                  Education
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Healthcare
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Sports
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Rural Development
                </Link>

                <Link to="/" className="hover:text-white duration-300">
                  Sustainability
                </Link>
              </div>
            </div>

            {/* CONTACT */}

            <div>
              <h2 className="text-[18px] font-semibold mb-7">Contact</h2>

              <div className="space-y-5 text-[15px] text-gray-300 leading-7">
                <p>Bharat Vishvaguru Foundation, Jaipur, Rajasthan, India</p>

                <p>+91 9876543210</p>

                <p>info@bharatfoundation.org</p>
              </div>
            </div>
          </div>

          {/* SUBSCRIBE SECTION */}

          <div className="py-14 flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-white/10">
            {/* LEFT */}

            <div>
              <h2 className="text-[32px] font-semibold mb-4">
                Subscribe to our newsletter
              </h2>

              <p className="text-gray-300 text-[15px]">
                Get updates about our latest initiatives, stories and impact.
              </p>
            </div>

            {/* RIGHT */}

            <div className="w-full lg:w-[500px]">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-[58px] bg-transparent border border-white/20 px-5 outline-none rounded-full text-white placeholder:text-gray-400"
                />

                <button className="h-[58px] px-8 rounded-full bg-white text-[#06163a] font-medium hover:bg-gray-200 duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-[14px] text-gray-400">
            <p>© 2026 Bharat Vishvaguru Foundation. All Rights Reserved.</p>

            <div className="flex items-center gap-6">
              <Link to="/" className="hover:text-white duration-300">
                Privacy Policy
              </Link>

              <Link to="/" className="hover:text-white duration-300">
                Terms & Conditions
              </Link>

              <Link to="/" className="hover:text-white duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
