import { ABOUT } from "../constants"


const About = () => {
  return (
    <section id="about">
        <h2 className="my-10 text-center text-3xl lg:text-8xl text-white font-bold">About Me</h2>
        <div className="flex items-center justify-center">
            <p className="m-8 max-w-6xl text-xl lg:text-4xl text-white text-center">{ABOUT}</p>
        </div>
    </section>
  )
}

export default About
