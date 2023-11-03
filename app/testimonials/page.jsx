"use client";

import TestimonialSlider from "@/components/TestimonialSlider.jsx";
import Transition from "@/components/Transition.jsx";
import { fadeIn } from "@/variants.js";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonialPage() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div>
          <Transition />
        </motion.div>
      </AnimatePresence>
      {/* Testimonial Page */}
      <div className=" h-full bg-primary/30 py-32 text-center ">
        <div className=" container mx-auto h-full flex flex-col justify-center ">
          {/* title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" h2 mt-5 xl:mt-0 mb-5 xl:mb-0 "
          >
            what clients <span className=" text-indigo-400 ">say.</span>
          </motion.h2>
          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </>
  );
}
