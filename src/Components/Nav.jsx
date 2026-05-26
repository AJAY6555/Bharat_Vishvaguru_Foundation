import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-2">
        <nav>
          <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 h-[95px]">
            {/* LOGO */}

            <Link to="/">
              {/* YHA APNA LOGO LGA DENA */}

              <img
                src="/logo.png"
                alt="logo"
                className="w-[130px] object-contain"
              />
            </Link>

            {/* MENU */}

            <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#111827]">
              {/* ABOUT US */}

              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("about")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <NavLink to="/aboutus">
                  <div className="flex items-center gap-2 h-[95px] cursor-pointer border-b-[3px] border-transparent hover:border-[#0b1f57] hover:text-[#0b1f57] duration-300">
                    About Us
                    <FaChevronDown className="text-[10px]" />
                  </div>
                </NavLink>

                {/* ABOUT MENU */}

                <AnimatePresence>
                  {activeMenu === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[95px] left-[-220px] w-[1150px] bg-white shadow-2xl border z-50 overflow-hidden"
                    >
                      <div className="grid grid-cols-2">
                        {/* LEFT */}

                        <div className="p-12 border-r">
                          <h2 className="text-[34px] font-semibold text-[#0b1f57] mb-5">
                            About Us
                          </h2>

                          <p className="text-gray-600 leading-8 text-[15px]">
                            Led by Founder Chairperson, Bharat Vishvaguru
                            Foundation was established to empower communities
                            through education, healthcare, sports and
                            sustainability.
                          </p>

                          {/* BUTTON */}

                          <button className="mt-8 border border-[#0b1f57] px-7 py-3 rounded-full hover:bg-[#0b1f57] hover:text-white duration-300">
                            KNOW MORE
                          </button>

                          {/* LINKS */}

                          <div className="grid grid-cols-2 gap-y-5 mt-12 text-[15px] font-medium">
                            <Link to="/" className="hover:text-[#0b1f57]">
                              Our Chairperson
                            </Link>

                            <Link to="/" className="hover:text-[#0b1f57]">
                              Our Story
                            </Link>

                            <Link to="/" className="hover:text-[#0b1f57]">
                              What We Do
                            </Link>

                            <Link to="/" className="hover:text-[#0b1f57]">
                              Our Impact & Reach
                            </Link>

                            <Link to="/" className="hover:text-[#0b1f57]">
                              Annual Report
                            </Link>

                            <Link to="/" className="hover:text-[#0b1f57]">
                              Awards
                            </Link>
                          </div>
                        </div>

                        {/* RIGHT */}

                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                            alt=""
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-black/40"></div>

                          <div className="absolute bottom-10 left-10 text-white max-w-[400px]">
                            <h2 className="text-3xl font-semibold mb-4">
                              Our Story
                            </h2>

                            <p className="leading-7 text-[15px]">
                              Our journey is one of dedication, passion and
                              commitment towards creating a better future for
                              India.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* WHAT WE DO */}

              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("what")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <NavLink to="/whatwedo">
                  <div className="flex items-center gap-2 h-[95px] cursor-pointer border-b-[3px] border-transparent hover:border-[#0b1f57] hover:text-[#0b1f57] duration-300">
                    What We Do
                    <FaChevronDown className="text-[10px]" />
                  </div>
                </NavLink>

                {/* WHAT MENU */}

                <AnimatePresence>
                  {activeMenu === "what" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[95px] left-[-300px] w-[1000px] bg-white shadow-2xl border z-50 overflow-hidden"
                    >
                      <div className="grid grid-cols-3">
                        {/* LEFT */}

                        <div className="col-span-2 grid grid-cols-2 gap-10 p-10">
                          <div>
                            <h2 className="text-[#0b1f57] text-lg font-semibold mb-6">
                              Programs
                            </h2>

                            <div className="flex flex-col gap-5">
                              <Link to="/" className="hover:text-[#0b1f57]">
                                Education
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Healthcare
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Sports
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Women Empowerment
                              </Link>
                            </div>
                          </div>

                          <div>
                            <h2 className="text-[#0b1f57] text-lg font-semibold mb-6">
                              Development
                            </h2>

                            <div className="flex flex-col gap-5">
                              <Link to="/" className="hover:text-[#0b1f57]">
                                Rural Transformation
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Environment
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Digital India
                              </Link>

                              <Link to="/" className="hover:text-[#0b1f57]">
                                Arts & Culture
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* RIGHT */}

                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200"
                            alt=""
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-black/30"></div>

                          <div className="absolute bottom-8 left-8 text-white">
                            <h2 className="text-2xl font-bold">What We Do</h2>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* OTHER LINKS */}

              <NavLink to="/insights">
                <li className="h-[95px] flex items-center cursor-pointer hover:text-[#0b1f57] duration-300">
                  Insights
                </li>
              </NavLink>

              <NavLink to="/careers">
                <li className="h-[95px] flex items-center cursor-pointer hover:text-[#0b1f57] duration-300">
                  Careers
                </li>
              </NavLink>

              <NavLink to="/media">
                <li className="h-[95px] flex items-center cursor-pointer hover:text-[#0b1f57] duration-300">
                  Media
                </li>
              </NavLink>

              <NavLink to="/contact">
                <li className="h-[95px] flex items-center cursor-pointer hover:text-[#0b1f57] duration-300">
                  Contact
                </li>
              </NavLink>
            </ul>

            {/* RIGHT */}

            <div className="hidden lg:flex items-center gap-4">
              {/* SEARCH */}

              <button
                onClick={() => setSearchOpen(true)}
                className="text-[18px] hover:text-[#0b1f57] duration-300"
              >
                <FaSearch />
              </button>

              {/* SUBSCRIBE */}

              <button className="border border-[#0b1f57] px-5 py-2 rounded-full text-[14px] hover:bg-[#0b1f57] hover:text-white duration-300">
                Subscribe
              </button>
            </div>

            {/* MOBILE */}

            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-3xl"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* SEARCH POPUP */}

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[999]"
          >
            <div className="flex justify-center items-start pt-40 px-5">
              <motion.div
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                exit={{ y: -30 }}
                className="bg-white w-full max-w-3xl rounded-xl p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Search</h2>

                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-3xl"
                  >
                    <FaTimes />
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full border p-4 rounded-lg outline-none"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-[999]"
          >
            {/* TOP */}

            <div className="flex justify-between items-center p-6 border-b">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=500"
                alt=""
                className="w-[140px]"
              />

              <button onClick={() => setMobileMenu(false)} className="text-3xl">
                <FaTimes />
              </button>
            </div>

            {/* MOBILE LINKS */}

            <div className="flex flex-col gap-7 p-6 text-lg font-medium">
              <Link to="/">About Us</Link>
              <Link to="/">What We Do</Link>
              <Link to="/">Insights</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Media</Link>
              <Link to="/">Contact</Link>

              <button className="bg-[#0b1f57] text-white py-3 rounded-full mt-5">
                Subscribe
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
