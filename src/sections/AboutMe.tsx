import NavBar from "../Components/NavBar";
import StickyShowcaseWithTicker from "../Components/StickyShowcaseWithTicker";

export default function AboutMe() {
  return (
    <div>
    <div className="h-screen">
        <NavBar/>
        <h1 className="flex justify-center text-[80px] text-stroke max-sm:text-center">Design that never goes out of style</h1>
    </div>
    <StickyShowcaseWithTicker/>
    </div>
  )
}
