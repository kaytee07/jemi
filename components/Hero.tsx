import React from 'react'
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <div className="h-[80vh] relative bg-cover z-10"
    style={{
        backgroundImage: `url(${"/images/hero-1.avif"})`
    }}>
        <div className="absolute inset-0  z-20">
        </div>
        <div className="flex flex-col justify-center absolute items-center w-full h-full">
            <p className="text-blue-100 tracking-widest uppercase text-center">
                Jesus Elevation Ministry International</p> <br />
            <h2 className="text-[40px] text-center text-xl text-white md:text-5xl">
                Inspiring People to fealessly follow Jesus and <br/> change the world
                </h2> 
            <Button variant="outline" className="cursor-pointer mt-4 bg-transparent border-white border-solid border-2">
                <span className="text-white">Join us now</span>
            </Button>
        </div>
        Hero
    </div>
  )
}

export default Hero