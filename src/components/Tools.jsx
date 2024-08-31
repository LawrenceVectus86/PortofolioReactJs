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
        <div className="flex items-center justify-center space-x-4">
        <div className="flex space-x-4">
                {/* <img  alt="Figma" className="hover:scale-110 transition-transform duration-300 w-10 h-10" /> */}
                <SiAdobephotoshop className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#001E36]" />
                <FaFigma className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#F24E1E]" />
                <RiTailwindCssFill className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#38BDF8]"/>
                <FaReact className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#58C4DC]" />
                <FaPhp className="hover:scale-110 transition-transform duration-300 w-20 h-20 text-[#8892BF]" />
                <SiMysql className="text-[#F29111] hover:scale-110 transition-transform duration-300 w-20 h-20" />
                <IoLogoJavascript className="text-[#F7DF1E] hover:scale-110 transition-transform duration-300 w-20 h-20" />
            </div>
        </div>
    </section>
  )
}

export default Tools
