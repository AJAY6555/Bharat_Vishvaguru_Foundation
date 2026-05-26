import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const initiatives = [
  {
    number: "1.",
    title: "Rural Transformation",
    desc: "Empowering some of the most marginalised communities across rural India with innovative and sustainable solutions since 2010.",
    img: "https://www.reliancefoundation.org/sites/default/files/2024-09/whatwedo_rural.jpg",
    link: "/rural",
  },
  {
    number: "2.",
    title: "Health",
    desc: "We believe that quality and affordable healthcare is crucial not only for communities but also for the economic and social well-being of India.",
    // img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    img: "https://www.reliancefoundation.org/sites/default/files/2024-01/whatwedo_health.jpg",
    link: "/health",
  },
  {
    number: "3.",
    title: "Education",
    desc: "Education is at the heart of Bharat Vishvguru Foundation’s vision for India and central to the country’s social and economic progress.",
    // img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    img: "https://www.reliancefoundation.org/sites/default/files/2025-12/RF%20school.png",
    link: "/education",
  },
  {
    number: "4.",
    title: "Sports for Development",
    desc: "At the heart of our sports initiatives, the goal is to cultivate lifelong learning, build character, and foster leadership skills among India's youth.",
    // img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    img: "https://www.reliancefoundation.org/sites/default/files/2025-04/Sports%20card%20-listing%20page_0.png",
    link: "/sports",
  },
  {
    number: "5.",
    title: "Women Empowerment",
    desc: "Empowered women mean a stronger and a better world and we are committed to empowering women to play a catalytic role in bringing change.",
    // img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    img: "https://www.reliancefoundation.org/sites/default/files/2024-01/whatwedo_women.jpg",
    link: "/woman",
  },
  {
    number: "6.",
    title: "Disaster Management",
    desc: "Bharat Vishvguru Foundation’s Disaster Management programme supports vulnerable hotspots in building safer and disaster-resilient communities.",
    // img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    img: "https://www.reliancefoundation.org/sites/default/files/2026-01/DM%20Cover%20for%20What%20we%20do%20Listing.png",
    link: "/disaster",
  },
  {
    number: "7.",
    title: "Art, Culture & Heritage",
    desc: "Bharat Vishvguru Foundation is constantly reimagining ways to protect and promote Indian Arts, Culture & Heritage.",
    // img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
    img: "https://www.reliancefoundation.org/sites/default/files/2023-10/whatwedo_art.jpg",
    link: "/arts",
  },
  {
    number: "8.",
    title: "Environment and Animal Welfare",
    desc: "Creating a better world for all beings through wildlife rescue, care and conservation initiatives across India.",
    // img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5",
    img: "https://www.reliancefoundation.org/sites/default/files/2025-08/whatwedo_vantara.jpg",
    link: "/environment",
  },
  {
    number: "9.",
    title: "Urban Renewal",
    desc: "The Urban Renewal initiatives strive to enrich and improve public spaces to improve quality of life and infrastructure in cities.",
    // img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    img: "https://www.reliancefoundation.org/sites/default/files/2023-10/whatwedo_urban.jpg",
    link: "/urban",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div className="relative h-[70vh] md:h-[85vh] mt-24 md:mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[3px] md:tracking-[5px] text-cyan-300 font-semibold mb-4 md:mb-6 text-sm md:text-base">
                Careers
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                What We Do
              </h1>

              <p className="text-gray-200 text-base md:text-xl leading-7 md:leading-9 mt-6 md:mt-8 max-w-2xl">
                Bharat Vishvaguru Foundation works towards building an inclusive
                and sustainable India through impactful programmes across
                multiple sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* INITIATIVES */}
      <div className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="space-y-16 md:space-y-28">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-[25px] md:rounded-[35px] group">
                    <img
                      src={item.img}
                      alt=""
                      className="h-[300px] md:h-[500px] w-full object-cover md:object-contain group-hover:scale-110 duration-700 "
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <h2 className="text-4xl md:text-6xl font-bold text-[#0a1b38] mb-4 md:mb-8">
                    {item.number}
                  </h2>

                  <h3 className="text-3xl md:text-5xl font-bold text-[#0a1b38] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-7 md:leading-9 mt-6 md:mt-8">
                    {item.desc}
                  </p>

                  <NavLink to={item.link}>
                    <button className="mt-8 md:mt-10 flex items-center gap-4 text-blue-600 text-base md:text-lg font-semibold hover:gap-6 duration-500">
                      Learn More
                      <FaArrowRight />
                    </button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}

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
    </section>
  );
};

export default WhatWeDo;
