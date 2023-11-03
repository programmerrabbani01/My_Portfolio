"use client";

import Transition from "@/components/Transition.jsx";
import { AnimatePresence, motion } from "framer-motion";

import ParticlesContainer from "@/components/ParticlesContainer.jsx";
import ProjectsBtn from "@/components/ProjectsBtn.jsx";
import Avatar from "@/components/Avatar.jsx";

import { fadeIn } from "@/variants.js";

export default function Home() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div>
          <Transition />
        </motion.div>
      </AnimatePresence>
      {/* Home Page Work Start */}
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
          <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto ">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Transforming Ideas <br /> Into
              <span className="text-indigo-400">Digital Reality</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos corrupti voluptates veniam architecto nemo quas
              ratione modi totam culpa illum?
            </motion.p>

            {/* btn */}
            <div className="flex justify-center xl:hidden relative ">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className=" w-[1200px] h-full absolute right-0 bottom-0 ">
          {/* bg image */}

          <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar image */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-10 lg:bottom-2 lg:right-[10%] "
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
}
