
import NavBar from "../Components/NavBar";
import StickyShowcaseWithTicker from "../Components/StickyShowcaseWithTicker";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div>
      <div className="h-screen">
        <NavBar />
        <div className="hero-section flex justify-center items-center max-md:flex-col-reverse mt-4 ">
          
          {/* Text Section (from left) */}
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 25, duration: 1, }}
      
            className="for-text text-center w-[40%] max-md:w-[80%] relative"
          >
            <img
              src="/assets/star.png"
              className="absolute w-[27%] -top-20 -left-17 max-md:hidden "
              alt="star"
            />
            <h1 className="flex justify-center text-[115px] text-stroke max-sm:text-center max-md:text-[47px] leading-[1.1]">
              Design that never goes out of style
            </h1>

            <button
              type="button"
              className="cursor-pointer border-4 rounded-[20px] w-[30%] border-[#ff4d4d] text-[35px] flex items-center justify-evenly ms-12 mt-3 max-md:w-[50%] max-md:ms-20 max-md:text-[30px] hover:bg-[#ECE0BA] hover:text-[#ff4d4d] transition-all duration-300"
            >
              Resume <Eye />
            </button>
          </motion.div>

          {/* Posters Section (from right) */}
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 25, duration: 1 }}
   
            className="for-posters w-[38%] flex justify-center max-md:w-[90%] max-md:mb-5"
          >
            <img src="/assets/posters.png" alt="posters" className="w-[80%]" />
          </motion.div>

        </div>
      </div>

      <StickyShowcaseWithTicker />
    </div>
  );
}
