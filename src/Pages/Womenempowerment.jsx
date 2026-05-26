import React from "react";
import { motion } from "framer-motion";

function Womenempowerment() {
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
        className="w-[95%] lg:w-[80%] h-[300px] sm:h-[400px] lg:h-[500px] mt-36 lg:mt-36 m-auto rounded-3xl relative flex justify-center overflow-hidden"
      >
        <img
          src="https://www.reliancefoundation.org/sites/default/files/2026-01/Women%20empowerment%20Cover.png"
          alt="rural"
          className="w-full h-full rounded-3xl object-cover"
        />

        <div className="w-[90%] lg:w-[83%] absolute bottom-6 lg:bottom-10 z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 ">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-green-400 flex items-center justify-center "
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/women-icon.png"
              alt="logo"
              className="w-full h-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl lg:text-7xl text-white font-serif font-bold leading-tight"
          >
            Women Empowerment
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent"></div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[95%] lg:w-[80%] m-auto min-h-20 bg-[#C0EDD0] flex flex-col sm:flex-row "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-52 bg-white text-[#1a365d] font-medium flex items-center justify-center text-lg lg:text-2xl py-5"
        >
          Overview
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-[40%] text-[#1a365d] font-medium flex items-center justify-center text-center text-lg lg:text-2xl p-5"
        >
          Women Empowerment Initiatives
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[95%] lg:w-[80%] bg-white m-auto flex flex-col lg:flex-row gap-10 p-4 sm:p-6 lg:p-10 rounded-2xl rounded-t-none"
      >
        <div className="w-full lg:w-[35%] relative">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full h-60 rounded-2xl overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              // src="https://www.youtube.com/embed/p7qD_YVdxXw"
              src="https://www.youtube.com/embed/YU69ubmBXss"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="w-full bg-[#C0EDD0] mt-11 rounded-3xl p-5"
          >
            <div className="text-2xl lg:text-4xl font-serif text-[#003C3C]">
              Impact at a Glance
            </div>

            <div className="mt-7 flex gap-2">
              <img
                src="logo.png"
                alt="icon"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />

              <p className=" font-sans text-left text-base lg:text-xl text-[#003C3C] font-medium">
                Over 2.22 crore (22.2 million) people reached cumulatively
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              <img
                src="logo.png"
                alt="icon"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />

              <p className="text-base lg:text-xl font-sans text-left text-[#003C3C] font-medium">
                42,500+ hectares of farmland brought under improved farming
                practices in 2024-25*
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              <img
                src="logo.png"
                alt="icon"
                className="w-8 h-8 lg:w-10 lg:h-10"
              />

              <p className="text-base lg:text-xl font-sans text-left text-[#003C3C] font-medium ">
                Water harvesting capacity enhanced by nearly 167 lakh cubic
                metres through various community-based approaches in 2024-25*
              </p>
            </div>

            <p className="text-right mt-4 text-sm lg:text-lg text-[#003C3C]">
              (*As of March 31, 2025)
            </p>
          </motion.div>

          <div className="text-2xl lg:text-3xl font-serif text-[#003C3C] mt-14">
            What’s New
          </div>

          <div className="w-full bg-orange-200 rounded-2xl mt-5 flex flex-col sm:flex-row overflow-hidden lg:sticky lg:top-28">
            <div className="w-full sm:w-[60%] h-52 sm:h-72">
              <img
                src="https://www.reliancefoundation.org/sites/default/files/2024-12/promo_unit.jpg"
                alt="img"
                className="w-full h-full rounded-2xl rounded-r-none object-cover"
              />
            </div>
            <div className="w-full sm:w-[40%] p-5 text-lg lg:text-2xl flex justify-center items-center text-center">
              Bharat Vishavguru Foundation Millets Conferences
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[61%]">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003C3C] leading-tight">
            Empowering rural <br></br> communities with sustainable solutions
          </div>

          <p className="text-base lg:text-xl font-sans text-justify mt-10 text-[#003C3C] font-medium">
            Reliance Foundation's Rural Transformation programme aims to uplift
            rural communities by enhancing livelihoods, fostering sustainable
            agriculture, empowering women, and building resilient community
            structures for water, nutrition, and livelihood security.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The Rural Transformation programme focuses on strengthening rural
            communities through both physical and digital approaches. It works
            across the block as a key unit of transformation, ensuring
            localised, scalable solutions. Reliance Foundation works closely
            with communities to co-develop action plans to ensure a targeted and
            impactful approach, fostering resilience and self-reliance at every
            level.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation’s Rural Transformation initiatives are
            structured around two core pillars: Self-Reliance and Resilience,
            ensuring a thriving rural India aligned with the vision of Viksit
            Bharat (Developed India) by 2047.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The Rural Transformation programme began during the inception of
            Reliance Foundation in 2010. Built with a strong participatory
            approach, today, it has grown to reach millions of communities
            across the deepest and remotest geographies of India, building
            strong partnerships with non-profit, community and technical
            organisation shaping models to guide rural and national development.
          </p>

          <div className="text-2xl lg:text-4xl mt-7 text-[#003C3C]">
            Key focus areas
          </div>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            The programme is implemented through two key focus areas — Reliance
            Foundation Bharat India Jodo (RF BIJ) and Rural Transformation
            Information Services (RTIS) — are central to this effort. RF BIJ,
            initiated in 2010, empowers communities to take collective action
            towards sustainable livelihoods through multiple pillars. It focuses
            on building self-reliance by enabling communities to access
            resources and technologies that support their long-term
            sustainability.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            RTIS, by leveraging digital platforms, reaches rural communities
            across India with critical information and support on farming,
            fishing, livestock rearing, and more. This phygital approach
            integrates digital tools to support real-time decision-making while
            maintaining essential physical outreach for community engagement and
            support.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation engages with communities through peer and
            partner organisations and collaborates with the government to
            leverage synergies. The partnership-driven approach with various
            stakeholders, including government bodies, non-profits, and
            entrepreneurs, is pivotal in driving sustainable, community-led
            development.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Sustainable and meaningful change is strongest when it comes from
            within the community. Reliance Foundation is developing a grassroots
            leadership cadre, so rural communities move beyond receiving support
            to actively shaping their own progress.
          </p>

          <div className="text-2xl lg:text-4xl mt-7 text-[#003C3C]">
            Broadly, the Rural Transformation programme works towards its vision
            by:
          </div>

          <div className="mt-7 flex gap-2">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#003C3C] font-medium">
              Collaborating with rural communities to ensure that interventions
              are tailored to local needs.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10"
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#003C3C] font-medium">
              Promoting sustainable natural resource management, ensuring
              long-term environmental sustainability.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#003C3C] font-medium">
              Empowering communities with vital information to strengthen and
              safeguard livelihoods, leveraging both physical and digital tools.
            </p>
          </div>

          <div className="mt-7 flex gap-2">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#003C3C] font-medium">
              Enabling pathways to collectivisation, access to finance, markets,
              and social safety nets, creating robust support systems for rural
              communities.
            </p>
          </div>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation’s work extends beyond individual households and
            village communities, addressing challenges at the block and district
            levels. The focus on blocks ensures that development efforts are
            deep-rooted and impactful, strengthening local governance, community
            institutions, and resilience systems.
          </p>

          <p className="text-base lg:text-xl font-sans text-justify mt-7 text-[#003C3C] font-medium">
            Reliance Foundation's Rural Transformation programme empowers
            communities towards self-reliance and resilience through targeted,
            sustainable solutions delivered via its key pillars - RF BIJ and
            RTIS. This commitment to localised action and robust support
            networks fosters lasting progress and contributes to a vision of
            transforming rural India.
          </p>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Securing Livelihoods by Improving Climate Resilience
            </p>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1">
              Enhancing Farming Incomes
            </p>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Empowering Women in Rural Communities
            </p>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1">
              Improved nutrition for rural communities
            </p>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Community Capacity Enhancement
            </p>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <img
              src="logo.png"
              alt="icon"
              className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 "
            />

            <p className="text-base lg:text-xl font-sans text-justify text-[#007a4d] font-medium underline mt-1 ">
              Technology for Rural Development
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-14 w-[95%] lg:w-[80%] m-auto text-3xl sm:text-5xl lg:text-6xl font-serif text-[#003C3C]"
      >
        Latest on Women Empowerment
      </motion.div>

      <div className="w-[95%] lg:w-[80%] m-auto mt-10 flex flex-col lg:flex-row gap-7">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            y: -15,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-[32%] bg-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-[250px] ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-05/She%20Connects%20listing.png"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none object-cover"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
              MEDIA RELEASE
            </div>
            <div className="mt-2 text-xl lg:text-2xl font-serif text-[#003C3C]">
              SheConnects Digital Accelerator to Advance Women’s Digital
              Inclus...
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
          className="w-full lg:w-[32%] bg-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-[250px]">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-04/Digital-leap-696X460-PX-adapt-2-RF.jpg.jpeg"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none object-cover"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
              PUBLICATION
            </div>
            <div className="mt-2 text-xl lg:text-2xl font-serif text-[#003C3C]">
              The Digital Leap: Women Connecting to Shape the Future
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
          className="w-full lg:w-[32%] bg-white rounded-3xl overflow-hidden"
        >
          <div className="w-full h-[250px] ">
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2026-04/e-SafeHer%20650X390.png"
              alt="media img"
              className="w-full h-full rounded-3xl rounded-b-none object-cover"
            />
          </div>
          <div className="p-5">
            <div className="text-lg font-semibold text-[#03C978]">
              MEDIA RELEASE
            </div>
            <div className="mt-2 text-xl lg:text-2xl font-serif text-[#003C3C]">
              Reliance Foundation and C-DAC under Ministry of Electronics and
              I...
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 w-[95%] lg:w-[80%] m-auto text-3xl sm:text-5xl lg:text-6xl font-serif text-[#003C3C]">
        Women Empowerment Initiatives
      </div>

      <div className="w-[95%] lg:w-[80%] m-auto mt-10 flex flex-col lg:flex-row justify-between gap-10">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2026-01/Cover%20for%20women_entrepreneurship.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">
              Women Entrepreneurship
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full ">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon7.png"
              alt="live"
              className="w-[80%] h-[80%] object-contain"
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
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_thumb6.jpg"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">
              Women and Girls in Sports
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon6.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-[95%] lg:w-[80%] m-auto mt-10 flex flex-col lg:flex-row justify-between gap-10">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_thumb5.jpg"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">
              Girls’ Education
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon5.png"
              alt="live"
              className="w-[80%] h-[80%] object-contain"
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
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_thumb4.jpg"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">
              Women’s Health
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon4.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-[95%] lg:w-[80%] m-auto mt-10 flex flex-col lg:flex-row justify-between gap-10">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_thumb3.jpg"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">Her Circle</div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon3.png"
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
          className="w-full lg:w-[49%] bg-white rounded-3xl p-5 lg:p-9 relative cursor-pointer overflow-hidden"
        >
          <div className="w-full h-[250px] lg:h-[50%] rounded-3xl overflow-hidden ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src="https://www.reliancefoundation.org/sites/default/files/2026-01/women_digital_cover.png"
              alt="liveimg"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="w-full mt-16 lg:mt-24">
            <div className="text-2xl lg:text-3xl font-serif">
              Digital Empowerment for women
            </div>

            <button className="w-36 font-medium mt-16 h-12 bg-orange-200 rounded-full">
              LEARN MORE
            </button>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 flex items-center justify-center bg-[#C0EDD0] absolute top-56 left-40 lg:left-60 rounded-full"
          >
            <img
              src="https://www.reliancefoundation.org/sites/default/files/2024-01/womene_icon2.png"
              alt="live"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.01 }}
        className="w-[95%] lg:w-[80%] m-auto bg-[#C0EDD0] mt-12 rounded-3xl text-center py-12 px-5"
      >
        <div className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#003C3C]">
          Sign up for our latest updates
        </div>

        <p className="mt-10 text-lg lg:text-2xl text-[#003C3C]">
          Get our email updates on the projects accelerating the development to
          <br className="hidden lg:block" />
          an inclusive sustainable India
        </p>

        <input
          type="text"
          className="w-full sm:w-[500px] mt-10 border-b-2 bg-[#C0EDD0] text-lg lg:text-xl font-serif border-[#003C3C] pb-3 text-gray-500 outline-none"
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

export default Womenempowerment;
