"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  FileText,
  DollarSign,
  Shield,
  Users,
  ExternalLink,
} from "lucide-react"

const services = [
  {
    name: "Commercial Credit Analysis",
    href: "/services/credit-analysis",
    description: "Business credit evaluations and risk assessments",
    icon: FileText,
  },
  {
    name: "Business Finance & Capital",
    href: "/services/business-finance",
    description: "Loan origination and structured financing",
    icon: DollarSign,
  },
  {
    name: "Policy & Regulatory Advisory",
    href: "/services/policy-advisory",
    description: "Compliance and regulatory guidance",
    icon: Shield,
  },
  {
    name: "Outreach & Development",
    href: "/services/outreach",
    description: "Community programs and education",
    icon: Users,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span>1-800-NCCFO-01</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span>info@nccfo.gov</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Badge className="bg-green-600 text-white hover:bg-green-700">
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></span>
              Government Backed
            </Badge>
            <span className="text-blue-200">Est. 1999</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white border-b shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl bg-white/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-blue-900 p-2 rounded-lg group-hover:bg-blue-800 transition-colors duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                  NCCFO
                </h1>
                <p className="text-xs text-gray-500 leading-none">National Credit Commercial Finance Office</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/about") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                    pathname.startsWith("/services") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                  }`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
                      <p className="text-xs text-gray-500 mt-1">Comprehensive financial solutions for your business</p>
                    </div>
                    <div className="py-2">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
                          >
                            <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                              <IconComponent className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View All Services
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/departments"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/departments") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                }`}
              >
                Departments
              </Link>

              <Link
                href="/use-cases"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/use-cases") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                }`}
              >
                Use Cases
              </Link>

              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/contact") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                Apply Now
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/") ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/about") ? "text-blue-600" : "text-gray-700"
                }`}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <p className="text-base font-medium text-gray-700 mb-2">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/departments"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/departments") ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Departments
              </Link>

              <Link
                href="/use-cases"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/use-cases") ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Use Cases
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive("/contact") ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  Apply Now
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Consultation</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
