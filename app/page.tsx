import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { navItems } from '@/data'
import React from 'react'

const Jemi = () => {
  return (
    <main>
      <Navbar logo="JEMI" navItems={navItems}/>
      <Hero />
    </main>
  )
}

export default Jemi