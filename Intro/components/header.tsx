"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider text-foreground">
            MAISON
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              브랜드 소개
            </Link>
            <Link
              href="#values"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              브랜드 가치
            </Link>
            <Link
              href="#products"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              컬렉션
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              문의하기
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              브랜드 소개
            </Link>
            <Link
              href="#values"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              브랜드 가치
            </Link>
            <Link
              href="#products"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              컬렉션
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              문의하기
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
