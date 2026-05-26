import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const stories = [
  {
    category: "Disaster Risk Reduction",
    title: "A Community Leader Advancing Nature-Based Solutions",
    location: "Bhadrak, Odisha",
    date: "12 December 2025",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
  {
    category: "Disaster Risk Reduction",
    title: "Creating Change Through Public Health Risk Management Training",
    location: "Araria, Bihar",
    date: "12 February 2025",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    category: "Disaster Management",
    title: "Strengthening Livestock Protection in Emergencies",
    location: "Bhadrak, Odisha",
    date: "23 January 2026",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a",
  },
];

const publications = [
  {
    title: "A Decade of Doing More: Evaluating Development Interventions",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },
  {
    title: "The Digital Leap: Women Connecting to Shape the Future",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const Insights = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div className="relative h-[85vh] md:h-[85vh] mt-24 md:mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[3px] md:tracking-[5px] text-cyan-300 font-semibold mb-4 md:mb-6 text-sm md:text-base">
                Insights
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                Stories, Perspectives & Publications
              </h1>

              <p className="text-gray-200 text-base md:text-xl leading-7 md:leading-9 mt-6 md:mt-8 max-w-2xl">
                Grounded in the ethos of “We Care,” Bharat Vishvaguru Foundation
                shares impactful stories, expert insights, and thought-provoking
                publications driving meaningful social development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
            Stories About Our Work
          </h2>

          <p className="text-gray-600 text-xl leading-9 mt-10">
            Discover compelling narratives and real-world impact stories from
            communities across India through our development initiatives and
            programmes.
          </p>

          <button className="mt-12 flex items-center gap-4 mx-auto text-blue-600 text-lg font-semibold hover:gap-6 duration-500">
            SEE ALL
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* STORIES */}
      <div className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {stories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl duration-500 group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-10">
                  <p className="text-blue-600 font-semibold">{item.category}</p>

                  <h3 className="text-3xl font-bold text-[#0a1b38] leading-tight mt-5">
                    {item.title}
                  </h3>

                  <div className="mt-10 flex items-center gap-4 text-gray-500 text-lg">
                    <span>{item.location}</span>
                    <span>|</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PUBLICATIONS */}
      <div className="bg-[#f4f8fc] py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div>
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
                Publications
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38]">
                Publications
              </h2>
            </div>

            <button className="flex items-center gap-4 text-blue-600 text-lg font-semibold hover:gap-6 duration-500">
              SEE ALL
              <FaArrowRight />
            </button>
          </div>

          {/* PUBLICATION CARDS */}
          <div className="grid md:grid-cols-2 gap-10">
            {publications.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl duration-500 group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[350px] w-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-10">
                  <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
                    Publication
                  </p>

                  <h3 className="text-4xl font-bold text-[#0a1b38] leading-tight mt-5">
                    {item.title}
                  </h3>

                  <button className="mt-10 flex items-center gap-4 text-blue-600 text-lg font-semibold hover:gap-6 duration-500">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
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
                We Care
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
                Creating Knowledge That Inspires Change
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                Bharat Vishvaguru Foundation believes in sharing impactful
                stories, research insights and publications that encourage
                informed decisions and social innovation.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Through our publications and narratives, we strive to amplify
                voices, inspire communities and drive sustainable development
                across India.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
                alt=""
                className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
              />
            </motion.div>
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

export default Insights;
