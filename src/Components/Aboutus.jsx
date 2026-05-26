import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[85vh] md:h-[85vh] mt-36 md:mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[3px] md:tracking-[5px] text-cyan-300 font-semibold mb-4 md:mb-6 text-sm md:text-base">
                Careers
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                About Us
              </h1>

              <p className="text-gray-200 text-base md:text-xl leading-7 md:leading-9 mt-6 md:mt-8 max-w-2xl">
                Bharat Vishvaguru Foundation is committed to building an
                inclusive India through innovative and sustainable solutions
                that uplift communities and transform lives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* OUR VISION */}
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
                Our Vision
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
                Building An Inclusive And Sustainable India
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                At Bharat Vishvaguru Foundation, our vision is to build an
                inclusive India by pioneering a holistic model to address our
                nation’s multifaceted development challenges.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Central to our philosophy is the commitment to enhance the
                quality of life of people from marginalised and vulnerable
                communities by empowering them through innovative and
                sustainable solutions.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt=""
                className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CHAIRPERSON */}
      {/* <div className="bg-[#f4f8fc] py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-24 items-center"> */}

      {/* IMAGE */}
      {/* <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt=""
                className="rounded-[35px] h-[700px] w-full object-cover shadow-2xl"
              />

            </motion.div> */}

      {/* CONTENT */}
      {/* <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
                Meet our Chairperson
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
                BVF Chairperson Smt. Nita M. Ambani
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                Nita Ambani is an educationist, philanthropist,
                businesswoman, patron of arts and sports, and champion
                of women and children’s rights.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Through various initiatives of Bharat Vishvguru
                Foundation, she seeks to empower millions of Indians
                with resources and opportunities.
              </p>

              <div className="mt-12 border-l-4 border-blue-600 pl-6">

                <h3 className="text-3xl font-bold text-[#0a1b38]">
                  Smt. Nita M. Ambani
                </h3>

                <p className="text-gray-600 text-lg mt-3">
                  Founder Chairperson Bharat Vishvguru Foundation
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div> */}

      {/* ABOUT FOUNDATION */}
      <div className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
            About Bharat Vishvaguru Foundation
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
            Creating Sustainable Social Impact Across India
          </h2>

          <p className="text-gray-600 text-lg leading-9 mt-10">
            Bharat Vishvaguru Foundation was established in 2010 to drive
            impactful social initiatives focused on empowering communities and
            creating sustainable development.
          </p>

          <p className="text-gray-600 text-lg leading-9 mt-6">
            Our efforts have touched millions of lives across villages and urban
            communities through initiatives in education, healthcare, sports,
            women empowerment, sustainability, disaster management and rural
            transformation.
          </p>
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className="bg-[#f4f8fc] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt=""
                className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
                Our Approach
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
                A Holistic Development Approach
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                The Foundation follows a comprehensive development approach
                focused on addressing India’s most pressing social challenges
                through innovation, collaboration and technology.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Our initiatives continue to evolve while remaining responsive to
                the changing needs of society and communities across the
                country.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14">
            <div className="text-center">
              <h1 className="text-[120px] md:text-[170px] font-bold text-blue-600 leading-none">
                97
              </h1>

              <p className="text-3xl font-semibold text-[#0a1b38] mt-6">
                Million
              </p>

              <p className="text-gray-600 text-xl mt-3">Lives touched</p>
            </div>

            <div className="text-center">
              <h1 className="text-[120px] md:text-[170px] font-bold text-blue-600 leading-none">
                98K
              </h1>

              <p className="text-3xl font-semibold text-[#0a1b38] mt-6">
                Villages
              </p>

              <p className="text-gray-600 text-xl mt-3">Villages covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORE MORE */}
      <div className="bg-[#0a1b38] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
            Explore more
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {["Our Story", "What We Do", "Annual Reports", "Awards"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -12 }}
                  className="bg-white/10 border border-white/10 rounded-[30px] p-10 backdrop-blur-lg hover:bg-white/20 duration-500"
                >
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {item}
                  </h3>

                  <button className="mt-10 flex items-center gap-4 text-cyan-300 text-lg font-semibold hover:gap-6 duration-500">
                    Learn More
                    <FaArrowRight />
                  </button>
                </motion.div>
              ),
            )}
          </div>
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

export default AboutUs;
