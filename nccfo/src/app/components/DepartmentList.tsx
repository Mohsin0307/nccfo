"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  DollarSign,
  Shield,
  Users,
  ArrowRight,
  TrendingUp,
  Building2,
  CheckCircle,
  Target,
} from "lucide-react"
import Image from "next/image"

const departments = [
  {
    title: "Commercial Credit Analysis",
    description: "Business credit evaluations, risk modeling, and lending readiness.",
    fullDescription:
      "Comprehensive credit assessment services including business credit evaluations, advanced risk modeling, industry benchmarking, and lending readiness guidance to help businesses secure optimal financing.",
    icon: FileText,
    color: "blue",
    image: "https://picsum.photos/seed/picsum/400/300",
    services: [
      "Business credit evaluations",
      "Risk assessment modeling",
      "Industry benchmarking",
      "Lending readiness guidance",
    ],
  },
  {
    title: "Business Finance & Capital Office",
    description: "Loan origination, structured financing, and government-backed funding.",
    fullDescription:
      "Complete capital solutions including loan origination and management for SMEs and corporations, structured financing for equipment and real estate, plus access to government-backed funding programs.",
    icon: DollarSign,
    color: "green",
    image: "/2.jpg",
    services: [
      "Loan origination & management",
      "Structured financing solutions",
      "Equipment & real estate loans",
      "Government-backed programs",
    ],
  },
  {
    title: "Policy & Regulatory Advisory",
    description: "Market stabilization, audits, and credit reform consultation.",
    fullDescription:
      "Strategic policy guidance including credit market stabilization strategies, comprehensive financial regulation compliance audits, and legislative consulting for credit reform policies.",
    icon: Shield,
    color: "purple",
    image: "/3.jpg",
    services: [
      "Market stabilization strategies",
      "Financial regulation compliance",
      "Legislative consulting",
      "Credit reform policies",
    ],
    stats: {
      label: "Compliance Rate",
      value: "99.8%",
    },
  },
  {
    title: "Outreach & Economic Development",
    description: "Regional initiatives and business education programs.",
    fullDescription:
      "Community-focused programs including regional financing initiatives, comprehensive educational webinars for financial literacy, and strategic collaboration with local chambers and business coalitions.",
    icon: Users,
    color: "orange",
    image: "https://picsum.photos/seed/picsum/400/300",
    services: [
      "Regional financing initiatives",
      "Financial literacy programs",
      "Educational webinars",
      "Business coalition partnerships",
    ],
    stats: {
      label: "Businesses Reached",
      value: "50K+",
    },
  },
]

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:bg-green-50",
    badge: "bg-green-100 text-green-800",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
  },
}

export default function DepartmentList() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            <Building2 className="w-4 h-4 mr-2" />
            Our Departments
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Departments & Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our specialized departments work together to provide comprehensive financial solutions and support for
            businesses across the nation
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon
            const colors = colorClasses[dept.color as keyof typeof colorClasses]

            return (
              <Card
                key={dept.title}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${colors.border} ${colors.hover} overflow-hidden`}
              >
                <div className="relative">
                  {/* Department Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Stats Badge */}
                    {dept.stats && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                        <div className="text-sm font-bold text-gray-900">{dept.stats.value}</div>
                        <div className="text-xs text-gray-600">{dept.stats.label}</div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`absolute bottom-4 left-4 ${colors.bg} rounded-full p-3 shadow-lg`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {dept.title}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed mb-4">{dept.fullDescription}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Services List */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-600" />
                        Key Services
                      </h4>
                      <ul className="space-y-2">
                        {dept.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <Badge className={colors.badge}>Department {String(index + 1).padStart(2, "0")}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`${colors.text} hover:bg-transparent group-hover:translate-x-1 transition-all duration-300`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work with Our Expert Departments?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our integrated approach ensures you receive comprehensive support across all aspects of your business
              financing needs. Contact us to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Building2 className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
