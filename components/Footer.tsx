import { socialMedia } from '@/data'
import { TwitterIcon } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className=" bg-black text-white">
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
            <a href="tel:+233578267649" className="flex">
                <img src="/icons/phone(1).svg" alt="phone" />
                <h2>: 0578267649</h2>
            </a>
        </li>
        <li>
            <a href="mailto: jesuselevationministries@gmail.com" className="flex">
                <img src="/icons/mail(1).svg" alt="mail" />
                <h2>:  jesuselevationministries@gmail.com</h2>
            </a>
        </li>
        <li>
           <a href="https://maps.app.goo.gl/tYoPvHB7HxVa3BQi7?g_st=iw" target="_blank" className="flex">
                <img src="/icons/map-pin(1).svg" alt="mail" />
                <h2>: Tetegu, Accra. Close to Holy Cross School</h2>
            </a>
        </li> 
        <li>
           <a href="https://maps.app.goo.gl/tYoPvHB7HxVa3BQi7?g_st=iw" target="_blank" className="flex">
                <img src="/icons/mailbox.svg" alt="mail" />
                <h2>: P.O. BOX 6753, Accra-North.</h2>
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
