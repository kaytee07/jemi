import React from 'react'
import { Card } from './card';
import { Button } from './button';

const ProgramCard = ({ day, description, time, img}: {day: string, description: string, time?: string, img: string}) => {
  return (
    <div>
      <Card className="w-[350px] h-[23rem]" >
                <div className="h-[50%] bg-cover"
                style={{
                 backgroundImage: `url(${img})`
                }}
                >
                </div>
                <div className="flex flex-col px-5">
                    <h1 className="mt-5 croll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                        {day}
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-2">
                        {description}
                    </p>
                    <p className="font-bold">
                        {time}
                    </p>
                    <Button variant="outline" className="mt-2 w-[30%]">
                        Location
                    </Button>
                </div>
        </Card>
    </div>
  )
}

export default ProgramCard;