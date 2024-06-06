import React from 'react'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProgramCard = ({ day, description, time, img, width}:
     {day?: string, description?: string, time?: string, img: string, width?: string}) => {
  return (
    <div>
      <Card className={`w-[350px] h-[23rem]`} >
                <div className={`${day && "h-[50%]"} h-full bg-cover ${width && width}`}
                style={{
                 backgroundImage: `url(${img})`
                }}
                >
                </div>
                <div className="flex flex-col px-5">
                {day &&
                <>
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
                        <a href="https://maps.app.goo.gl/tYoPvHB7HxVa3BQi7?g_st=iw" target="_blank" className="flex">
                        Location
                        </a>
                    </Button>
                    </>
                    }
                </div>
        </Card>
    </div>
  )
}

export default ProgramCard;