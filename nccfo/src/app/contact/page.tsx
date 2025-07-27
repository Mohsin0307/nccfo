"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  FileText,
  DollarSign,
  Shield,
  Users,
  Calendar,
  Headphones,
  Star,
  ChevronDown,
  Menu,
  X
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our financial experts",
    contact: "1-800-NCCFO-01",
    subtext: "(1-800-622-3601)",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM EST",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions and we'll respond within 24 hours",
    contact: "info@nccfo.gov",
    subtext: "General inquiries",
    hours: "Response within 24 hours",
    color: "green",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet with our team in person",
    contact: "123 Constitution Blvd",
    subtext: "Washington, DC 20001",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM EST",
    color: "purple",
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a personalized meeting with our experts",
    contact: "Online Booking",
    subtext: "Free 30-minute consultation",
    hours: "Available 7 days a week",
    color: "orange",
  },
]

const departments = [
  {
    name: "Commercial Credit Analysis",
    icon: FileText,
    email: "credit@nccfo.gov",
    phone: "1-800-622-3602",
    description: "Credit evaluations and risk assessments",
  },
  {
    name: "Business Finance & Capital",
    icon: DollarSign,
    email: "finance@nccfo.gov",
    phone: "1-800-622-3603",
    description: "Loan origination and structured financing",
  },
  {
    name: "Policy & Regulatory Advisory",
    icon: Shield,
    email: "policy@nccfo.gov",
    phone: "1-800-622-3604",
    description: "Compliance and regulatory guidance",
  },
  {
    name: "Outreach & Economic Development",
    icon: Users,
    email: "outreach@nccfo.gov",
    phone: "1-800-622-3605",
    description: "Community programs and education",
  },
]

const officeLocations = [
  {
    name: "Headquarters - Washington, DC",
    address: "123 Constitution Blvd, Washington, DC 20001",
    phone: "1-800-NCCFO-01",
    isHeadquarters: true,
  },
  {
    name: "Regional Office - New York",
    address: "456 Wall Street, New York, NY 10005",
    phone: "1-800-622-3610",
    isHeadquarters: false,
  },
  {
    name: "Regional Office - Chicago",
    address: "789 LaSalle Street, Chicago, IL 60604",
    phone: "1-800-622-3620",
    isHeadquarters: false,
  },
]

const faqs = [
  {
    question: "How quickly can I get a response?",
    answer: "We respond to all inquiries within 24 hours during business days. Urgent matters are typically addressed within 4-6 hours."
  },
  {
    question: "What documents do I need?",
    answer: "Required documents vary by service, but typically include financial statements, business plan, and tax returns. We'll provide a specific checklist after initial consultation."
  },
  {
    question: "Is there a consultation fee?",
    answer: "Initial consultations are free for all potential clients. We believe in understanding your needs before discussing any fees or commitments."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes! We have specialized programs for startups and early-stage businesses, including SBA loans and alternative financing options."
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const toggleFaq = (index: number | null ) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center shadow-2xl border-0">
          <CardContent className="pt-8 pb-8">
            <div className="bg-gradient-to-r from-green-400 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for contacting NCCFO. We've received your inquiry and will respond within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-lg backdrop-blur-sm">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">NCCFO</h1>
                <p className="text-xs sm:text-sm opacity-90 hidden sm:block">National Credit Commercial Finance Office</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="/" className="hover:text-blue-200 transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="/services" className="hover:text-blue-200 transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="/departments" className="hover:text-blue-200 transition-colors duration-200 font-medium">
                Departments
              </a>
              <a href="/contact" className="text-blue-200 font-medium border-b-2 border-blue-200 pb-1">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20">
              <nav className="flex flex-col space-y-3">
                <a href="/" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">
                  Home
                </a>
                <a href="/services" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">
                  Services
                </a>
                <a href="/departments" className="hover:text-blue-200 transition-colors duration-200 font-medium py-2">
                  Departments
                </a>
                <a href="/contact" className="text-blue-200 font-medium py-2">
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 py-2 text-sm sm:text-base">
              <Headphones className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NCCFO</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to strengthen your business with our financial expertise? Our team of professionals is here to help
              you navigate credit solutions, financing options, and regulatory guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Choose the contact method that works best for you. Our team is ready to assist with all your business
              financing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 text-center border-0 shadow-lg hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                        method.color === "blue"
                          ? "bg-gradient-to-r from-blue-100 to-blue-200"
                          : method.color === "green"
                            ? "bg-gradient-to-r from-green-100 to-green-200"
                            : method.color === "purple"
                              ? "bg-gradient-to-r from-purple-100 to-purple-200"
                              : "bg-gradient-to-r from-orange-100 to-orange-200"
                      }`}
                    >
                      <IconComponent
                        className={`h-7 w-7 sm:h-9 sm:w-9 ${
                          method.color === "blue"
                            ? "text-blue-600"
                            : method.color === "green"
                              ? "text-green-600"
                              : method.color === "purple"
                                ? "text-purple-600"
                                : "text-orange-600"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-6">
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">{method.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{method.contact}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{method.subtext}</p>
                      <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 pt-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        <span className="text-center">{method.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="john.smith@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="credit-analysis">Commercial Credit Analysis</option>
                    <option value="business-finance">Business Finance & Capital</option>
                    <option value="policy-advisory">Policy & Regulatory Advisory</option>
                    <option value="outreach">Outreach & Economic Development</option>
                    <option value="general">General Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                    placeholder="Please describe your business needs and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Offices */}
            <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
              {/* Our Locations */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Our Locations</h3>
                <div className="space-y-4 lg:space-y-6">
                  {officeLocations.map((office, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3">
                              <h4 className="font-bold text-gray-900 text-base sm:text-lg">{office.name}</h4>
                              {office.isHeadquarters && (
                                <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs mt-1 sm:mt-0 w-fit">
                                  HQ
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">{office.address}</p>
                            <p className="text-sm sm:text-base text-blue-600 font-semibold">{office.phone}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Department Contacts</h3>
                <div className="space-y-3 lg:space-y-4">
                  {departments.map((dept, index) => {
                    const IconComponent = dept.icon
                    return (
                      <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{dept.name}</h4>
                              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{dept.description}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-1">{dept.phone}</p>
                              <p className="text-xs text-gray-500 break-all">{dept.email}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-base sm:text-lg">Quick answers to common questions about our services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg pr-4">{faq.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}