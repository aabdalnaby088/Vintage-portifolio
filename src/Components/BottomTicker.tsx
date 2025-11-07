import { Dot } from "lucide-react";

export default function BottomTicker() {

  return (
    <div className="pointer-events-auto select-none right-0 mt-24 z-20 -rotate-6 w-[110%] -translate-x-5 -translate-y-10">
      <div className="relative bg-[#667E74] py-3 overflow-hidden border-t border-black/10">
        <div
        >
          <h6></h6>
  <div className="flex flex-nowrap whitespace-nowrap font-black text-[#F5E8C7] text-[40px] max-lg:text-[28px] max-md:text-[16px] leading-tight tracking-wide uppercase drop-shadow-md">
          <div className="flex items-center">
              <span className="tracking-widest text-stroke">
                AVAILABLE FOR NEW PROJECTS
              </span>
              <span className="text-[#DFB954]">
                <Dot className="w-10 h-10 sm:w-15 sm:h-15 lg:w-20 lg:h-20" strokeWidth={3} />
              </span>
          </div>
          <div className="flex items-center">
              <span className="tracking-widest text-stroke">
                AVAILABLE FOR NEW PROJECTS
              </span>
              <span className="text-[#DFB954]">
                <Dot className="w-10 h-10 sm:w-15 sm:h-15 lg:w-20 lg:h-20" strokeWidth={3} />
              </span>
          </div>
          <div className="flex items-center">
              <span className="tracking-widest text-stroke">
                AVAILABLE FOR NEW PROJECTS
              </span>
              <span className="text-[#DFB954]">
                <Dot className="w-10 h-10 sm:w-15 sm:h-15 lg:w-20 lg:h-20" strokeWidth={3} />
              </span>
          </div>
          <div className="flex items-center">
              <span className="tracking-widest text-stroke">
                AVAILABLE FOR NEW PROJECTS
              </span>
              <span className="text-[#DFB954]">
                <Dot className="w-10 h-10 sm:w-15 sm:h-15 lg:w-20 lg:h-20" strokeWidth={3} />
              </span>
          </div>

            </div>
        </div>
      </div>
    </div>
  );
}
