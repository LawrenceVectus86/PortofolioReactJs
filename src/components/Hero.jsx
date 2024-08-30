import { LuImport } from "react-icons/lu";
import banner from '../assets/banner.jpg';
import { motion } from 'framer-motion'; // Import motion

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <motion.h1 
          className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none text-white"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Transition duration
        >
          Calvin <br /> Lawrence
        </motion.h1>
        <div className="mt-8">
          <a href="" target="_blank" download className="rounded-2xl flex items-center bg-[#FABC3F] p-2 px-3 font-sans font-medium hover:bg-[#FABC3F]">
            <span className="text-white">Resume PDF</span><LuImport className="ml-2"/>
          </a>
        </div>
        <motion.div 
          className="w-full"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animate to this state
          transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with delay
        >
          <img src={banner} alt="CalvinLawrence" className="mt-8 h-96 w-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero