import Giving from '@/components/Giving'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import UpcomingEvent from '@/components/UpcomingEvent'
import { navItems } from '@/data'
import React from 'react'
import ContactUs from '@/components/ContactUs'
import Leaders from '@/components/Leaders'
import Aboutus from '@/components/Aboutus'
import Footer from '@/components/Footer'

const Jemi = () => {
  return (
    <main>
      <Navbar logo="JEMI" navItems={navItems}/>
      <Hero />
      <Services/>
      <UpcomingEvent/>
      <Giving/> 
      <Leaders/>
      <Aboutus/>
      <Footer/>
    </main>
  )
}

export default Jemi