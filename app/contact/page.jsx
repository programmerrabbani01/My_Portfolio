"use client";

import Transition from "@/components/Transition.jsx";
import { AnimatePresence, motion } from "framer-motion";

// components
import Circles from "@/components/Circles.jsx";

// icons
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/variants.js";

export default function ContactPage() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div>
          <Transition />
        </motion.div>
      </AnimatePresence>
      {/*  Contact Page */}
      <div className=" h-full bg-primary/30 ">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className=" flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mt-5 xl:mt-0"
            >
              Let's <span className="text-indigo-400">connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-1 flex-col gap-6 w-full mx-auto"
            >
              {/* input group */}
              <div className="flex gap-x-1 w-full">
                <input type="text" placeholder="Name" className="input" />
                <input type="text" placeholder="Email" className="input" />
              </div>
              <input type="text" placeholder="Subject" className="input" />
              <textarea placeholder="Message" className="textarea"></textarea>
              <button className=" btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-indigo-400 group ">
                <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                  Let's Talk
                </span>
                <BsArrowRight className=" -translate-y-[120%]  group-hover:flex group-hover:-translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  " />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
}
