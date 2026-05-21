import React from "react";
import { motion } from "framer-motion";


function Disaster() {

   const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <>
      <motion.div
       variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className=" w-[80%] h-[500px] mt-36 m-auto rounded-3xl relative flex justify-center">
        <img
          src="https://www.reliancefoundation.org/sites/default/files/2026-01/_33A66681.jpg"
          alt="rural"
          className="w-full h-full rounded-3xl"
        />

        <div className="w-[83%] h-36 absolute bottom-10  z-10 flex items-center ">
          <motion.div 
           animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }} 
          className="w-32 h-32 rounded-full bg-green-400 ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-03/disaster-icon.png"
              alt="logo"
              className="w-full h-full "
            />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          className="text-7xl ml-5 text-white font-serif font-bold">
            Disaster Management
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent"></div>
      </motion.div>

      <motion.div 
       variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className="w-[80%] m-auto  h-20 bg-[#C0EDD0] flex pl-16 ">
        <motion.div 
         whileHover={{ scale: 1.05 }}
        className="w-52 bg-white text-[#1a365d] font-medium flex items-center justify-center text-2xl">
          Overview
        </motion.div>
        <motion.div 
         whileHover={{ scale: 1.05 }}
        className="w-[40%]  text-[#1a365d] font-medium flex items-center ml-10 text-2xl">
        Disaster Management Initiatives
        </motion.div>
      </motion.div>


      <motion.div 
       variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className="w-[80%] h-[2830px] bg-white m-auto flex gap-10 p-10 rounded-2xl rounded-t-none">
        <div className="w-[35%] h-full relative">
          <motion.div 
          whileHover={{ scale: 1.03 }}
          className="w-full h-60 rounded-2xl  overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bNpzm2K-WFA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div 
           variants={fadeUp}
            whileHover={{ y: -8 }}
          className="w-full h-[500px] bg-[#C0EDD0] mt-11 rounded-3xl p-5">
            <div className="text-4xl font-serif text-[#003C3C]">
              Impact at a Glance
            </div>

            <div className="mt-7 flex gap-2">
              <img src="logo.png" alt="icon" className="w-10 h-10 " />

              <p className=" font-sans text-left text-xl text-[#003C3C] font-medium">
                Over 2.22 crore (22.2 million) people reached cumulatively
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              <img src="logo.png" alt="icon" className="w-10 h-10 " />

              <p className="text-xl font-sans text-left text-[#003C3C] font-medium">
                42,500+ hectares of farmland brought under improved farming
                practices in 2024-25*
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              <img src="logo.png" alt="icon" className="w-10 h-10 " />

              <p className="text-xl font-sans text-left text-[#003C3C] font-medium ">
                Water harvesting capacity enhanced by nearly 167 lakh cubic
                metres through various community-based approaches in 2024-25*
              </p>
            </div>

            <p className="text-right mt-4 text-lg text-[#003C3C]">
              (*As of March 31, 2025)
            </p>
          </motion.div>

          <div className="text-3xl font-serif text-[#003C3C] mt-14">
            What’s New
          </div>

          <div className="w-full h-72 bg-orange-200 rounded-2xl mt-5 flex sticky top-28">
            <div className="w-[60%] h-full ">
              <img
                src="https://www.reliancefoundation.org/sites/default/files/2024-12/promo_unit.jpg"
                alt="img"
                className="w-full h-full rounded-2xl rounded-r-none"
              />
            </div>
            <div className="w-[40%] h-full text-2xl flex justify-center items-center pl-4">
              Bharat Vishavguru Foundation Millets Conferences
            </div>
          </div>
        </div>

        <div className="w-[61%] h-full ">
          <div className="text-5xl font-semibold text-[#003C3C]">
            Empowering rural <br></br> communities with sustainable solutions
          </div>

          <p className="text-xl font-sans text-justify mt-10 text-[#003C3C] font-medium">
            Reliance Foundation's Rural Transformation programme aims to uplift
            rural communities by enhancing livelihoods, fostering sustainable
            agriculture, empowering women, and building resilient community
            structures for water, nutrition, and livelihood security.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The Rural Transformation programme focuses on strengthening rural
            communities through both physical and digital approaches. It works
            across the block as a key unit of transformation, ensuring
            localised, scalable solutions. Reliance Foundation works closely
            with communities to co-develop action plans to ensure a targeted and
            impactful approach, fostering resilience and self-reliance at every
            level.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation’s Rural Transformation initiatives are
            structured around two core pillars: Self-Reliance and Resilience,
            ensuring a thriving rural India aligned with the vision of Viksit
            Bharat (Developed India) by 2047.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The Rural Transformation programme began during the inception of
            Reliance Foundation in 2010. Built with a strong participatory
            approach, today, it has grown to reach millions of communities
            across the deepest and remotest geographies of India, building
            strong partnerships with non-profit, community and technical
            organisation shaping models to guide rural and national development.
          </p>

          <div className="text-4xl mt-7 text-[#003C3C]">Key focus areas</div>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The programme is implemented through two key focus areas — Reliance
            Foundation Bharat India Jodo (RF BIJ) and Rural Transformation
            Information Services (RTIS) — are central to this effort. RF BIJ,
            initiated in 2010, empowers communities to take collective action
            towards sustainable livelihoods through multiple pillars. It focuses
            on building self-reliance by enabling communities to access
            resources and technologies that support their long-term
            sustainability.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            RTIS, by leveraging digital platforms, reaches rural communities
            across India with critical information and support on farming,
            fishing, livestock rearing, and more. This phygital approach
            integrates digital tools to support real-time decision-making while
            maintaining essential physical outreach for community engagement and
            support.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation engages with communities through peer and
            partner organisations and collaborates with the government to
            leverage synergies. The partnership-driven approach with various
            stakeholders, including government bodies, non-profits, and
            entrepreneurs, is pivotal in driving sustainable, community-led
            development.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Sustainable and meaningful change is strongest when it comes from
            within the community. Reliance Foundation is developing a grassroots
            leadership cadre, so rural communities move beyond receiving support
            to actively shaping their own progress.
          </p>

          <div className="text-4xl mt-7 text-[#003C3C]">
            Broadly, the Rural Transformation programme works towards its vision
            by:
          </div>

          <div className="mt-7 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#003C3C] font-medium">
              Collaborating with rural communities to ensure that interventions
              are tailored to local needs.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#003C3C] font-medium">
              Promoting sustainable natural resource management, ensuring
              long-term environmental sustainability.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#003C3C] font-medium">
              Empowering communities with vital information to strengthen and
              safeguard livelihoods, leveraging both physical and digital tools.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#003C3C] font-medium">
              Enabling pathways to collectivisation, access to finance, markets,
              and social safety nets, creating robust support systems for rural
              communities.
            </p>
          </div>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation’s work extends beyond individual households and
            village communities, addressing challenges at the block and district
            levels. The focus on blocks ensures that development efforts are
            deep-rooted and impactful, strengthening local governance, community
            institutions, and resilience systems.
          </p>

          <p className="text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation's Rural Transformation programme empowers
            communities towards self-reliance and resilience through targeted,
            sustainable solutions delivered via its key pillars - RF BIJ and
            RTIS. This commitment to localised action and robust support
            networks fosters lasting progress and contributes to a vision of
            transforming rural India.
          </p>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Securing Livelihoods by Improving Climate Resilience
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Enhancing Farming Incomes
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Empowering Women in Rural Communities
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Improved nutrition for rural communities
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Community Capacity Enhancement
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <img src="logo.png" alt="icon" className="w-10 h-10 " />

            <p className="text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Technology for Rural Development
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
       variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      className="mt-14 ml-40 text-6xl font-serif text-[#003C3C]">
        Latest on Disaster Management
      </motion.div>

      <div className="w-[80%] h-[400px] m-auto mt-10 flex gap-7">
        <motion.div 
         variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -15,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
        className="w-[32%] h-full bg-white rounded-3xl hover:-translate-y-2">
          <div className="w-full h-[60%] ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-05/Beyond%20the%20Call%20of%20Duty%20-%20listing.png"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
              PUBLICATION
            </div>
            <div className="mt-2 text-2xl font-serif text-[#003C3C]">
             Beyond the Call of Duty: How People of Reliance Step Up During Di...
            </div>
          </div>
        </motion.div>

        <motion.div 
         variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -15,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
        className="w-[32%] h-full bg-white rounded-3xl hover:-translate-y-2">
          <div className="w-full h-[60%] ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-02/binapani%20listing%20_0.png"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
             STORIES ABOUT OUR WORK
            </div>
            <div className="mt-2 text-2xl font-serif text-[#003C3C]">
             A Community Leader Advancing Nature-Based Solutions
            </div>
          </div>
        </motion.div>

        <motion.div 
         variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -15,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
        className="w-[32%] h-full bg-white rounded-3xl hover:-translate-y-2">
          <div className="w-full h-[60%] ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-02/bihar_listing.png"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
              STORIES ABOUT OUR WORK
            </div>
            <div className="mt-2 text-2xl font-serif text-[#003C3C]">
              Creating Change Through Public Health Risk Management Training

            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 ml-40 text-6xl font-serif text-[#003C3C]">
       Disaster Management Initiatives

      </div>

      <div className="w-[80%] h-[550px] m-auto mt-10 flex justify-between">
        <motion.div 
        variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
        className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <motion.img
            whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2025-12/DRR%20listing.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">
              Disaster Risk Reduction
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full ">
              LEARN MORE
            </button>
          </div>

          <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-03/cdvedr_icon.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
        variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
        className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <motion.img
            whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2026-01/Disaster%20preparedness_listing.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">Disaster Preparedness</div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-03/dprr-icon.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-[80%] h-[550px] m-auto mt-10 flex justify-between">
        <motion.div 
        variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
        className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <motion.img
            whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2026-01/Disaster%20management_new%20.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">
             Disaster Response
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>
 
          <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-03/Disaster-Response-icon.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>
 
        {/* <div className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2023-11/education_thumb2.jpg"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">
              Foundational Literacy and Numeracy
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <div className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2023-11/edu_icon2.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </div> 
        </div> */}
      </div> 

      {/* <div className="w-[80%] h-[550px] m-auto mt-10 flex justify-between">
        <div className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2025-12/NMAJS%20listing.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">
             Nita Mukesh Ambani Junior School
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <div className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2023-11/edu_icon3.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        </div>

        <div className="w-[49%] h-full bg-white rounded-3xl p-9 relative cursor-pointer">
          <div className="w-full h-[50%] bg-gray-500 rounded-3xl ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2025-12/DIAS%20listing.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full h-[30%] mt-24">
            <div className="text-3xl font-serif">
              Dhirubhai Ambani International School
            </div>

            <button className="w-36 font-medium mt-5 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <div className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-56 rounded-full">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/edu_icon3_0.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        </div> */}
      {/* </div> */}

      <motion.div 
      variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.01 }}
      className="w-[80%] m-auto h-[450px]  bg-[#C0EDD0] mt-12 rounded-3xl text-center">
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
      </motion.div>
    </>
  );
}

export default Disaster;






