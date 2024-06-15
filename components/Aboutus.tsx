import React from 'react'
import { Button } from '@/components/ui/button'

const Aboutus = () => {
  return (
    <div className="px-10 py-5">
      <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About Us
      </h2>
      <div className="flex mt-7  flex-col gap-5 justify-evenly items-center">
        <p className="leading-7 text-justify [&:not(:first-child)]:mt-6">
          Jesus Elevation Ministries International was born out of a profound calling, 
          vision and unwavering faith on June 3, 2010, by our beloved founder,
           Matilda Gbadoku. What began as a small gathering of devoted believers has blossomed into a thriving spiritual family, 
          united by a shared passion for Christ and a commitment to His teachings.
        </p>
        <a href="/aboutus">
        <Button className="mt-6 md:mt-2 bg-black">
                Read more
        </Button>
        </a>
      </div>
    </div>
  )
}

export default Aboutus
