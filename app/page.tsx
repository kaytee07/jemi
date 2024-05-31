import Giving from '@/components/Giving'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import UpcomingEvent from '@/components/UpcomingEvent'
import { navItems } from '@/data'
import React from 'react'
import AboutUs from './aboutus/page'
import Aboutus from '@/components/Aboutus'
import Leaders from '@/components/Leaders'

const Jemi = () => {
  return (
    <main>
      <Navbar logo="JEMI" navItems={navItems}/>
      <Hero />
      <Services/>
      <UpcomingEvent/>
      <Giving/> 
      <Leaders/>
    </main>
  )
}

export default Jemi