"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Car, Users, Bed } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Royal Avenue", "Premium District", "City - 560001"],
      color: "text-accent-sage",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-accent-sage",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["events@chennasconvention.com", "info@chennasconvention.com"],
      color: "text-accent-sage",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sun: 9:00 AM - 10:00 PM", "24/7 Event Support"],
      color: "text-accent-sage",
    },
  ]

  const quickFacts = [
    { icon: Users, label: "Capacity", value: "Up to 2000 Guests" },
    { icon: Car, label: "Parking", value: "500+ Vehicles" },
    { icon: Bed, label: "Accommodation", value: "On-site Available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-accent-sage max-w-2xl mx-auto font-light">
            Get in touch with our team to discuss your event requirements
          </p>
        </div>
      </section>

      {/* Unique Contact Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Interactive Contact Hub */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-light text-primary-dark mb-4">Let's Start a Conversation</h2>
              <p className="text-xl text-primary-gray font-light">Choose how you'd like to connect with us</p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Instant Connect */}
              <Card className="p-8 text-center hover-minimal border-accent-sage/20 bg-gradient-to-br from-accent-sage/5 to-transparent">
                <div className="bg-accent-sage/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Phone className="h-10 w-10 text-accent-sage" />
                </div>
                <h3 className="text-2xl font-serif font-light text-primary-dark mb-4">Instant Connect</h3>
                <p className="text-primary-gray font-light mb-6">Speak directly with our event specialists</p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-light text-primary-dark">+91 98765 43210</p>
                  <p className="text-sm text-primary-gray">Available 9 AM - 10 PM</p>
                </div>
                <Button className="w-full bg-accent-sage hover:bg-accent-sage/90 text-white rounded-none font-light">
                  Call Now
                </Button>
              </Card>

              {/* Digital Message */}
              <Card className="p-8 text-center hover-minimal border-accent-sage/20 bg-gradient-to-br from-primary-gray/5 to-transparent">
                <div className="bg-primary-gray/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-primary-gray" />
                </div>
                <h3 className="text-2xl font-serif font-light text-primary-dark mb-4">Digital Message</h3>
                <p className="text-primary-gray font-light mb-6">
                  Send us your requirements and get a detailed response
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-light text-primary-dark">events@chennasconvention.com</p>
                  <p className="text-sm text-primary-gray">Response within 4 hours</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary-gray text-primary-gray hover:bg-primary-gray hover:text-white rounded-none font-light bg-transparent"
                >
                  Send Email
                </Button>
              </Card>

              {/* Visit Us */}
              <Card className="p-8 text-center hover-minimal border-accent-sage/20 bg-gradient-to-br from-primary-dark/5 to-transparent">
                <div className="bg-primary-dark/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-serif font-light text-primary-dark mb-4">Visit Our Venue</h3>
                <p className="text-primary-gray font-light mb-6">Experience the space and meet our team in person</p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg font-light text-primary-dark">123 Royal Avenue</p>
                  <p className="text-sm text-primary-gray">Premium District, City</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white rounded-none font-light bg-transparent"
                >
                  Get Directions
                </Button>
              </Card>
            </div>

            {/* Quick Inquiry Form */}
            <Card className="shadow-xl border-accent-sage/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-light text-primary-dark mb-2">Quick Inquiry</h3>
                  <p className="text-primary-gray font-light">Tell us about your event in a few words</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="border-0 border-b-2 border-border-light focus:border-accent-sage rounded-none bg-transparent font-light text-lg py-3"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="border-0 border-b-2 border-border-light focus:border-accent-sage rounded-none bg-transparent font-light text-lg py-3"
                      />
                    </div>
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="border-0 border-b-2 border-border-light focus:border-accent-sage rounded-none bg-transparent font-light text-lg py-3"
                    required
                  />

                  <Input
                    placeholder="Event Type (Wedding, Corporate, Party, etc.)"
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    className="border-0 border-b-2 border-border-light focus:border-accent-sage rounded-none bg-transparent font-light text-lg py-3"
                    required
                  />

                  <Textarea
                    placeholder="Tell us about your vision, guest count, preferred dates, or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="border-0 border-b-2 border-border-light focus:border-accent-sage rounded-none bg-transparent font-light text-lg py-3 min-h-[120px] resize-none"
                    required
                  />

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-accent-sage hover:bg-accent-sage/90 text-white font-light px-12 py-4 text-lg rounded-none"
                    >
                      Send Inquiry
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Location Preview */}
            <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-light text-primary-dark mb-6">Find Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent-sage mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-light text-primary-dark">123 Royal Avenue</p>
                      <p className="text-primary-gray font-light">Premium District, City - 560001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-accent-sage flex-shrink-0" />
                    <div>
                      <p className="text-lg font-light text-primary-dark">Open Daily</p>
                      <p className="text-primary-gray font-light">9:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-80 bg-gradient-to-br from-accent-sage/10 to-primary-gray/10 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-accent-sage mx-auto mb-4" />
                    <p className="text-primary-dark font-light text-lg">Interactive Map</p>
                    <p className="text-primary-gray font-light">Click to view directions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-sage font-light">
            Our experienced team is here to make your vision a reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent-sage hover:bg-accent-sage/90 text-primary-dark font-semibold px-8 py-3 font-light"
            >
              <a href="/booking">Book Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent-sage text-accent-sage hover:bg-accent-sage hover:text-primary-dark px-8 py-3 bg-transparent font-light"
            >
              <a href="/gallery">View Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
