import { motion } from "framer-motion";

export default function BottomTicker({ items = [] }: { items?: string[] }) {
  const content = items.join("  •  ");

  return (
    <div className="pointer-events-auto select-none sticky bottom-0 left-0 right-0 mt-24 z-20">
      <div className="relative bg-[#6AA084] text-[#0B2A54] py-3 overflow-hidden border-t border-black/10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#143B7A] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#143B7A] to-transparent" />

        <motion.div
          role="marquee"
          aria-label="Availability ticker"
          className="whitespace-nowrap font-black tracking-wide text-sm md:text-base"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          <span className="mx-6">{content}</span>
          <span className="mx-6">{content}</span>
          <span className="mx-6">{content}</span>
        </motion.div>
      </div>
    </div>
  );
}
