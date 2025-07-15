"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Filter } from "lucide-react"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Events" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "parties", label: "Parties" },
    { id: "cultural", label: "Cultural" },
  ]

  const galleryImages = [
    { id: 1, category: "weddings", title: "Royal Wedding Ceremony", image: "/placeholder.svg?height=400&width=600" },
    { id: 2, category: "corporate", title: "Product Launch Event", image: "/placeholder.svg?height=400&width=600" },
    { id: 3, category: "weddings", title: "Grand Reception Hall", image: "/placeholder.svg?height=400&width=600" },
    { id: 4, category: "parties", title: "Birthday Celebration", image: "/placeholder.svg?height=400&width=600" },
    { id: 5, category: "cultural", title: "Cultural Performance", image: "/placeholder.svg?height=400&width=600" },
    { id: 6, category: "corporate", title: "Conference Setup", image: "/placeholder.svg?height=400&width=600" },
    { id: 7, category: "weddings", title: "Bridal Suite", image: "/placeholder.svg?height=400&width=600" },
    { id: 8, category: "parties", title: "Anniversary Celebration", image: "/placeholder.svg?height=400&width=600" },
    { id: 9, category: "corporate", title: "Awards Ceremony", image: "/placeholder.svg?height=400&width=600" },
    { id: 10, category: "cultural", title: "Festival Celebration", image: "/placeholder.svg?height=400&width=600" },
    { id: 11, category: "weddings", title: "Outdoor Wedding Setup", image: "/placeholder.svg?height=400&width=600" },
    { id: 12, category: "parties", title: "Cocktail Party", image: "/placeholder.svg?height=400&width=600" },
  ]

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 font-light">Our Gallery</h1>
          <p className="text-xl text-accent-sage max-w-2xl mx-auto font-light">
            Witness the grandeur and elegance of events hosted at Chenna's Convention
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-primary-dark" />
              <span className="text-primary-dark font-semibold font-light">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id
                    ? "bg-accent-sage hover:bg-accent-sage/90 text-primary-dark"
                    : "border-border-light text-primary-dark hover:bg-accent-sage hover:text-primary-dark"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="bg-accent-sage text-primary-dark mb-2 font-light">
                      {filters.find((f) => f.id === image.category)?.label}
                    </Badge>
                    <h3 className="text-xl font-serif font-bold font-light">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 font-light">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-sage font-light">
            Let us help you create memories that will last a lifetime
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-sage hover:bg-accent-sage/90 text-primary-dark font-semibold px-8 py-3 font-light"
          >
            <a href="/booking">Book Your Event Today</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
