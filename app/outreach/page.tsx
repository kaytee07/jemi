import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import GraphicCard from '@/components/ui/GraphicCard'
import { careGallery, navItems } from '@/data'
import React from 'react'

const page = () => {
  return (
      <main>
        <Navbar logo="JEMI" navItems={navItems}/>
        <div className="md:mx-[10rem] max-sm:px-10 py-5">
          <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Outreach and development
          </h2>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            <h3 className="scroll-m-20 text-black text-2xl font-semibold tracking-tight">
              Jesus Elevation Care
            </h3>
            <p className="leading-7">
              Jesus Elevation Care is the outreach and development arm of our ministry, dedicated to serving the physical and spiritual needs of our community and beyond. Our initiatives include:
            </p>
            <ul className="list-disc">
                <li><span className="font-bold">Missionary Work:</span> We send trained missionaries to rural areas to spread the Gospel and support local communities.</li>
                <li><span className="font-bold">Child Evangelism:</span> Engaging children with the message of Christ through dedicated programs and activities.</li>
                <li><span className="font-bold">Care for the Elderly and Orphans:</span> Offering assistance to the elderly and children in orphanages through various care programs.</li>
                <li><span className="font-bold">Bible and Vocational Schools:</span> Establishing educational institutions to equip believers with biblical knowledge and practical skills.</li>
            </ul>
            <p className="leading-7">
              Our goal is to make a tangible difference in the lives of those we serve, reflecting Christ&apos;s love and compassion in every action.
            </p>
            <h3 className="scroll-m-20 text-black text-2xl font-semibold tracking-tight">
              Gallery
            </h3>
           <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:w-[87%]"
        >
          <CarouselContent className="w-[70rem]">
            {careGallery.map(({id, img})=> (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <GraphicCard id={id} img={img} width="max-sm:w-[18rem]"/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
          </div>
          </div>
          <Footer/>
      </main>
  )
}

export default page
