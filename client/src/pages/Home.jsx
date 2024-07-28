import React, { useEffect } from 'react'
import PortfolioCard from '../Components/PortfolioCard'
import HomeCard from '../Components/HomeCard'
import AboutCard from '../Components/AboutCard'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Home() {
  useEffect(() => {
    AOS.init({
      duration:1500,
    });
  }, [])

  return (
    <div className='w-[80vw] mx-auto'>
      <PortfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default Home
