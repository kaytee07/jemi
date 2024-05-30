import React from 'react'
import { Button } from './button'

const textHeader = ({header, body, button, buttonText}: 
    {header: string, body:string, button:boolean, buttonText:string}) => {
  return (
    <div>
        <h2>{header}</h2>
        <p>{body}</p>
        {button && (
            <Button>
                {buttonText}
            </Button>
        )}
    </div>
  )
}

export default textHeader