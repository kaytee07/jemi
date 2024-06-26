import { services, upcomingEvent } from '@/data'
import React from 'react'
import ProgramCard from '@/components/ui/ProgramCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const UpcomingEvent = () => {
  return (
    <div className="px-10 py-5">
      <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Upcoming Events
      </h2>
      <div className="flex mt-12 flex-col md:flex-row gap-5 justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:w-[87%]"
        >
          <CarouselContent className="w-[70rem]">
            {upcomingEvent.map(({day, description, img}, i)=> (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1"
                >
                  <ProgramCard key={i} day={day} description={description} img={img} width="max-sm:w-[18rem]"/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

//#9a4f12

export default UpcomingEvent
