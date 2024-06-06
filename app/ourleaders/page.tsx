import Navbar from '@/components/Navbar'
import { navItems, testimonials } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar logo="JEMI" navItems={navItems}/>
        <div className="md:mx-[10rem] max-sm:px-10 py-5">
          <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Our Leaders
          </h2>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            {
                testimonials.map(({img, name, title, quote}) => (
                    <>
                    <img className="md:w-[50%]" src={img} alt="history" />
                        <h3 className=" text-lg leading-[1.6] w-full text-black font-bold">
                            {name}
                        </h3>
                        <h3 className=" text-base leading-[1.6] text-white-200 font-bold">
                            {title}
                        </h3>
                    <div className="md:flex md:flex-row md:justify-evenly">
                        <p className="leading-7 text-justify md:w-[40%]">
                        {quote}
                        </p>
                </div>
                </>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default page
