import React from 'react'
import ProjectCard from './ProjectCard'
import {HiArrowSmLeft , HiArrowSmRight} from 'react-icons/hi'
import { useRef } from 'react'

function ProjectSection() {

  const scrollref = useRef(null)

  const scrollRight = () => {
    scrollref.current.scrollLeft += 500
  };

  const scrollLeft = () => {
    scrollref.current.scrollLeft -= 500
  } 
  return (
    <div data-aos="fade-down" className='mb-20 lg:mb-36'>
    <h1 className=' text-white text-5xl lg:text-7xl mb-10'>My Projects</h1>\
    <div
        ref={scrollref}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
       <div className='flex justify-center items-center gap-3 mt-2 select-none'>
      <HiArrowSmLeft onClick={scrollLeft} className='text-xl lg:text-4xl cursor-pointer text-white bg-yellow-500 border-yellow-500 rounded-3xl hidden lg:block' />
      <h2 className='text-white text-lg uppercase'>Slide for more</h2>
      <HiArrowSmRight onClick={scrollRight} className='text-xl lg:text-4xl cursor-pointer text-white bg-yellow-500 border-yellow-500 rounded-3xl hidden lg:block' />
       </div>
    </div>
  )
}

export default ProjectSection
