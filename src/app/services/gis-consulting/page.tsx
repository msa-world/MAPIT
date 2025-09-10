"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Target, 
  BarChart3, 
  Settings, 
  HeadphonesIcon, 
  GraduationCap, 
  Shield,
  MapPin,
  Leaf,
  Wheat,
  Route,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Award,
  ChevronRight
} from 'lucide-react'
import Navigation from '@/components/sections/navigation'
import Footer from '@/components/sections/footer'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const services = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Comprehensive GIS strategy development aligned with your business objectives and long-term vision.'
  },
  {
    icon: BarChart3,
    title: 'Spatial Analysis',
    description: 'Advanced geospatial analysis and modeling to extract actionable insights from your data.'
  },
  {
    icon: Settings,
    title: 'Technology Assessment',
    description: 'Evaluation of GIS platforms and tools to find the perfect fit for your organization.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Implementation Support',
    description: 'End-to-end guidance through GIS system deployment and integration processes.'
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Customized training programs to build internal GIS capabilities and expertise.'
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Continuous support and optimization to ensure your GIS investment delivers maximum value.'
  }
]

const expertiseAreas = [
  {
    icon: MapPin,
    title: 'Urban Planning',
    description: 'Smart city development, zoning analysis, and infrastructure planning solutions.',
    bgGradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    icon: Leaf,
    title: 'Environmental',
    description: 'Environmental impact assessment, conservation planning, and sustainability analysis.',
    bgGradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    icon: Wheat,
    title: 'Agriculture',
    description: 'Precision agriculture, crop monitoring, and land management optimization.',
    bgGradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    icon: Route,
    title: 'Transportation',
    description: 'Route optimization, traffic analysis, and transportation network planning.',
    bgGradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Utilities',
    description: 'Asset management, network analysis, and infrastructure optimization.',
    bgGradient: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Management',
    description: 'Risk assessment, disaster response planning, and emergency coordination systems.',
    bgGradient: 'bg-gradient-to-br from-red-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-red-500 to-pink-500'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'Comprehensive analysis of your current state, requirements, and objectives to establish a clear foundation.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Creation of a tailored GIS strategy and roadmap aligned with your business goals and technical requirements.'
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'Detailed system architecture and implementation plan with technology recommendations and best practices.'
  },
  {
    step: '04',
    title: 'Implementation & Integration',
    description: 'Hands-on support through deployment, configuration, and integration with existing systems and workflows.'
  },
  {
    step: '05',
    title: 'Optimization & Support',
    description: 'Ongoing performance monitoring, optimization, and support to ensure continued success and ROI.'
  }
]

const technologyPartners = [
  { name: 'Esri', logo: '/api/placeholder/120/60' },
  { name: 'QGIS', logo: '/api/placeholder/120/60' },
  { name: 'MapBox', logo: '/map box png.png' },
  { name: 'PostGIS', logo: '/api/placeholder/120/60' },
  { name: 'ArcGIS', logo: '/api/placeholder/120/60' },
  { name: 'Google Earth Engine', logo: '/api/placeholder/120/60' }
]

const caseStudies = [
  {
    title: 'Smart City Infrastructure Planning',
    client: 'Metropolitan City Council',
    description: 'Implemented comprehensive GIS solution for urban planning, resulting in 40% improved decision-making efficiency.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/urban-planning-web-gis-portal-displaying-d7630898-20250830043526.jpg',
    results: ['40% faster planning decisions', '25% cost reduction', '60% improved data accuracy'],
    category: 'Urban Planning'
  },
  {
    title: 'Environmental Impact Assessment',
    client: 'Regional Environmental Agency',
    description: 'Developed advanced spatial analysis platform for environmental monitoring and conservation planning.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/environmental-monitoring-web-gis-platfor-9f39bc8a-20250830043517.jpg',
    results: ['50% reduction in assessment time', '35% improved accuracy', '90% stakeholder satisfaction'],
    category: 'Environmental'
  },
  {
    title: 'Agricultural Optimization System',
    client: 'Large-Scale Farming Operation',
    description: 'Created precision agriculture solution with real-time monitoring and predictive analytics capabilities.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/precision-agriculture-web-platform-displ-a0680cd7-20250830043602.jpg',
    results: ['30% yield improvement', '20% resource savings', '45% operational efficiency gain'],
    category: 'Agriculture'
  }
]

export default function GISConsultingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/professional-gis-consulting-team-working-70082e76-20250830043446.jpg"
            alt="GIS Consulting Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-light mb-6"
            >
              GIS Consulting{' '}
              <span className="text-primary font-medium">Excellence</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Transform your spatial data into strategic advantage with our comprehensive GIS consulting services and industry expertise
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#services"
                className="bg-primary text-black px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link 
                href="#contact"
                className="border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-40"
          />
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-surface-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6">
              Comprehensive <span className="text-primary font-medium">GIS Services</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From strategic planning to implementation and support, we provide end-to-end GIS consulting services tailored to your unique requirements
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative p-8 bg-surface-dark/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6">
              Industry <span className="text-primary font-medium">Expertise</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep domain knowledge across multiple industries, delivering specialized GIS solutions that address sector-specific challenges
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${area.bgGradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex p-3 rounded-lg ${area.iconBg} mb-6`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Methodology Section */}
      <section className="py-20 bg-gradient-to-b from-surface-dark to-black">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6">
              Our <span className="text-primary font-medium">Methodology</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven 5-step approach that ensures successful GIS implementations and measurable business outcomes
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="flex items-start gap-8 mb-12 last:mb-0 relative"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 bg-surface-dark/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6">
              Technology <span className="text-primary font-medium">Partners</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with leading GIS technology providers to deliver best-in-class solutions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group"
              >
                <div className="p-6 bg-surface-dark/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6">
              Success <span className="text-primary font-medium">Stories</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world examples of how our GIS consulting services have transformed organizations and delivered measurable results
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 rounded-xl" />
                <div className="relative bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{study.title}</h3>
                    <p className="text-primary text-sm mb-4">{study.client}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>
                    
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-surface-dark via-black to-surface-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-light mb-6">
              Ready to Transform Your{' '}
              <span className="text-primary font-medium">GIS Strategy?</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our GIS consulting expertise can help you unlock the full potential of your spatial data and drive strategic business outcomes.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary text-black px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                View All Services
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">30-minute strategy session</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Proven Expertise</h3>
                <p className="text-sm text-muted-foreground">15+ years of GIS consulting</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Guaranteed Results</h3>
                <p className="text-sm text-muted-foreground">Measurable business outcomes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}