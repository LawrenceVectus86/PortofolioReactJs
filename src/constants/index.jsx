import {
  // FaXTwitter,
  
  // FaLinkedin,
  // FaFacebook,
  // FaDiscord,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/Akademi.png";
import project2 from "../assets/Dicoding1.png";
import project3 from "../assets/Dicoding2.png";
import project4 from "../assets/HTML.png";
import project5 from "../assets/Apps1.png";
import project6 from "../assets/Apps2.png";
import project7 from "../assets/Apps3.png";
import project8 from "../assets/Apps4.png";
import project9 from "../assets/Apps5.png";
import project10 from "../assets/Apps6.png";
import project11 from "../assets/Apps7.png";

export const LINKS = [
  { id: "projects1", name: "Certificate"},
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "tools", name: "tools" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Figma, Tailwind, MySql, Javascript, PHP,";

export const PROJECTS1 = [
  {
    id: 1,
    title: 'Certificate 1',
    description: 'Certificate Complete TailwindCss Project',
    imgSrc: project1,
    link: 'https://google.com',
  },
  {
    id: 1,
    title: 'Certificate 2 - Dicoding Program',
    description: 'Certificate Complete Learn Java Programming',
    imgSrc: project2,
    link: 'https://google.com',
  },
  {
    id: 1,
    title: 'Certificate 3 - Dicoding Program',
    description: 'Certificate Complete Learn SQL Database',
    imgSrc: project3,
    link: 'https://google.com',
  },
  {
    id: 1,
    title: 'Certificate 4 - Sololearn Program',
    description: 'Certificate HTML Complete Course',
    imgSrc: project4,
    link: 'https://google.com',
  },
  {
    id: 1,
    title: 'Certificate 5 - Coding Studio',
    description: 'Certificate Fundamental Front-End Developer',
    imgSrc: project10,
    link: 'https://google.com',
  },
  {
    id: 1,
    title: 'Certificate 6 - Dicoding Program',
    description: 'Certificate Learn Management Project',
    imgSrc: project11,
    link: 'https://google.com',
  }
]

export const PROJECTS = [
  {
    id: 5,
    title: "LinkTree Project",
    description: "Link Social Media with HTML,CSS and JavaScript",
    imgSrc: project5,
    link: "https://lawrencevectus86.github.io/My-Link-Web/",
  },
  {
    id: 6,
    title: "Use TailwindCss For Portofolio",
    description:
      "Link My Portofolio using Website with TailwindCss",
    imgSrc: project6,
    link: "https://lawrencevectus86.github.io/Portofolio-CalvinLawrence/",
  },
  {
    id: 7,
    title: "Use Gemini APi",
    description: "Use Gemini API for Custom Web Analysis Image",
    imgSrc: project7,
    link: "https://calv-ai-with-gemini.vercel.app/",
  },
  {
    id: 8,
    title: "Netflix Clone",
    description: "Clone Netflix with ReactJS and API Movies",
    imgSrc: project8,
    link: "https://netflix-clone-five-lemon-54.vercel.app/",
  },
  {
    id: 9,
    title: "Link Social Media",
    description:
      "A Website to link my social media",
    imgSrc: project9,
    link: "https://link-lauw.vercel.app/",
  },
];

export const ABOUT =
  "As a dedicated Front-End Developer, I specialize in crafting dynamic and visually appealing web applications that prioritize seamless user experiences. With a strong foundation in front-end technologies, I excel in building responsive and interactive interfaces using JavaScript frameworks such as React. My expertise extends to creating pixel-perfect designs and ensuring optimal performance across devices. I am passionate about continuous learning and staying current with industry trends, which enables me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Freelance",
    role: "Front-End Developer",
    year: "2022 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  // {
  //   company: "Facebook",
  //   role: "Frontend Developer",
  //   year: "01/2021 - 11/2023",
  //   description:
  //     "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://instagram.com/_dbrolex_0418",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/LawrenceVectus86",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://www.linkedin.com/",
  //   icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  // },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "CalvinLawrence98@gmail.com",
  phone: "(0895806357615)",
};
