import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LoadingSpinner } from "@/components/ui/loading";
import { 
  Heart, 
  Users, 
  Zap, 
  Globe, 
  MapPin, 
  Calendar, 
  Shield, 
  Home, 
  TrendingUp, 
  Briefcase,
  Code,
  Palette,
  BarChart3,
  UserCheck,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Image from "next/image";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build scalable AI-powered financial systems that process millions of transactions daily."
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "Engineering", 
    location: "Remote",
    type: "Full-time",
    description: "Develop cutting-edge machine learning models for automated bookkeeping and financial analysis."
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Craft intuitive user experiences for complex financial data and AI-powered workflows."
  },
  {
    id: 4,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Drive growth by connecting with business owners who need AI-powered accounting solutions."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote", 
    type: "Full-time",
    description: "Build and maintain infrastructure that powers our AI-driven financial platform."
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our clients maximize value from our AI accounting platform and achieve their financial goals."
  }
];

const cultureValues = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in financial technology, constantly exploring new AI capabilities to solve complex accounting challenges."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Excellence",
    description: "Our diverse team brings together expertise from finance, AI, and engineering to create solutions that truly understand business needs."
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Customer Obsession", 
    description: "Every feature we build starts with understanding the real challenges business owners face in managing their finances and operations."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Growth Mindset",
    description: "We embrace challenges as opportunities to learn and grow, both individually and as a company building the future of finance."
  }
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness stipends"
  },
  {
    icon: <Home className="w-6 h-6 text-primary" />,
    title: "Remote First",
    description: "Work from anywhere with flexible hours and home office setup support"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Equity Package",
    description: "Competitive equity grants so you share in UPLINQ's growth and success"
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge with our unlimited paid time off policy"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development"
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Team Retreats",
    description: "Quarterly in-person gatherings to connect, collaborate, and celebrate wins"
  }
];

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/placeholder-team-1.jpg"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder", 
    image: "/placeholder-team-2.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    image: "/placeholder-team-3.jpg"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image: "/placeholder-team-4.jpg"
  }
];

const hiringProcess = [
  {
    step: 1,
    title: "Application Review",
    description: "We review your application and portfolio within 48 hours"
  },
  {
    step: 2,
    title: "Initial Interview",
    description: "30-minute conversation about your experience and interest in UPLINQ"
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Role-specific evaluation of your skills and problem-solving approach"
  },
  {
    step: 4,
    title: "Team Interview",
    description: "Meet with team members and hiring manager to discuss collaboration"
  },
  {
    step: 5,
    title: "Final Interview",
    description: "Leadership conversation about vision, culture fit, and next steps"
  }
];

const departments = ["All", "Engineering", "Design", "Sales", "Customer Success"];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">We're hiring talented people</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              Join the <span className="text-primary">Future</span> of Finance
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Help us build the next generation of AI-powered accounting solutions that 
              empower businesses to focus on what they do best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why <span className="text-primary">UPLINQ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building more than software – we're creating the foundation for how 
              businesses will manage their finances in an AI-first world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our growing team and help shape the future of AI-powered financial solutions.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <Badge
                key={dept}
                variant={dept === "All" ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                  dept === "All" 
                    ? "bg-primary text-black hover:bg-primary/90" 
                    : "border-white/20 hover:bg-white/5 hover:border-white/30"
                }`}
              >
                {dept}
              </Badge>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobListings.map((job, index) => (
              <Card 
                key={job.id}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-medium text-white">
                          {job.title}
                        </h3>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {job.department}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    
                    <div