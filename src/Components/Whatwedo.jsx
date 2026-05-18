// import { motion } from "framer-motion";
// import {
//   FaArrowRight,
//   FaGraduationCap,
//   FaHeartbeat,
//   FaLeaf,
//   FaHandsHelping,
// } from "react-icons/fa";

// const initiatives = [
//   {
//     title: "Education",
//     icon: <FaGraduationCap />,
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     desc: "Empowering children and youth through digital learning and quality education programmes.",
//   },
//   {
//     title: "Healthcare",
//     icon: <FaHeartbeat />,
//     image:
//       "https://images.unsplash.com/photo-1584515933487-779824d29309",
//     desc: "Improving healthcare accessibility and wellness support in underserved communities.",
//   },
//   {
//     title: "Rural Transformation",
//     icon: <FaHandsHelping />,
//     image:
//       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
//     desc: "Building self-reliant villages through sustainable livelihood and development initiatives.",
//   },
//   {
//     title: "Environment",
//     icon: <FaLeaf />,
//     image:
//       "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
//     desc: "Promoting sustainability and environmental responsibility for a greener tomorrow.",
//   },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="bg-white overflow-hidden">

//       {/* HERO */}
//       <div className="relative h-[90vh]">

//         <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//           alt=""
//           className="w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/70 to-transparent"></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center">

//           <div className="max-w-7xl mx-auto px-6 w-full">

//             <motion.div
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="max-w-3xl"
//             >

//               <p className="uppercase tracking-[5px] text-cyan-300 font-semibold mb-6">
//                 Bharat Vishvguru Foundation
//               </p>

//               <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
//                 Transforming Lives Through Meaningful Action
//               </h1>

//               <p className="text-gray-200 text-xl leading-9 mt-8">
//                 We work across education, healthcare, rural development,
//                 sustainability and community empowerment to create long-term
//                 impact and opportunities for all.
//               </p>

//             </motion.div>

//           </div>

//         </div>

//       </div>

//       {/* INTRO */}
//       <div className="py-28">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid lg:grid-cols-2 gap-24 items-center">

//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >

//               <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
//                 What We Do
//               </p>

//               <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
//                 Creating Sustainable Impact Across Communities
//               </h2>

//               <p className="text-gray-600 text-lg leading-9 mt-8">
//                 Bharat Vishvguru Foundation is dedicated to building
//                 a stronger and more inclusive India through impactful
//                 programmes focused on social welfare, innovation and
//                 empowerment.
//               </p>

//               <p className="text-gray-600 text-lg leading-9 mt-6">
//                 Our initiatives aim to uplift lives by improving
//                 access to education, healthcare, livelihood support,
//                 environmental sustainability and rural transformation.
//               </p>

//               <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full flex items-center gap-4 text-lg font-semibold shadow-xl hover:scale-105 duration-500">

//                 Explore Programmes

//                 <FaArrowRight />

//               </button>

//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="relative"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
//                 alt=""
//                 className="rounded-[35px] h-[700px] w-full object-cover shadow-2xl"
//               />

//               {/* Floating Box */}
//               <div className="absolute bottom-10 left-10 bg-white p-8 rounded-[30px] shadow-2xl max-w-[280px]">

//                 <h2 className="text-5xl font-bold text-blue-600">
//                   5000+
//                 </h2>

//                 <p className="text-gray-600 mt-3 text-lg leading-8">
//                   Lives impacted through our nationwide initiatives.
//                 </p>

//               </div>

//             </motion.div>

//           </div>

//         </div>

//       </div>

//       {/* INITIATIVES */}
//       <div className="bg-[#f4f8fc] py-28">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center max-w-4xl mx-auto">

//             <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
//               Our Focus Areas
//             </p>

//             <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
//               Areas Where We Create Change
//             </h2>

//           </div>

//           {/* Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

//             {initiatives.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -15 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl duration-500 group"
//               >

//                 {/* Image */}
//                 <div className="overflow-hidden">

//                   <img
//                     src={item.image}
//                     alt=""
//                     className="h-[280px] w-full object-cover group-hover:scale-110 duration-700"
//                   />

//                 </div>

//                 {/* Content */}
//                 <div className="p-8">

//                   <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6">
//                     {item.icon}
//                   </div>

//                   <h3 className="text-3xl font-bold text-[#0a1b38] mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 leading-8 text-lg">
//                     {item.desc}
//                   </p>

//                 </div>

//               </motion.div>
//             ))}

//           </div>

//         </div>

//       </div>

//       {/* IMPACT SECTION */}
//       <div className="py-28">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid lg:grid-cols-2 gap-20 items-center">

//             {/* IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
//                 alt=""
//                 className="rounded-[35px] h-[650px] w-full object-cover shadow-2xl"
//               />

//             </motion.div>

//             {/* CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >

//               <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-5">
//                 Our Impact
//               </p>

//               <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] leading-tight">
//                 Empowering Communities Across India
//               </h2>

//               <p className="text-gray-600 text-lg leading-9 mt-8">
//                 Through collaborative efforts and impactful programmes,
//                 Bharat Vishvguru Foundation continues to create positive
//                 social transformation and improve lives at scale.
//               </p>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-10 mt-14">

//                 <div>
//                   <h1 className="text-6xl font-bold text-blue-600">
//                     120+
//                   </h1>

//                   <p className="text-gray-600 mt-3 text-lg">
//                     Villages Reached
//                   </p>
//                 </div>

//                 <div>
//                   <h1 className="text-6xl font-bold text-blue-600">
//                     50+
//                   </h1>

//                   <p className="text-gray-600 mt-3 text-lg">
//                     Health Camps
//                   </p>
//                 </div>

//                 <div>
//                   <h1 className="text-6xl font-bold text-blue-600">
//                     100+
//                   </h1>

//                   <p className="text-gray-600 mt-3 text-lg">
//                     Volunteers
//                   </p>
//                 </div>

//                 <div>
//                   <h1 className="text-6xl font-bold text-blue-600">
//                     5000+
//                   </h1>

//                   <p className="text-gray-600 mt-3 text-lg">
//                     Students Supported
//                   </p>
//                 </div>

//               </div>

//             </motion.div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default WhatWeDo;












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
      <div className="relative h-[85vh] mt-36">

        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/75 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >

              <p className="uppercase tracking-[5px] text-cyan-300 font-semibold mb-6">
                Careers
              </p>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                What We Do
              </h1>

              <p className="text-gray-200 text-xl leading-9 mt-8">
                Bharat Vishvaguru Foundation works towards building an
                inclusive and sustainable India through impactful
                programmes across multiple sectors.
              </p>

            </motion.div>

          </div>

        </div>

      </div>

      {/* INITIATIVES */}
      <div className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="space-y-28">

            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* IMAGE */}
                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>

                  <div className="overflow-hidden rounded-[35px] group">

                    <img
                      src={item.img}
                      alt=""
                      className="h-[500px] w-full object-contain group-hover:scale-110 duration-700 "
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>

                  <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38] mb-8">
                    {item.number}
                  </h2>

                  <h3 className="text-4xl md:text-5xl font-bold text-[#0a1b38] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-9 mt-8">
                    {item.desc}
                  </p>

                  <NavLink to={item.link}>
                    <button className="mt-10 flex items-center gap-4 text-blue-600 text-lg font-semibold hover:gap-6 duration-500">

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

    </section>
  );
};

export default WhatWeDo;
