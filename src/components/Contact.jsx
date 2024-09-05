import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants"

const Contact = () => {
  return (
    <section id='contact' className="font-light selection:bg-[#FABC3F] bg-gradient-to-r from-blue-500 to-purple-500 antialiased selection:text-black">
        <div className="mx-auto max-w-6xl">
            <p className="my-10 text-center text-3xl lg:text-8xl text-white">Interested in Working Together?</p>
            <p className="text-white p-4 text-center text-xl">{CONTACT.text}</p>
            <p className="text-[#FABC3F] text-center font-medium lg:pt-6 lg:text-5xl">{CONTACT.email}</p>
            <p className="text-white text-center lg:pb-6 lg:text-5xl pt-4">{CONTACT.phone}</p>
        </div>
        <div className="mt-20 flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a href={link.href} key={index} target="_blank" className="text-[#FABC3F]">{link.icon}</a>
            ))}
        </div>
        <p className="text-white text-center my-8">&copy; Calvin Lawrence - 2024</p>
    </section>
  )
}

export default Contact
