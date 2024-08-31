// import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Tools = () => {
  return (
    <section id="tools">
        <h2 className="my-10 text-center text-3xl lg:text-8xl text-white font-bold">Tools</h2>
        <div className="flex items-center justify-center space-x-4 flex-wrap">
        <div className="flex flex-wrap space-x-4 justify-center">
                {/* <img  alt="Figma" className="hover:scale-110 transition-transform duration-300 w-10 h-10" /> */}
                <SiAdobephotoshop className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#001E36] sm:w-16 sm:h-16" />
                <FaFigma className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#F24E1E] sm:w-16 sm:h-16" />
                <RiTailwindCssFill className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#38BDF8] sm:w-16 sm:h-16"/>
                <FaReact className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#58C4DC] sm:w-16 sm:h-16" />
                <FaPhp className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#8892BF] sm:w-16 sm:h-16" />
                <SiMysql className="text-[#F29111] hover:scale-110 transition-transform duration-300 w-20 h-20 sm:w-16 sm:h-16" />
                <IoLogoJavascript className="text-[#F7DF1E] hover:scale-110 transition-transform duration-300 w-20 h-20 sm:w-16 sm:h-16" />
            </div>
        </div>
    </section>
  )
}

export default Tools
