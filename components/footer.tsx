import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    "Wedding Hall",
    "Banquet Hall",
    "Party Hall",
    "Catering Services",
    "Photography & Videography",
    "Event Decoration",
  ]

  const eventTypes = [
    "Weddings",
    "Corporate Events",
    "Birthday Parties",
    "Cultural Events",
    "Conferences",
    "Product Launches",
  ]

  return (
    <footer className="bg-light-gray border-t border-border-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <span className="text-2xl font-serif font-light text-primary-dark">Chenna's Convention</span>
            <p className="text-primary-gray font-light leading-relaxed">
              A premium venue creating memorable experiences for weddings, corporate events, and special celebrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-gray hover:text-accent-sage transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-gray hover:text-accent-sage transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-gray hover:text-accent-sage transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-gray hover:text-accent-sage transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-light text-primary-dark">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-gray hover:text-accent-sage transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <h4 className="font-light text-primary-dark">Our Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service) => (
                  <li key={service} className="text-primary-gray text-sm font-light">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Event Types */}
          <div className="space-y-6">
            <h3 className="text-lg font-light text-primary-dark">Event Types</h3>
            <ul className="space-y-2">
              {eventTypes.map((event) => (
                <li key={event} className="text-primary-gray text-sm font-light">
                  {event}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-light text-primary-dark">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-sage mt-1 flex-shrink-0" />
                <div className="text-primary-gray text-sm font-light">
                  <p>123 Royal Avenue</p>
                  <p>Premium District</p>
                  <p>City - 560001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-sage flex-shrink-0" />
                <div className="text-primary-gray text-sm font-light">
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-sage flex-shrink-0" />
                <div className="text-primary-gray text-sm font-light">
                  <p>events@chennasconvention.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent-sage flex-shrink-0" />
                <div className="text-primary-gray text-sm font-light">
                  <p>Mon - Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-gray text-sm font-light">
              © {new Date().getFullYear()} Chenna's Convention. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-primary-gray hover:text-accent-sage text-sm font-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-primary-gray hover:text-accent-sage text-sm font-light transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-primary-gray hover:text-accent-sage text-sm font-light transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
