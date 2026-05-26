import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  const programs = [
    {
      title: "Education",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
    {
      title: "Rural Transformation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
  ];

  const news = [
    {
      title: "Transforming Lives Through Education",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      title: "Empowering Rural Communities",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      title: "Healthcare Initiative Across India",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[110vh] md:h-screen mt-32 md:mt-28">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt=""
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl text-white"
            >
              <p className="uppercase tracking-[3px] md:tracking-[5px] mb-4 md:mb-6 text-xs md:text-sm">
                We Care
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Building Stronger <br className="hidden md:block" /> Communities
                Across India
              </h1>

              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-200 leading-7 md:leading-8 max-w-2xl">
                Bharat Vishvaguru Foundation works towards education,
                healthcare, women empowerment and sustainable rural
                transformation.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-5">
                <button className="bg-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:scale-105 transition-all duration-300">
                  Explore More
                </button>

                <button className="border border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Watch Stories
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "25K+",
                text: "Students Supported",
              },
              {
                number: "800+",
                text: "Villages Reached",
              },
              {
                number: "150+",
                text: "Healthcare Camps",
              },
              {
                number: "50K+",
                text: "Lives Impacted",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-100 rounded-[25px] md:rounded-[35px] p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-500"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                  {item.number}
                </h1>

                <p className="mt-4 md:mt-5 text-base md:text-lg text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-12 md:mb-20">
            <p className="uppercase tracking-[3px] md:tracking-[5px] text-orange-500 mb-3 md:mb-5 text-sm md:text-base">
              Our Programs
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Transforming India <br className="hidden md:block" /> Through
              Sustainable Initiatives
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {programs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[30px] md:rounded-[40px] h-[400px] md:h-[550px] group"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {item.title}
                  </h1>

                  <button className="mt-4 md:mt-6 flex items-center gap-3 border border-white px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}

      <section className="py-16 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
            className="rounded-[30px] md:rounded-[40px] h-[400px] md:h-[650px] object-cover w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[3px] md:tracking-[5px] text-orange-500 mb-3 md:mb-5 text-sm md:text-base">
              Success Story
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Creating Opportunities <br className="hidden md:block" /> For
              Every Child
            </h1>

            <p className="mt-6 md:mt-8 text-gray-300 leading-7 md:leading-8 text-base md:text-lg">
              Our initiatives continue to empower children, women and
              communities with education, digital literacy, healthcare and
              livelihood opportunities.
            </p>

            <button className="mt-8 md:mt-10 bg-orange-500 px-7 md:px-8 py-3 md:py-4 rounded-full hover:scale-105 transition-all duration-300">
              Read Full Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= NEWS SECTION ================= */}

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-12 md:mb-20">
            <div>
              <p className="uppercase tracking-[3px] md:tracking-[5px] text-orange-500 mb-3 md:mb-4 text-sm md:text-base">
                Latest Updates
              </p>

              <h1 className="text-3xl md:text-5xl font-bold">News & Media</h1>
            </div>

            <button className="w-fit border border-black px-6 md:px-7 py-2 md:py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {news.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-[30px] md:rounded-[35px] shadow-xl bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[250px] md:h-[320px] w-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs md:text-sm text-gray-500">April 2026</p>

                  <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-5 leading-snug">
                    {item.title}
                  </h1>

                  <button className="mt-5 md:mt-6 text-orange-500 font-semibold flex items-center gap-3">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DONATE SECTION ================= */}

      <section className="py-20 md:py-28 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Together We Can Build <br className="hidden md:block" /> A Better
            Tomorrow
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl leading-7 md:leading-8">
            Support our mission to empower communities through education,
            healthcare and sustainable development.
          </p>

          <button className="mt-8 md:mt-10 bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full hover:scale-105 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </section>

      <div className="w-[90%] md:w-[80%] m-auto h-auto py-12 md:h-[450px] bg-[#C0EDD0] mt-12 rounded-3xl text-center px-5">
        <div className="pt-6 md:pt-14 text-3xl md:text-6xl font-serif text-[#003C3C]">
          Sign up for our latest updates
        </div>

        <p className="mt-6 md:mt-10 text-lg md:text-2xl text-[#003C3C]">
          Get our email updates on the projects accelerating the development to
          <br className="hidden md:block" />
          an inclusive sustainable India
        </p>

        <input
          type="text"
          className="w-full max-w-[500px] mt-8 md:mt-10 border-b-2 bg-[#C0EDD0] text-lg md:text-xl font-serif border-[#003C3C] pb-3 text-gray-500 outline-none"
          placeholder="Enter your email address*"
        />

        <div className="mt-8 md:mt-5">
          <button className="bg-[#003C3C] px-10 py-4 text-white font-bold rounded-full">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
