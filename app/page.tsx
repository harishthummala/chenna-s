import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Car, Bed, Camera, Music, Flower, ChefHat, Calendar, Phone, ArrowRight, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  const services = [
    { icon: ChefHat, title: "Premium Catering", description: "Exquisite culinary experiences" },
    { icon: Camera, title: "Photography & Videography", description: "Professional documentation" },
    { icon: Music, title: "DJ & Entertainment", description: "Premium sound systems" },
    { icon: Flower, title: "Event Decoration", description: "Beautiful venue styling" },
  ]

  const eventTypes = [
    "Weddings",
    "Corporate Events",
    "Birthday Parties",
    "Conferences",
    "Product Launches",
    "Cultural Events",
    "Social Gatherings",
    "Exhibitions",
  ]

  const highlights = [
    { icon: Users, value: "2000", label: "Guest Capacity" },
    { icon: Car, value: "500+", label: "Parking Spaces" },
    { icon: Bed, value: "14", label: "Accommodation" },
    { icon: Building, value: "3", label: "Event Halls" },
  ]

  return (
    < >
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Chenna's Convention"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide">Chenna's Convention</h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">Elegant spaces for memorable celebrations</p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            A premium venue designed for weddings, corporate events, and special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary-dark font-normal px-8 py-3 rounded-none"
            >
              <Link href="/booking">
                Book Your Event <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-3 rounded-none bg-transparent"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-primary-dark">Our Venue</h2>
            <p className="text-xl text-primary-gray font-light">Designed for exceptional events</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                  <highlight.icon className="h-8 w-8 text-accent-sage" />
                </div>
                <div className="text-3xl font-light text-primary-dark mb-2">{highlight.value}</div>
                <div className="text-primary-gray font-light">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Spaces Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-primary-dark mb-4">Event Spaces</h2>
            <p className="text-xl text-primary-gray font-light max-w-2xl mx-auto">
              Three distinct halls for every type of celebration
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Hall",
                description: "Elegant space for your special day",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Banquet Hall",
                description: "Perfect for formal gatherings",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Party Hall",
                description: "Vibrant space for celebrations",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((venue, index) => (
              <Card key={index} className="overflow-hidden hover-minimal border-0 shadow-sm">
                <div className="relative h-64">
                  <Image src={venue.image || "/placeholder.svg"} alt={venue.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-serif font-light">{venue.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-primary-gray font-light leading-relaxed">{venue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-primary-dark mb-4">Our Services</h2>
            <p className="text-xl text-primary-gray font-light max-w-2xl mx-auto">
              Complete event solutions under one roof
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover-minimal border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="bg-light-gray rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent-sage" />
                  </div>
                  <h3 className="text-xl font-light text-primary-dark mb-3">{service.title}</h3>
                  <p className="text-primary-gray font-light leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-primary-dark mb-4">
              Perfect For Every Occasion
            </h2>
            <p className="text-xl text-primary-gray font-light max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((eventType, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base py-2 px-6 border-border-light text-primary-gray transition-colors duration-200 rounded-none font-light"
              >
                {eventType}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
            Let us help you create an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent-sage hover:bg-accent-sage/90 text-white font-normal px-8 py-3 rounded-none"
            >
              <Link href="/booking">
                Start Planning <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-3 rounded-none bg-transparent font-normal"
            >
              <Link href="/contact">
                Get In Touch <Phone className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  <Analytics />
  </>
  )
}
