"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif font-light text-primary-dark tracking-wide">Chenna's Convention</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-light transition-colors hover:text-accent-sage ${
                  isActive(item.href) ? "text-accent-sage" : "text-primary-gray"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+919876543210"
              className="flex items-center text-primary-gray hover:text-accent-sage transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-light">+91 98765 43210</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5 text-primary-dark" /> : <Menu className="h-5 w-5 text-primary-dark" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-light">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-light transition-colors hover:text-accent-sage ${
                    isActive(item.href) ? "text-accent-sage" : "text-primary-gray"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-light">
                <a
                  href="tel:+919876543210"
                  className="flex items-center text-primary-gray hover:text-accent-sage transition-colors mb-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm font-light">+91 98765 43210</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
