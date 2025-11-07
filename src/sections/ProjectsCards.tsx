import React from "react";
import { motion } from "framer-motion";

export default function ProjectsCards() {
  return (
    <>
      <div className="mt-10 mb-5 pt-10 max-md:mt-0 max-md:pt-8 overflow-hidden">
        <motion.div
          className="flex justify-evenly max-md:flex-col max-md:justify-center items-center"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a
            href="https://www.behance.net/gallery/212070071/Tamema-Classified-Website-UXUI-Design"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/1.png"
              className=" transition-transform duration-500 hover:scale-110"
              alt="Tamema Project"
            />
          </a>

          <a
            href="https://www.behance.net/gallery/219935513/App-UI-Tamema"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/2.png"
              className=" transition-transform duration-500 hover:scale-110"
              alt="Tamema Mobile App Project"
            />
          </a>

          <a
            href="https://www.behance.net/gallery/215409141/Adult-Literacy-Website-UIUX-Case-Study"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/3.png"
              className="transition-transform duration-500 hover:scale-110"
              alt="Read Begin Project"
            />
          </a>
        </motion.div>

        {/* ******************************************************************** */}

        <motion.div
          className="flex justify-evenly max-md:flex-col max-md:justify-center items-center mt-10"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a
            href="https://www.behance.net/gallery/215404743/Shogun-Mobile-App-Case-Study"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/4.png"
              className="transition-transform duration-500 hover:scale-110"
              alt="Shougun Project"
            />
          </a>

          <a
            href="https://areeb-event-booking-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/5.png"
              className="transition-transform duration-500 hover:scale-110"
              alt="Tamema Mobile App Project"
            />
          </a>

          <a
            href="https://www.behance.net/gallery/215407895/Redline-Marketing-Agency-UIUX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[25%] max-md:w-[60%]"
            title="I SEE YOU 👀"
          >
            <img
              src="/public/assets/Projects-Cards/6.png"
              className="transition-transform duration-500 hover:scale-110"
              alt="Read Begin Project"
            />
          </a>
        </motion.div>
      </div>
    </>
  );
}
