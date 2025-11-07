import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BottomTicker from "./BottomTicker";
import YellowCard from "./YellowCard";

export default function StickyShowcaseWithTicker() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "0px 0px -20% 0px" });

  return (
    <div className="relative min-h-[180vh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-14"
      />

      <header className="px-6 pt-16 pb-12 w-full">
        <h1 className="flex justify-center text-[80px] text-stroke max-lg:text-center max-md:text-[45px]">
          BEHIND THE CURTAINS: MEET Abdelrahman
        </h1>
      </header>

      <section
        ref={sectionRef}
        className="relative mx-auto max-w-5xl px-6 flex flex-col items-center"
      >
        <div className="w-full flex justify-center max-lg:w-[65%]">
          <div className="sticky top-1/2 -translate-y-1/5 z-10 max-lg:-translate-y-2/5 max-md:-translate-y-4/7">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1.5 : 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              style={{
                transformOrigin: "center center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <YellowCard />
            </motion.div>
          </div>
        </div>

        <div className="w-full max-w-3xl opacity-90 relative z-0 text-center max-lg:w-[80%] -translate-y-10 max-md:mt-3 mt-10">
          <p className="text-[40px] drop-shadow-2xl leading-tight lg:text-[35px] max-md:text-[28px]">
            " I’m Abdelrahman Sameh — a passionate UI/UX & Product Designer who
            transforms ideas into intuitive, beautiful, and high-performing
            digital experiences. With strong Frontend development skills and a
            deep understanding of how design and technology connect, I bridge
            creativity with functionality. I’m driven by the challenge of
            crafting user-centered products that not only look stunning but also
            deliver seamless, real-world performance. "
          </p>
        </div>
      </section>
      <BottomTicker />
    </div>
  );
}
