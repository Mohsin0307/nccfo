"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight, Building2, TrendingUp, Shield, Play, Pause } from "lucide-react"
import Image from "next/image"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  badge: string
  cta: string
  ctaSecondary?: string
  stats?: {
    label: string
    value: string
  }[]
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Empowering National Business Growth",
    subtitle: "Strengthening America's Economic Foundation",
    description:
      "NCCFO strengthens the economy by enhancing credit accessibility and enabling business financing for enterprises across the country.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    badge: "National Leadership",
    cta: "Explore Our Services",
    ctaSecondary: "Learn More",
    stats: [
      { label: "Businesses Served", value: "50K+" },
      { label: "Funding Provided", value: "$2.5B+" },
      { label: "Success Rate", value: "94%" },
    ],
  },
  {
    id: 2,
    title: "Supporting Small & Medium Enterprises",
    subtitle: "Comprehensive Financing Solutions",
    description:
      "From startup capital to expansion funding, we provide tailored financial solutions designed for sustainable business growth and long-term success.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    badge: "SME Focus",
    cta: "Apply for Funding",
    ctaSecondary: "View Programs",
    stats: [
      { label: "SME Loans", value: "25K+" },
      { label: "Average Loan", value: "$150K" },
      { label: "Approval Time", value: "7 Days" },
    ],
  },
  {
    id: 3,
    title: "Credit Market Leadership",
    subtitle: "Setting Industry Standards",
    description:
      "Leading the nation in responsible lending practices, regulatory compliance, and financial market stability through innovative policy frameworks.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    badge: "Policy Innovation",
    cta: "View Policies",
    ctaSecondary: "Contact Us",
    stats: [
      { label: "Market Share", value: "35%" },
      { label: "Compliance Rate", value: "99.8%" },
      { label: "Years Experience", value: "25+" },
    ],
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-200/20"></div>
      </div>

      {/* Main Hero Content */}
      <div
        className="relative min-h-[600px] lg:min-h-[700px] flex items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-4 py-2 text-sm font-medium">
                  <Building2 className="w-4 h-4 mr-2" />
                  {currentSlideData.badge}
                </Badge>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700">
                  {currentSlideData.subtitle}
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {currentSlideData.description}
              </p>

              {/* Stats */}
              {currentSlideData.stats && (
                <div className="grid grid-cols-3 gap-4 md:gap-8 py-6">
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl md:text-3xl font-bold text-blue-800">{stat.value}</div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {currentSlideData.ctaSecondary && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
                  >
                    {currentSlideData.ctaSecondary}
                  </Button>
                )}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <Image
                  src={currentSlideData.image || "/placeholder.svg"}
                  alt={currentSlideData.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-600 w-8" : "bg-blue-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className="bg-white/90 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
