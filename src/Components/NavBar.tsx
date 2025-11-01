
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center py-10 w-full relative z-50">
      {/* ========= DESKTOP NAV ========= */}
      <div
        className="hidden sm:flex flex-wrap justify-evenly items-center w-[40%] max-md:w-[60%] rounded-[20px] border-4 border-[#ff4d4d]
                    shadow-[0_0_10px_#ff4d4d,0_0_20px_#ff4d4d,0_0_40px_#ff4d4d]
                    bg-transparent
                    transition-all duration-300 hover:shadow-[0_0_15px_#ff8080,0_0_30px_#ff8080,0_0_60px_#ff8080]"
      >
        <div className="flex flex-wrap justify-evenly w-full items-center gap-10 px-10 py-3 rounded-2xl border-3 border-[#ECE0BA] bg-transparent">
          <a
            href="#about"
            className="text-lg md:text-2xl tracking-wide hover:text-white transition-all duration-300"
          >
            ABOUT ME
          </a>
          <a
            href="#projects"
            className="text-lg md:text-2xl tracking-wide hover:text-white transition-all duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="text-lg md:text-2xl tracking-wide hover:text-white transition-all duration-300"
          >
            CONTACTS
          </a>
        </div>
      </div>


      {/* *************************************************************************************************************** */}
      {/* *************************************************************************************************************** */}
      {/* *************************************************************************************************************** */}
      {/* *************************************************************************************************************** */}

      {/* ========= MOBILE NAV ========= */}
      <div className="flex sm:hidden justify-between items-center w-[95%] px-6 py-2 flex-wrap rounded-[10px] border-2 border-[#ff4d4d]
                    bg-transparent
                    transition-all duration-300 hover:shadow-[0_0_15px_#ff8080,0_0_30px_#ff8080,0_0_60px_#ff8080]  ">
        <a
          href="#"
          className="text-2xl text-[#ECE0BA] tracking-wider"
        >
          Abdelrahman
        </a>

        {/* Burger Icon */}
        <button
          className="text-[#ECE0BA] hover:text-white transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ========= MOBILE MENU DROPDOWN ========= */}
      {menuOpen && (
        <div
          className="absolute top-[80px] right-6 left-6 flex flex-col items-center gap-6 py-6 rounded-2xl border-2 border-[#ECE0BA]
                     bg-black/70 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_#ff4d4d]"
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-[#ECE0BA] hover:text-white transition-all duration-300"
          >
            ABOUT ME
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-[#ECE0BA] hover:text-white transition-all duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg text-[#ECE0BA] hover:text-white transition-all duration-300"
          >
            CONTACTS
          </a>
        </div>
      )}
    </nav>
  );
}
