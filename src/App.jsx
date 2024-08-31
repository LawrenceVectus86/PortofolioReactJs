// import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Projects from "./components/Projects"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import IconToTop from "./components/iconToTop"
import Projects1 from "./components/Projects1"
import Tools from "./components/Tools"

const App = () => {
  return (
    <main className="font-light selection:bg-[#FABC3F] bg-black antialiased selection:text-black">
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Projects1/>
      <Projects/>
      <About/>
      <Tools/>
      <Work/>
      <Contact/>
      <IconToTop/>
    </main>
  )
}

export default App
