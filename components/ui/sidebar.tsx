import { Button } from "@/components/ui/button"

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
        <Button className="bg-transparent text-white" variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex border-solid w-12 border-2 border-black w-13 p-2 justify-center items-center">
            <h2>JEMI</h2>
          </div>
        </SheetHeader>
        <nav className="flex flex-row gap-5 max-sm:hidden h-full">
            { navItems.map(({name, link}, i) => (
                <a key={i} href={link} className="gap-5">
                    <div className="flex ">
                        <p className="text-bold text-black text-2xl">
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