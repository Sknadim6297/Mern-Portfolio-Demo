import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function ContactSection() {
  return (
    <div
      data-aos="fade-left"
      className="flex text-white flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:sknadim6297@gmail.com"
              className="text-white underline text-lg lg:text-2xl"
            >
              sknadim6297@gmail.com
            </a>
            <a
              href="tel:+919898988989"
              className="text-white underline text-lg lg:text-2xl"
            >
              +91 9898988989
            </a>
          </div>
          <div className="flex gap-4 mt-2">
            <AiFillGithub className="text-white text-4xl" />
            <AiFillLinkedin className="text-white text-4xl" />
            <AiFillInstagram className="text-white text-4xl" />
          </div>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl hover:text-black hover:bg-white border font-bold text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
