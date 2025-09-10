"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Play,
  BarChart3,
  PieChart,
  FileText,
  CreditCard,
  DollarSign,
  Users,
  Target,
  Award,
  Star,
  ChevronDown,
  Calendar,
  Minus,
  Plus
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LoadingSkeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-surface-medium/50 rounded-lg ${className}`} />
);

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-surface-dark/50">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <motion.div 
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={itemVariants}>
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm bg-surface-medium/80 backdrop-blur-sm border-border/50">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            AI-Powered Automation
          </Badge>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
        >
          <span className="text-primary">Automate</span> your<br />
          Bookkeeping
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Put your accounting on autopilot with our AI-powered platform. 
          Real-time processing, 99.9% accuracy, and 24/7 automation.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-16">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Interactive Dashboard Preview */}
        <motion.div 
          variants={itemVariants}
          className="max-w-6xl mx-auto"
        >
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LoadingSkeleton className="h-64" />
              <LoadingSkeleton className="h-64" />
              <LoadingSkeleton className="h-64" />
            </div>
          ) : (
            <DashboardPreview />
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const dashboardData = [
    {
      title: "Transaction Processing",
      value: "2,847",
      change: "+12%",
      icon: <CreditCard className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      title: "Monthly Revenue",
      value: "$186.4K",
      change: "+8.5%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-accent"
    },
    {
      title: "Accuracy Rate",
      value: "99.9%",
      change: "+0.1%",
      icon: <Target className="w-6 h-6" />,
      color: "text-success-green"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="bg-surface-dark/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold">Live Dashboard</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dashboardData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface-medium/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-surface-medium/70 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-xs bg-success-green/20 text-success-green px-2 py-1 rounded-full">
                  {item.change}
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart Preview */}
        <div className="bg-surface-medium/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium">Automation Performance</h4>
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div className="grid grid-cols-7 gap-2 h-32">
            {[85, 92, 78, 94, 88, 96, 99].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-t from-primary/80 to-primary rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Automation",
      description: "Never sleep, never stop. Our AI works around the clock to keep your books accurate and up-to-date.",
      color: "text-primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "99.9% Accuracy",
      description: "Machine learning algorithms ensure precision that surpasses traditional bookkeeping methods.",
      color: "text-accent"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Errors",
      description: "Eliminate human error with intelligent categorization and automated reconciliation.",
      color: "text-success-green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-surface-dark/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            Why Choose <span className="text-primary">Automated</span> Bookkeeping?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of accounting with AI-powered automation that transforms how you manage your finances.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full bg-surface-dark/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts and financial platforms with our 10,000+ integrations.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "AI Learns Your Business",
      description: "Our machine learning algorithms analyze your transaction patterns and business rules.",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Automatic Processing",
      description: "Every transaction is automatically categorized, reconciled, and recorded in real-time.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Real-time Reports",
      description: "Access up-to-the-minute financial reports and insights whenever you need them.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our simple 4-step process that transforms your bookkeeping forever.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <Card className="h-full bg-surface-dark/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-light text-primary opacity-50">{step.number}</span>
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    {
      title: "Automated Categorization",
      description: "AI-powered transaction categorization with 99.9% accuracy using machine learning algorithms.",
      icon: <FileText className="w-8 h-8" />,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Bank Reconciliation",
      description: "Automatic bank reconciliation that matches transactions instantly and flags discrepancies.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Invoice Processing",
      description: "Smart invoice recognition and processing with automated approval workflows.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "text-success-green",
      bgColor: "bg-success-green/10"
    },
    {
      title: "Real-time Analytics",
      description: "Live financial dashboards with customizable reports and predictive insights.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      title: "Compliance Automation",
      description: "Automated tax compliance and regulatory reporting with built-in audit trails.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international transactions with automatic currency conversion and tracking.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-surface-dark/20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            Powerful <span className="text-primary">Features</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate your bookkeeping and gain real-time insights into your business finances.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full bg-surface-dark/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 500 transactions/month",
        "Basic automated categorization",
        "Bank reconciliation", 
        "Monthly financial reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with complex needs",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Up to 2,000 transactions/month",
        "Advanced AI categorization",
        "Real-time reconciliation",
        "Custom reporting dashboards",
        "Invoice processing automation",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large businesses requiring maximum automation",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited transactions",
        "Multi-entity management",
        "Custom AI training",
        "Advanced compliance tools",
        "Dedicated account manager",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-surface-dark/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </motion.p>

          <motion.div variants={itemVariants} className="inline-flex items-center bg-surface-medium/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-primary text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                billingCycle === 'annually' 
                  ? 'bg-primary text-background shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <Badge variant="secondary" className="ml-2 bg-success-green/20 text-success-green text-xs">
                Save 20%
              </Badge>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-background px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-surface-dark/60 border-primary/50 shadow-xl shadow-primary/10' 
                  : 'bg-surface-dark/40 border-border/50 hover:border-primary/30'
              }`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-8">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'annually' && (
                      <p className="text-sm text-success-green mt-2">
                        Billed annually (${plan.annualPrice * 12})
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-surface-medium hover:bg-primary hover:text-background'
                    }`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-background">
            Contact Sales for Custom Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const faqs = [
    {
      question: "How accurate is the automated categorization?",
      answer: "Our AI achieves 99.9% accuracy in transaction categorization through machine learning algorithms that continuously improve. The system learns from your business patterns and can handle complex scenarios that traditional rules-based systems cannot."
    },
    {
      question: "How long does it take to set up automated bookkeeping?",
      answer: "Most businesses are up and running within 24-48 hours. The setup process involves connecting your accounts, reviewing initial categorizations, and customizing rules for your business. Our onboarding team guides you through every step."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level 256-bit SSL encryption, multi-factor authentication, and SOC 2 Type II compliance. Your data is stored in secure, redundant data centers with continuous monitoring and regular security audits."
    },
    {
      question: "Can I integrate with my existing accounting software?",
      answer: "Yes, we integrate with over 10,000 financial platforms including QuickBooks, Xero, NetSuite, and most major banks. Our API allows for seamless data synchronization and custom integrations as needed."
    },
    {
      question: "What happens if the AI makes a mistake?",
      answer: "While rare, any errors can be easily corrected through our interface. The AI learns from corrections to prevent similar mistakes in the future. We also provide audit trails and the ability to review all automated decisions before they're finalized."
    },
    {
      question: "Do I still need an accountant?",
      answer: "Our platform handles the day-to-day bookkeeping tasks, but we recommend working with an accountant for strategic tax planning, compliance advice, and financial analysis. Many of our clients find they can focus their accountant's time on higher-value activities."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our automated bookkeeping platform.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-surface-dark/40 backdrop-blur-sm border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-surface-dark via-background to-surface-dark/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
        >
          Ready to <span className="text-primary">Automate</span><br />
          Your Bookkeeping?
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Join thousands of businesses that have transformed their accounting with AI-powered automation. 
          Get started with a free 14-day trial today.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            <Calendar className="mr-2 w-5 h-5" />
            Book a Demo
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/50 text-primary hover:bg-primary hover:text-background">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-success-green mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-success-green mr-2" />
            Setup in 24 hours
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-success-green mr-2" />
            Cancel anytime
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function AutomatedBookkeepingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}