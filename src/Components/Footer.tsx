
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-[url('/assets/PaperTexture.png')] bg-cover bg-center bg-no-repeat bg-[#677F75] w-[80%] mx-auto rounded-[20px] mt-10 mb-10 flex-col justify-center items-center  border-4 overflow-hidden"
    >
      <div className="main flex justify-center items-center max-md:flex-col pt-7">

        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[45px] text-center max-md:text-[25px]"
        >
         <a href="https://www.linkedin.com/in/abdelrahman-sameh-" target="_blank" title="I SEE YOU 👀" rel="noopener noreferrer"><h4 className="text-stroke hover:text-[#ff4d4d] transition-colors duration-[150ms] ease-in-out">LinkedIn</h4> </a>

         <a href="https://www.instagram.com/abdelrahman_sameh_?utm_source=qr&igsh=cGE3ZGV3MjNyN3R0" target="_blank" title="I SEE YOU 👀" rel="noopener noreferrer"><h4 className="text-stroke hover:text-[#ff4d4d] transition-colors duration-[150ms] ease-in-out">Instagram</h4> </a>

        </motion.div>


        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="/assets/marlin.png"
            alt="marlin"
            className="w-[70%] text-center max-md:w-[40%]"
          />
        </motion.div>


        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[45px] text-center max-md:text-[25px]"
        >
         <a href="https://github.com/Abdelrahmaannn" target="_blank" title="I SEE YOU 👀" rel="noopener noreferrer"><h4 className="text-stroke hover:text-[#ff4d4d] transition-colors duration-[150ms] ease-in-out">Github</h4> </a>

         <a href="https://www.behance.net/abdelrasameh13" target="_blank" title="I SEE YOU 👀" rel="noopener noreferrer"><h4 className="text-stroke hover:text-[#ff4d4d] transition-colors duration-[150ms] ease-in-out">Behance</h4> </a>

        </motion.div>
      </div>


      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8,  ease: "easeOut" }}
        className="flex-col justify-center items-center text-center"
      >
<button
  type="button"
  onClick={() => window.location.href = "mailto:abdelrahmansameh2299@gmail.com"}
  className="cursor-pointer border-4 rounded-[20px] w-[15%] border-[#ff4d4d] text-[30px] ms-12 max-md:w-[40%] max-md:mt-3 max-md:ms-0 max-md:text-[23px] hover:bg-[#ECE0BA] hover:text-[#ff4d4d] transition-all duration-300"
>
  Contact Me
</button>


<div className="flex justify-center items-center">

  <img src="/public/assets/leftTree.png" className="w-[20%] max-md:hidden"  />
        <h4 className="mt-5 text-[25px] max-md:text-[15px] max-md:mt-3 ">
          © aBDELRAHMAN sAMEH. All rights reserved
        </h4>
          <img src="/public/assets/RightTree.png"  className="w-[20%] max-md:hidden"  />

        </div>
      </motion.div>
    </footer>
  );
}
