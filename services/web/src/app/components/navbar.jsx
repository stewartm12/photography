"use client"

import { useState, Fragment } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/galleries" },
  { name: "Services", href: "/services" },
  { name: "About Me", href: "/about-me" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between h-16 px-4 border-b border-stone-800 shadow-md">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/favicon.ico" width={50} height={50} alt="pics by tory logo" className="w-full h-full"/>
      </Link>
        <h1 className="hidden sm:block font-extrabold tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-700 text-2xl md:text-3xl drop-shadow-md">
          Photography by Tori
        </h1>
      <div className="flex items-center justify-end">
        <div className="mr-4 hidden md:flex">
          <div className="flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]" aria-describedby={undefined}>
                <SheetHeader>
                  <SheetTitle>Pics by Tori</SheetTitle>
                  <SheetDescription>Navigation Menu</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <Fragment key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {index < navItems.length - 1 && <Separator />}
                    </Fragment>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
