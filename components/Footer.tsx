import { socialMedia } from '@/data'
import { TwitterIcon } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className="h-[40vh] bg-black text-white">
        <h3 className="scroll-m-20 text-center text-white text-2xl font-semibold tracking-tight">
            socials
        </h3>
      <div className="flex gap-7 mt-4 justify-center items-center">
            {socialMedia.map(({id, img, link}) => (
                <a href={link} key={id}>
                    <img src={img} alt={link} />
                </a>
            ))}
      </div>
      <div className=" flex justify-center items-center mt-4 flex-col">
        <h3 className="scroll-m-20 text-center text-white text-2xl font-semibold tracking-tight">
            Get in touch
        </h3>
        <ul className="my-2 ml-6 list-none [&>li]:mt-2 text-white">
        <li className="">
            <a href="tel:+1234567890" className="flex">
                <img src="/icons/phone(1).svg" alt="phone" />
                <h2>: +1234567890</h2>
            </a>
        </li>
        <li>
            <a href="mailto:feedback@example.com" className="flex">
                <img src="/icons/mail(1).svg" alt="mail" />
                <h2>: feedback@example.com</h2>
            </a>
        </li>
        <li>
           <a href="mailto:feedback@example.com" className="flex">
                <img src="/icons/map-pin(1).svg" alt="mail" />
                <h2>: feedback@example.com</h2>
            </a>
        </li>
        </ul>
      </div>
      <div className="contact">

      </div>
    </footer>
  )
}

export default Footer
