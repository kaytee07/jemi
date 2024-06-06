

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/data";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img src="/icons/hamburger.svg" alt="hamburger" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex border-solid w-12 border-2 border-black w-13 p-2 justify-center items-center">
            <a href="/">
            <h2>JEMI</h2>
            </a>
          </div>
        </SheetHeader>
        <nav className="flex flex-col mt-10 gap-7">
            { navItems.map(({name, link}, i) => (
                <a key={i} href={link} className="flex items-center">
                    <div className=" h-14 w-full flex border-solid  hover:border-b-2 items-center border-black">
                        <p className="font-bold text-black text-2xl">
                            {name}
                        </p>
                    </div>
                </a>
            )) }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default SheetDemo;