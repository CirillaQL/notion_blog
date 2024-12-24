'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getPageTitle } from 'notion-utils'
import { type ExtendedRecordMap } from 'notion-types'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar({ recordMap }: { recordMap: ExtendedRecordMap }) {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ]

  const title = getPageTitle(recordMap)

  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl ml-10">
          {title}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button>Contact</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm transition-colors hover:text-primary ${
                    pathname === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-2">Contact</Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
