import Giving from '@/components/Giving'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import UpcomingEvent from '@/components/UpcomingEvent'
import { navItems } from '@/data'
import React from 'react'

const Jemi = () => {
  return (
    <main>
      <Navbar logo="JEMI" navItems={navItems}/>
      <Hero />
      <Services/>
      <UpcomingEvent/>
      <Giving/>
    </main>
  )
}

export default Jemi