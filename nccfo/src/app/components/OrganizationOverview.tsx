"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
} from "lucide-react"
import Image from "next/image"

const focusPoints = [
  {
    text: "Serving businesses of all sizes with credit and commercial finance tools",
    icon: Building2,
    color: "blue",
    stat: "All Business Sizes",
  },
  {
    text: "Offering federally backed or institutionally managed financial programs",
    icon: Shield,
    color: "green",
    stat: "Government Backed",
  },
  {
    text: "Acting as a regulatory and advisory body for sustainable credit markets",
    icon: Target,
    color: "purple",
    stat: "Market Leadership",
  },
]

const achievements = [
  { label: "Years of Excellence", value: "Established", icon: Award },
  { label: "Success Rate", value: "High Impact", icon: TrendingUp },
  { label: "National Reach", value: "Nationwide", icon: Globe },
  { label: "Expert Team", value: "Professional", icon: Users },
]

export default function OrganizationOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePoint, setActivePoint] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % focusPoints.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-2xl">
                <Building2 className="text-white w-12 h-12" />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 p-2 rounded-full animate-pulse">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
            <Building2 className="w-4 h-4 mr-2" />
            Government Institution
          </Badge>

          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Organization Overview
          </h2>

          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1">Our Mission</Badge>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-800">Mission</span>: To strengthen the national economy by
                improving credit accessibility, enhancing commercial financing capabilities, and offering structured
                financial support programs for business entities across the country.
              </p>
            </div>
          </div>
        </div>

        {/* Focus Points Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Primary Focus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three core pillars that drive our commitment to strengthening America's business landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusPoints.map((point, index) => {
              const IconComponent = point.icon
              const isActive = activePoint === index
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 ${
                    isActive ? "border-blue-400 shadow-xl scale-105" : "border-gray-200 hover:border-blue-300"
                  } ${
                    point.color === "blue"
                      ? "hover:bg-blue-50"
                      : point.color === "green"
                        ? "hover:bg-green-50"
                        : "hover:bg-purple-50"
                  }`}
                  onClick={() => setActivePoint(index)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 ${
                          point.color === "blue"
                            ? "bg-blue-100 group-hover:bg-blue-200"
                            : point.color === "green"
                              ? "bg-green-100 group-hover:bg-green-200"
                              : "bg-purple-100 group-hover:bg-purple-200"
                        }`}
                      >
                        <IconComponent
                          className={`h-8 w-8 transition-all duration-300 ${
                            point.color === "blue"
                              ? "text-blue-600 group-hover:text-blue-700"
                              : point.color === "green"
                                ? "text-green-600 group-hover:text-green-700"
                                : "text-purple-600 group-hover:text-purple-700"
                          }`}
                        />
                      </div>
                      {isActive && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 p-1 rounded-full animate-bounce">
                          <Sparkles className="w-3 h-3 text-yellow-800" />
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <Badge
                        className={`${
                          point.color === "blue"
                            ? "bg-blue-100 text-blue-800"
                            : point.color === "green"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        } mb-3`}
                      >
                        {point.stat}
                      </Badge>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4 group-hover:text-gray-900 transition-colors">
                      {point.text}
                    </p>

                    <div className="flex items-center justify-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Active Focus Area
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Achievements</h3>
            <p className="text-gray-600">Measurable impact in strengthening America's economy</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-blue-800 mb-2">{achievement.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Visual Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Strengthening America's Economic Foundation
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              NCCFO has been at the forefront of economic development, providing crucial financial support and guidance
              to businesses across the nation. Our comprehensive approach combines government backing with innovative
              financial solutions.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Government-backed financial programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Expert regulatory and policy guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Comprehensive business support services</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Learn More About Our Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/1.jpg"
                alt="NCCFO Organization Overview"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Building Economic Strength</h4>
                <p className="text-blue-100">Empowering businesses across America</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-100">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-800">Nationwide</div>
                <div className="text-sm text-gray-600">Coverage</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
              <div className="text-center">
                <div className="text-xl font-bold text-green-800">Excellence</div>
                <div className="text-sm text-gray-600">In Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
