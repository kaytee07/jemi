import { giving } from '@/data'
import React from 'react'
import TextHeader from './ui/Header'
import ProgramCard from './ui/ProgramCard'



const Giving = () => {
  return (
    <div className="px-10 py-5 md:h-[60vh]">
      <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Giving
      </h2>
      <div className="flex mt-12 flex-col md:flex-row gap-5 justify-evenly items-center h-full">
        { giving.map(({header, body, button, buttonText}, i)=> (
            <TextHeader 
            className="md:w-[25vw] md:h-[100%] gap-6" 
            header={header} body={body} 
            button={button} 
            buttonText={buttonText} key={i}
             />
        ))}
      </div>
      
      
    </div>
  )
}

export default Giving