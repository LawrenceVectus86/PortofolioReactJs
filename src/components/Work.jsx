import { EXPERIENCES } from "../constants"

const Work = () => {
  return (
    <section id="experience">
        <h2 className="my-10 text-center text-3xl  lg:text-8xl text-white font-bold">Work Experience</h2>
        <div className="mx-auto max-w-6xl">
            {EXPERIENCES.map((experience, id) => (
              <div key={id} className="mx-4 mb-20">
                <h2 className="text-white font=medium lg:text-2xl">{experience.company}</h2>
                <div className="flex justify-between">
                  <p className="py-4 tracking-wide lg:text-xl text-white">{experience.role}</p>
                  <p className="py-4 lg:text-xl text-white">{experience.year}</p>
                </div>
                <p className="text-white">{experience.description}</p>
              </div> // Use experience data here
            ))}
        </div>
    </section>
  )
}

export default Work
