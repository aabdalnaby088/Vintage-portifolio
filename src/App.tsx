import Footer from "./Components/Footer"
import AboutMe from "./sections/Hero"
import ProjectsCards from "./sections/ProjectsCards"
import ShowCase from "./sections/ShowCase"
import StickyShowcaseWithTicker from "./sections/AboutMe"
import { useEffect } from "react"

function App() {
useEffect(() => {
  const handleResetUrl = () => {
    setTimeout(() => {
      const isAtTop = window.scrollY <= 5;
      if (isAtTop && window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    }, 100);
  };

  window.addEventListener("load", handleResetUrl);
  return () => window.removeEventListener("load", handleResetUrl);
}, []);
  return (
    <>
      <div >
        <AboutMe/>
        <StickyShowcaseWithTicker />
        <ShowCase/>
        <ProjectsCards/>
        <Footer/>
      </div>



    </>
  )
}

export default App
