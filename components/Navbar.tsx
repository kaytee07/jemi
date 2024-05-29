import React from 'react'
import SheetDemo from './ui/sidebar'

type navLink = {
    name: string,
    link: string
}


const Navbar = ({logo, navItems,}: { logo: string, navItems: navLink[]}) => {
  return (
    <div className="w-full h-16 bg-black text-white flex justify-between px-3 items-center">
        <div className="flex border-solid border-2 border-white w-13 p-2 justify-center items-center">
            {logo}
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
