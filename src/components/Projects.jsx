// import React from 'react'

import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <section className="p-8" id="projects">
        <h2 className="my-10 text-center text-3xl lg:text-8xl text-white font-bold">My Project</h2>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
            {PROJECTS.map((project) => (
                <a href={project.link} key={project.id} target="_blank" className="block" rel="">
                    <div className="relative mb-4  overflow-hidden rounded-lg bg-white shadow-lg">
                        <img src={project.imgSrc} alt="" />
                        <div className="absolute bottom-0 left-0 right-0 m-1 p-1 text-white backdrop-blur-md">
                            <h3 className="text-xl text-white drop-shadow-lg text-center">{project.title}</h3>
                            <p className="max-w-xl text-lg text-white drop-shadow-lg text-center">{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Projects
