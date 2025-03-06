"use client"

import { useState, Fragment } from "react"
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react'
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
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

const galleryCategories = [
  { name: "Individual & Family Portraits", href: "/galleries/individual-and-family-portraits" },
  { name: "Engagement & Couples Photography", href: "/galleries/engagement-and-couples-photography" },
  { name: "Corporate & Commercial Photography", href: "/galleries/corporate-and-commercial-photography" },
  { name: "Product Photography", href: "/galleries/product-photography" },
  { name: "Pet & Animal Photography", href: "/galleries/pet-and-animal-photography" },
  { name: "Graduation & Senior Portraits", href: "/galleries/graduation-and-senior-portraits" },
]

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Gallery",
    href: "/galleries",
    hasSubmenu: true,
    submenu: galleryCategories,
  },
  { name: "Services", href: "/services" },
  { name: "About Me", href: "/about-me" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openCollapsible, setOpenCollapsible] = useState(null)
  const pathname = usePathname()

  const toggleCollapsible = (name) => {
    setOpenCollapsible(openCollapsible === name ? null : name)
  }

  return (
    <nav className="flex items-center justify-between h-16 px-4 border-b border-stone-800 shadow-md">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/picsbytori-logo.jpg" width={50} height={50} alt="pics by tori logo" className="w-full h-full border-b border-stone-800" priority/>
      </Link>
        <h1 className="hidden sm:block font-extrabold tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-700 text-2xl md:text-3xl drop-shadow-md">
          Victoria's Photography
        </h1>
      <div className="flex items-center justify-end">
        <div className="mr-4 hidden md:flex">
          <div className="flex items-center space-x-4 text-sm font-medium">
          {navItems.map((item) =>
              item.hasSubmenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={`flex items-center cursor-pointer transition-colors hover:text-foreground/80 ${pathname === item.href ? "underline" : ""}`}
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.submenu?.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} className="w-full">
                        <DropdownMenuItem className="cursor-pointer">{subItem.name}</DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-foreground/80 ${pathname === item.href ? "underline" : ""}`}
                >
                  {item.name}
                </Link>
              ),
            )}
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
                  <SheetTitle>Victoria's Photography</SheetTitle>
                  <SheetDescription>Navigation Menu</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item, index) => (
                    <Fragment key={item.name}>
                      {item.hasSubmenu ? (
                        <Collapsible
                          open={openCollapsible === item.name}
                          onOpenChange={() => toggleCollapsible(item.name)}
                          className="w-full"
                        >
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="w-full justify-between px-2 text-lg font-normal">
                              {item.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${openCollapsible === item.name ? "rotate-180" : ""}`}
                              />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-2 mt-2">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-2 py-1 text-base"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link href={item.href} className="block px-2 py-1 text-lg" onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      )}
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
