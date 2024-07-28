import React from 'react'
import SkillCard from './SkillCard'

function SkillSection() {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36 text-white">
    <h1 className="text-5xl lg:text-7xl text-white mb-10">My Skills</h1>
    <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
      <SkillCard title={"ReactJs"} value={75} />
      <SkillCard title={"NextJs"} value={50} />
      <SkillCard title={"Tailwind css"} value={80} />
      <SkillCard title={"NodeJs"} value={40} />
      <SkillCard title={"MongoDB"} value={35} />
      <SkillCard title={"TypeScript"} value={75} />
    </div>
  </div>
  )
}

export default SkillSection
