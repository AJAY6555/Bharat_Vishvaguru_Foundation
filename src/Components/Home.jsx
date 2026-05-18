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
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
    {
      title: "Rural Transformation",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
  ];

  const news = [
    {
      title: "Transforming Lives Through Education",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      title: "Empowering Rural Communities",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      title: "Healthcare Initiative Across India",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-screen mt-24">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt=""
          className="absolute w-full h-full object-cover scale-110 animate-slowZoom"
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
              <p className="uppercase tracking-[5px] mb-6 text-sm">
                We Care
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Building Stronger <br /> Communities Across India
              </h1>

              <p className="mt-8 text-lg text-gray-200 leading-8 max-w-2xl">
                Bharat Vishvaguru Foundation works towards
                education, healthcare, women empowerment and
                sustainable rural transformation.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button className="bg-orange-500 px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300">
                  Explore More
                </button>

                <button className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Watch Stories
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-gray-100 rounded-[35px] p-12 text-center hover:shadow-2xl transition-all duration-500"
              >
                <h1 className="text-5xl font-bold text-orange-500">
                  {item.number}
                </h1>

                <p className="mt-5 text-lg text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-20">
            <p className="uppercase tracking-[5px] text-orange-500 mb-5">
              Our Programs
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Transforming India <br /> Through Sustainable
              Initiatives
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {programs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[40px] h-[550px] group"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-10 left-10 text-white">
                  <h1 className="text-4xl font-bold">
                    {item.title}
                  </h1>

                  <button className="mt-6 flex items-center gap-3 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
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

      <section className="py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
            className="rounded-[40px] h-[650px] object-cover w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-orange-500 mb-5">
              Success Story
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Creating Opportunities <br /> For Every Child
            </h1>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Our initiatives continue to empower children,
              women and communities with education, digital
              literacy, healthcare and livelihood opportunities.
            </p>

            <button className="mt-10 bg-orange-500 px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
              Read Full Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= NEWS SECTION ================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-20">
            <div>
              <p className="uppercase tracking-[5px] text-orange-500 mb-4">
                Latest Updates
              </p>

              <h1 className="text-5xl font-bold">
                News & Media
              </h1>
            </div>

            <button className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              View All
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {news.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-[35px] shadow-xl bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[320px] w-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm text-gray-500">
                    April 2026
                  </p>

                  <h1 className="text-3xl font-bold mt-5 leading-snug">
                    {item.title}
                  </h1>

                  <button className="mt-6 text-orange-500 font-semibold flex items-center gap-3">
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

      <section className="py-28 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Together We Can Build <br /> A Better Tomorrow
          </h1>

          <p className="mt-8 text-xl leading-8">
            Support our mission to empower communities through
            education, healthcare and sustainable development.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full hover:scale-105 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </section>




      
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

    </div>
  );
};

export default Home;


