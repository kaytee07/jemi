import React from 'react'
import { services } from '@/data'
import ProgramCard from '@/components/ui/ProgramCard'

const Services = () => {
  return (
    <div className="px-10 py-5">
      <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Weekly Service
      </h2>
      <div className="flex mt-12 flex-col md:flex-row gap-5 justify-evenly items-center">
        {services.map(({day, description, time, img}, i)=> (
             <ProgramCard key={i} day={day} description={description} time={time} img={img} />
        ))}
       
      </div>
    </div>
  )
}

export default Services