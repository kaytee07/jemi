import Navbar from '@/components/Navbar'
import { navItems, testimonials, youthLeaders } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar logo="JEMI" navItems={navItems}/>
        <div className="md:mx-[10rem] max-sm:px-10 py-5">
          <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Youth Leaders
          </h2>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            {
                youthLeaders.map(({img, name, title, quote}) => (
                    <>
                    <img className="md:w-[50%]" src={img} alt="history" />
                        <span className=" text-sm leading-[1.6] w-full text-black font-bold">
                            {name}
                        </span>
                        <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                            {title}
                        </span>
                    <div className="md:flex md:flex-row md:justify-evenly">
                        <p className="leading-7 text-justify">
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