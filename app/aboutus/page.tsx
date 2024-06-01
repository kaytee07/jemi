import Navbar from '@/components/Navbar'
import { navItems } from '@/data'
import React from 'react'

const AboutUs = () => {
  return (
      <main>
        <Navbar logo="JEMI" navItems={navItems}/>
      </main>
  )
}

export default AboutUs