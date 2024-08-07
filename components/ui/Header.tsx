import React from 'react'
import { Button } from '@/components/ui/button'

const Header = ({header, body, button, buttonText, className}: 
    {header?: string, body:string, button?:boolean, buttonText?:string, className:string}) => {
  return (
    <div className={className}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl
         font-semibold tracking-tight text-center first:mt-0">{header}</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text">{body}</p>
        <div className="flex justify-center mt-2">
        {button && (
            <a href="https://paystack.com/pay/give_qwe">
            <Button className="w-27">
                {buttonText}
            </Button>
            </a>
        )}
        </div>
    </div>
  )
}

export default Header