"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  DollarSign,
  Shield,
  Users,
  Building2,
  CheckCircle,
  Star,
  Award,
  Briefcase,
  Calculator,
  BookOpen,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

const mainServices = [
  {
    id: "credit-analysis",
    title: "Commercial Credit Analysis",
    description: "Comprehensive business credit evaluations and risk assessment services",
    fullDescription:
      "Our expert team provides thorough credit analysis services to help businesses understand their creditworthiness and improve their financial standing. We offer detailed evaluations, risk modeling, and strategic guidance.",
    icon: FileText,
    color: "blue",
    image: "/images/credit-analysis-service.png",
    features: [
      "Business credit evaluations and reports",
      "Advanced risk assessment modeling",
      "Industry benchmarking analysis",
      "Lending readiness guidance",
      "Credit improvement strategies",
      "Financial health assessments",
    ],
    benefits: [
      "Improved loan approval chances",
      "Better understanding of financial position",
      "Strategic credit improvement plans",
      "Industry-specific insights",
    ],
    process: [
      "Initial consultation and document review",
      "Comprehensive credit analysis",
      "Risk assessment and modeling",
      "Detailed report generation",
      "Strategic recommendations",
      "Ongoing support and monitoring",
    ],
  },
  {
    id: "business-finance",
    title: "Business Finance & Capital Office",
    description: "Complete capital solutions including loans, structured financing, and funding programs",
    fullDescription:
      "We provide comprehensive financing solutions for businesses of all sizes, from startup capital to expansion funding. Our services include loan origination, structured financing, and access to government-backed programs.",
    icon: DollarSign,
    color: "green",
    image: "/images/business-finance-service.png",
    features: [
      "Loan origination and management",
      "Structured financing solutions",
      "Equipment and real estate financing",
      "Working capital solutions",
      "Government-backed funding programs",
      "Alternative financing options",
    ],
    benefits: [
      "Access to competitive rates",
      "Flexible repayment terms",
      "Government backing and guarantees",
      "Expert financial guidance",
    ],
    process: [
      "Financial needs assessment",
      "Program matching and selection",
      "Application preparation and submission",
      "Underwriting and approval process",
      "Funding disbursement",
      "Ongoing relationship management",
    ],
  },
  {
    id: "policy-advisory",
    title: "Policy & Regulatory Advisory",
    description: "Expert guidance on compliance, regulations, and policy matters",
    fullDescription:
      "Our policy experts provide strategic guidance on regulatory compliance, market stabilization, and legislative matters. We help businesses navigate complex regulatory environments and ensure compliance.",
    icon: Shield,
    color: "purple",
    image: "/images/policy-advisory-service.png",
    features: [
      "Regulatory compliance audits",
      "Policy development and review",
      "Legislative consulting services",
      "Market stabilization strategies",
      "Risk management frameworks",
      "Compliance training programs",
    ],
    benefits: [
      "Reduced regulatory risk",
      "Expert policy guidance",
      "Proactive compliance strategies",
      "Industry best practices",
    ],
    process: [
      "Regulatory environment assessment",
      "Compliance gap analysis",
      "Policy framework development",
      "Implementation planning",
      "Training and education",
      "Ongoing monitoring and updates",
    ],
  },
  {
    id: "outreach-development",
    title: "Outreach & Economic Development",
    description: "Community programs, education, and business development initiatives",
    fullDescription:
      "We foster economic growth through community outreach, educational programs, and strategic partnerships. Our initiatives support business development and financial literacy across communities.",
    icon: Users,
    color: "orange",
    image: "/images/outreach-development-service.png",
    features: [
      "Regional financing initiatives",
      "Financial literacy programs",
      "Educational webinars and workshops",
      "Business coalition partnerships",
      "Community development projects",
      "Mentorship and advisory services",
    ],
    benefits: [
      "Enhanced business knowledge",
      "Community networking opportunities",
      "Access to resources and tools",
      "Professional development support",
    ],
    process: [
      "Community needs assessment",
      "Program design and development",
      "Partnership establishment",
      "Program implementation",
      "Impact measurement",
      "Continuous improvement",
    ],
  },
]

const additionalServices = [
  {
    title: "SBA Loan Programs",
    description: "Access to Small Business Administration loan programs",
    icon: Award,
    color: "blue",
  },
  {
    title: "Equipment Financing",
    description: "Specialized financing for business equipment and machinery",
    icon: Briefcase,
    color: "green",
  },
  {
    title: "Financial Planning",
    description: "Strategic financial planning and advisory services",
    icon: Calculator,
    color: "purple",
  },
  {
    title: "Business Education",
    description: "Comprehensive business education and training programs",
    icon: BookOpen,
    color: "orange",
  },
]

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    gradient: "from-blue-600 to-blue-800",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:bg-green-50",
    badge: "bg-green-100 text-green-800",
    gradient: "from-green-600 to-green-800",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
    gradient: "from-purple-600 to-purple-800",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
    gradient: "from-orange-600 to-orange-800",
  },
}

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [activeTab, setActiveTab] = useState("features")

  const currentService = mainServices[activeService]
  const colors = colorClasses[currentService.color as keyof typeof colorClasses]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            <Building2 className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Financial Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NCCFO provides a full spectrum of financial services designed to strengthen businesses and support economic
            growth across the nation
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            const serviceColors = colorClasses[service.color as keyof typeof colorClasses]
            const isActive = activeService === index

            return (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-2 ${
                  isActive ? `${serviceColors.border} shadow-lg scale-105` : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${serviceColors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${serviceColors.text}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <Badge className={serviceColors.badge}>Service {String(index + 1).padStart(2, "0")}</Badge>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${isActive ? "rotate-90" : ""} ${serviceColors.text}`}
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Service View */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentService.image || "/placeholder.svg"}
                alt={currentService.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-80`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="bg-white/20 p-4 rounded-2xl mb-4 inline-block">
                    <currentService.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentService.title}</h3>
                  <p className="text-white/90">{currentService.description}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentService.title}</h3>
                <p className="text-gray-600 leading-relaxed">{currentService.fullDescription}</p>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                {["features", "benefits", "process"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors capitalize ${
                      activeTab === tab ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-3">
                {activeTab === "features" &&
                  currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}

                {activeTab === "benefits" &&
                  currentService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}

                {activeTab === "process" &&
                  currentService.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <span className={`text-xs font-bold ${colors.text}`}>{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white flex-1`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className={`border-2 ${colors.border} ${colors.text} hover:${colors.bg} flex-1`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized services to meet your unique business financing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              const serviceColors = colorClasses[service.color as keyof typeof colorClasses]

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${serviceColors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-6 w-6 ${serviceColors.text}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Service Process Overview */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How We Work With You</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our streamlined process ensures you receive the best possible service and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Initial assessment of your needs" },
              { step: "2", title: "Analysis", desc: "Comprehensive evaluation and planning" },
              { step: "3", title: "Implementation", desc: "Execute the recommended solutions" },
              { step: "4", title: "Support", desc: "Ongoing monitoring and assistance" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of financial experts is ready to help you achieve your business goals. Contact us today to
              discuss your specific needs and learn how NCCFO can support your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-NCCFO-01
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
