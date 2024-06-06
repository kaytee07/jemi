import React from 'react'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GraphicCard = ({ id, img, width}:
     {id: string, img: string, width ?: string}) => {
  return (
    <div>
      <Card className={`w-[350px] h-[23rem]`} >
                <div className={`h-[100%] bg-cover ${width && width}`}
                style={{
                 backgroundImage: `url(${img})`
                }}
                >
                </div>
        </Card>
    </div>
  )
}

export default GraphicCard;