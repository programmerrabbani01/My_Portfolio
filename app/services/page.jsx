"use client";

import Transition from "@/components/Transition.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/variants.js";

// components

import ServiceSlider from "@/components/ServiceSlider.jsx";
import Bulb from "@/components/Bulb.jsx";
import Circles from "@/components/Circles.jsx";

export default function ServicePage() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div>
          <Transition />
        </motion.div>
      </AnimatePresence>
      {/*   Service Page */}
      <div className=" h-full bg-primary/30 py-36 flex items-center ">
        <Circles />
        <div className="container mx-auto">
          <div className=" flex flex-col xl:flex-row gap-x-8 ">
            {/* text */}
            <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                My Services <span className="text-indigo-400">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" mb-4 max-w-[400px] mx-auto lg:mx-0 "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Soluta, impedit. Vel, sit? Voluptas quos voluptate sit facere
                tempore ipsam nemo?
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" w-full xl:max-w-[65%] "
            >
              {/* slider */}
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
}
