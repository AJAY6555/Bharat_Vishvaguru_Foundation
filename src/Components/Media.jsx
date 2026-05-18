import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaPlay , FaTimes } from "react-icons/fa";

const releases = [
  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/Untitled%20%281%29.png",
    title:
      "Bharat Vishvaguru Foundation and ORF unveil study of decade-long impact across villages.",
    location: "New Delhi",
    date: "12 May 2026",
  },

  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/She%20Connects%20listing.png",
    title:
      "SheConnects Digital Accelerator to Advance Women’s Digital Inclusion in India.",
    location: "Mumbai",
    date: "12 May 2026",
  },

  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-04/e-SafeHer%20650X390.png",
    title:
      "BVF and C-DAC launch nationwide cyber security awareness initiative.",
    location: "New Delhi",
    date: "12 April 2026",
  },
];

const events = [
  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/Untitled%20%281%29.png",
    date: "Feb 07 2026",
    title:
      "Building Flourishing Futures: From Early Childhood to Primary Education",
  },

  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/Untitled%20%281%29.png",
    date: "Sep 24 2025",
    title:
      "India Day @ UNGA: India’s leadership on SDGs and AI-driven development",
  },
];

const videos = [
  {
    category: "Education",
    title:
      "360˚ VR Film | A Day In Smart Learning Lab | Bharat Vishvaguru Foundation",
    location: "Mumbai",
    date: "25 Jan 2026",
    image: "https://www.reliancefoundation.org/sites/default/files/2026-02/1.png",
     youtube: "https://www.youtube.com/embed/CrrxTE65xPU?autoplay=1",
  },

  {
    category: "Sports For Development",
    title: "360˚ VR | Divya's Football Journey | Bharat Vishvaguru Foundation",
    location: "Madhya Pradesh",
    date: "21 Dec 2025",
    image: "https://www.reliancefoundation.org/sites/default/files/2026-02/2_0.png",
     youtube: "https://www.youtube.com/embed/_FE6DmFueYg?autoplay=1",
  },

  {
    category: "Rural Transformation",
    title: "Meri Kahaani | 360˚ VR 4K | Strength and Resilience of Rural Women",
    location: "Mumbai",
    date: "20 Dec 2025",
    image: "https://www.reliancefoundation.org/sites/default/files/2024-12/video_thumb3.jpg",
     youtube: "https://www.youtube.com/embed/4cznLr53jB0?autoplay=1",
  },
];


const updates = [
  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/Untitled%20%281%29.png",
    title:
      "The Bharat Vishvaguru Foundation Scholarships 2025-26 results are out!",
  },

  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-05/She%20Connects%20listing.png",
    title:
       "Swayamshree programme empowers women across India towards entrepreneurship.",  
  },

  {
    image: "https://www.reliancefoundation.org/sites/default/files/2026-04/e-SafeHer%20650X390.png",
    title:
      "2025: a landmark year of empowering communities through sustainable development.",  
  },
];




const Media = () => {

   const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <div className="relative h-[90vh] mt-36">
        <img
          src="What_we_do_Cover.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142d]/95 via-[#00142d]/70 to-transparent"></div>

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
                Media
              </p>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                Stories, Videos & Media Updates
              </h1>

              <p className="text-gray-200 text-xl leading-9 mt-8">
                Explore inspiring stories, publications, events, media releases
                and immersive videos from Bharat Vishvaguru Foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MEDIA RELEASES */}
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-20">
            <div>
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-4">
                Media Releases
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38]">
                Media Releases
              </h2>
            </div>

            <button className="flex items-center gap-4 text-blue-600 font-semibold text-lg hover:gap-6 duration-500">
              SEE ALL
              <FaArrowRight />
            </button>
          </div>
    
    

          <div className="grid lg:grid-cols-3 gap-10">
            {releases.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f4f8fc] rounded-3xl hover:shadow-2xl duration-500 h-[450px] cursor-pointer "
              >
                <div className="h-56">
                  <img
                    className="h-full rounded-3xl rounded-b-none"
                    src={item.image}
                    alt="image"
                  />

                  
                </div>

                <div className="p-3">
                  <h3 className="text-2xl font-serif text-[#0a1b38] leading-tight mt-6">
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

      {/* EVENTS */}
      <div className="bg-[#f4f8fc] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-20">
            <div>
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-4">
                Events
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38]">
                Events
              </h2>
            </div>

            <button className="flex items-center gap-4 text-blue-600 font-semibold text-lg hover:gap-6 duration-500">
              SEE ALL
              <FaArrowRight />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {events.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[35px] shadow-lg hover:shadow-2xl duration-500 cursor-pointer"
              >

              <div className="w-full h-96">
                 <img
                    className="h-full rounded-3xl rounded-b-none"
                    src={item.image}
                    alt="image"
                  />

              </div>
                

              <div>
               <h3 className="text-4xl font-serif text-[#0a1b38] p-5 leading-tight mt-6">
                  {item.title}
                </h3>

                <p className=" text-xl font-bold text-[#03C978] p-5 ">{item.date}</p>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-20">
            <div>
              <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-4">
                Videos
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0a1b38]">
                Videos
              </h2>
            </div>

            <button className="flex items-center gap-4 text-blue-600 font-semibold text-lg hover:gap-6 duration-500">
              SEE ALL
              <FaArrowRight />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {videos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl duration-500 group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[320px] w-full object-cover group-hover:scale-110 duration-700 brightness-[0.92]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    {/* <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center">
                      <FaPlay className="text-white text-3xl ml-1" />
                    </div> */}

                     {/* PLAY BUTTON */}
                    <button
                      onClick={() => setActiveVideo(item.youtube)}
                      className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center hover:scale-110 duration-500"
                    >

                      <FaPlay className="text-white text-3xl ml-1" />

                    </button>
                  </div>
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


      {/* VIDEO MODAL */}
      {activeVideo && (

        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 duration-500"
          >

            <FaTimes />

          </button>
     
           {/* VIDEO */}
          <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              width="100%"
              height="100%"
              src={activeVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>

          </div>

        </div>

      )}



       {/* <div className="grid lg:grid-cols-3 gap-10"> */}
       <div className="flex  m-auto gap-5 justify-center">
            {updates.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f4f8fc] rounded-3xl hover:shadow-2xl duration-500 h-[400px] w-[400px] cursor-pointer "
              >
                <div className="h-56">
                  <img
                    className="h-full rounded-3xl rounded-b-none"
                    src={item.image}
                    alt="image"
                  />

                  
                </div>

                <div className="p-3">
                  <h3 className="text-2xl font-serif text-[#0a1b38] leading-tight mt-6">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
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

export default Media;
