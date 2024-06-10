import React from 'react'
import SheetDemo from '@/components/ui/sidebar'

type navLink = {
    name: string,
    link: string
}


const Navbar = ({logo, navItems,}: { logo: string, navItems: navLink[]}) => {
  return (
    <div className="w-full h-16 bg-black text-white flex justify-between px-3 items-center">
        <div className="flex w-13 justify-center items-center">
            <a href="/">
            <img 
                src="/images/jemitrans.png"
                 alt="logo" 
                 className="w-40 h-40 max-sm:hidden"
                 />
             <img 
                src="/images/jemilogo.png"
                 alt="logo" 
                 className="w-[3.5rem] h-[3.5rem] md:hidden"
                 />
            </a>
        </div>
        <nav className="flex gap-5 max-sm:hidden">
            { navItems.map(({name, link}, i) => (
                <a key={i} href={link}>
                    <div className="flex ">
                        <p className="">
                            {name}
                        </p>
                    </div>
                </a>
            )) }
        </nav>
        <div className="md:hidden">
            <SheetDemo/>
        </div>
    </div>
  )
}

export default Navbar
