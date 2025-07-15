"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    venueType: "",
    services: [],
    specialRequests: "",
    callbackRequested: false,
  })

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Anniversary",
    "Product Launch",
    "Conference",
    "Cultural Event",
    "Exhibition",
    "Social Gathering",
    "Entertainment Show",
    "Other",
  ]

  const venueTypes = ["Wedding Hall", "Banquet Hall", "Party Hall", "Multiple Halls"]

  const availableServices = [
    { id: "catering", label: "Premium Catering", description: "Exquisite culinary experiences" },
    { id: "photography", label: "Photography & Videography", description: "Professional documentation" },
    { id: "dj", label: "DJ & Entertainment", description: "Music and entertainment systems" },
    { id: "decoration", label: "Floral & Event Decoration", description: "Stunning venue transformation" },
    { id: "accommodation", label: "On-site Accommodation", description: "Comfortable guest rooms" },
  ]

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, serviceId] : prev.services.filter((s) => s !== serviceId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking form submitted:", formData)
    alert("Thank you for your booking request! We'll contact you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Book Your Event</h1>
          <p className="text-xl text-accent-sage max-w-2xl mx-auto">
            Let us create an unforgettable experience for your special occasion
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl border-border-light/20">
            <CardHeader className="bg-gradient-to-r from-royal-maroon/10 to-royal-navy/10">
              <CardTitle className="text-3xl font-serif text-primary-dark text-center">Event Booking Form</CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Fill out the details below and we'll get back to you with a customized quote
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary-dark border-b border-border-light/30 pb-2">
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary-dark font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="border-border-light/30 focus:border-border-light font-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary-dark font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="border-border-light/30 focus:border-border-light font-light"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-dark font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="border-border-light/30 focus:border-border-light font-light"
                      required
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary-dark border-b border-border-light/30 pb-2">
                    Event Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="text-primary-dark font-semibold">
                        Event Type *
                      </Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
                      >
                        <SelectTrigger className="border-border-light/30 focus:border-border-light font-light">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venueType" className="text-primary-dark font-semibold">
                        Venue Preference *
                      </Label>
                      <Select
                        value={formData.venueType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, venueType: value }))}
                      >
                        <SelectTrigger className="border-border-light/30 focus:border-border-light font-light">
                          <SelectValue placeholder="Select venue" />
                        </SelectTrigger>
                        <SelectContent>
                          {venueTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-primary-dark font-semibold">
                        Event Date *
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, eventDate: e.target.value }))}
                        className="border-border-light/30 focus:border-border-light font-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventTime" className="text-primary-dark font-semibold">
                        Event Time *
                      </Label>
                      <Input
                        id="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={(e) => setFormData((prev) => ({ ...prev, eventTime: e.target.value }))}
                        className="border-border-light/30 focus:border-border-light font-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestCount" className="text-primary-dark font-semibold">
                        Expected Guests *
                      </Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="e.g., 150"
                        value={formData.guestCount}
                        onChange={(e) => setFormData((prev) => ({ ...prev, guestCount: e.target.value }))}
                        className="border-border-light/30 focus:border-border-light font-light"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary-dark border-b border-border-light/30 pb-2">
                    Additional Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {availableServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-start space-x-3 p-4 border border-border-light/20 rounded-lg hover:bg-royal-gold/5 transition-colors"
                      >
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor={service.id} className="text-primary-dark font-semibold cursor-pointer">
                            {service.label}
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-primary-dark border-b border-border-light/30 pb-2">
                    Special Requests
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="text-primary-dark font-semibold">
                      Additional Requirements or Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Please describe any specific requirements, dietary restrictions, accessibility needs, or special arrangements..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                      className="border-border-light/30 focus:border-border-light min-h-[120px] font-light"
                    />
                  </div>
                </div>

                {/* Callback Option */}
                <div className="flex items-center space-x-3 p-4 bg-royal-gold/10 rounded-lg">
                  <Checkbox
                    id="callback"
                    checked={formData.callbackRequested}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, callbackRequested: checked as boolean }))
                    }
                  />
                  <Label htmlFor="callback" className="text-primary-dark font-semibold cursor-pointer">
                    Request a callback to discuss details
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent-sage hover:bg-accent-sage/90 text-primary-dark font-semibold px-12 py-3 text-lg"
                  >
                    Submit Booking Request
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    We'll review your request and contact you within 24 hours with a detailed quote
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Need Immediate Assistance?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-accent-sage" />
              <span className="text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-accent-sage" />
              <span className="text-lg">events@chennasconvention.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
