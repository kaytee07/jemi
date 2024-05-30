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
        <div className="flex flex-col justify-center absolute items-center w-full h-full px-10 py-10">
            <p className="text-blue-100 tracking-widest uppercase text-center">
                Jesus Elevation Ministry International</p> <br />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center">
                Inspiring People to fealessly follow Jesus and change the world
                </h1> 
            <Button variant="outline" className=" hover:bg-black hover:opacity-[50%] mt-4 bg-transparent
             border-white border-solid border-2 cursor-pointer">
                <span className="text-white">Join us now</span>
            </Button>
        </div>
    </div>
  )
}

export default Hero