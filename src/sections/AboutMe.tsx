import NavBar from "../Components/NavBar";
import StickyShowcaseWithTicker from "../Components/StickyShowcaseWithTicker";
import { Eye   } from 'lucide-react';

export default function AboutMe() {
  return (
    <div>
      <div className="h-screen">
        <NavBar />
        <div className="hero-section flex justify-center items-center max-md:flex-col-reverse mt-4">

          <div className=" for-text  text-center w-[40%] max-md:w-[80%] relative ">
            <img src="/public/assets/star.png" className="absolute w-[30%] -top-27 -left-12 max-md:hidden" alt="star" />
            <h1 className="flex justify-center text-[115px] text-stroke max-sm:text-center max-md:text-[50px] leading-[1.1]">
              Design that never goes out of style
            </h1>

            <button type="button" className=" cursor-pointer border-4 rounded-[20px] w-[30%] border-[#ff4d4d] text-[35px] flex items-center justify-evenly ms-12 mt-3 max-md:w-[50%] max-md:ms-20 max-md:text-[30px] hover:bg-[#ECE0BA] hover:text-[#ff4d4d] 
            transition-all duration-300 hover:shadow-[0_0_5]px_#ff8080,0_0_10px_#ff8080,0_0_20px_#ff8080]
            ">Resume <Eye/>  </button>
          </div>

          <div className="for-posters w-[40%] flex justify-center max-md:w-[90%] " >
            <img src="/public/assets/posters.png" alt="posters" className="w-[80%]" />
            
          </div>

        </div>
      </div>
      <StickyShowcaseWithTicker />
    </div>
  );
}
