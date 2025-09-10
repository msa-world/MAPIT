"use client";

import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { CalendarDays, Clock, Users, Building2, Mail, Phone, FileCheck, Shield, Award, Star, CheckCircle, ArrowRight, Loader2, Calendar, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  demoDate: string;
  demoTime: string;
  interests: string[];
  comments: string;
}

const companySizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-1000', label: '201-1000 employees' },
  { value: '1000+', label: '1000+ employees' }
];

const industries = [
  { value: 'technology', label: 'Technology/Software' },
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'ecommerce', label: 'E-commerce/Retail' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'finance', label: 'Finance/Banking' },
  { value: 'other', label: 'Other' }
];

const interestAreas = [
  { id: 'automated-bookkeeping', label: 'Automated Bookkeeping' },
  { id: 'tax-compliance', label: 'Tax Compliance' },
  { id: 'financial-reporting', label: 'Financial Reporting' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'ai-features', label: 'AI Features' },
  { id: 'security', label: 'Security' },
  { id: 'custom-workflows', label: 'Custom Workflows' }
];

const demoTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const demoProcess = [
  {
    step: '1',
    title: 'Schedule Your Demo',
    description: 'Choose a convenient time that works for your schedule'
  },
  {
    step: '2', 
    title: 'Personalized Walkthrough',
    description: 'See UPLINQ AI tailored to your business needs'
  },
  {
    step: '3',
    title: 'Q&A Session',
    description: 'Get all your questions answered by our experts'
  },
  {
    step: '4',
    title: 'Next Steps',
    description: 'Receive a custom proposal and implementation plan'
  }
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Live AI-powered bookkeeping demo',
    description: 'See our AI agents categorize transactions in real-time'
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Real-time financial insights',
    description: 'Experience instant financial reporting and analytics'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Integration capabilities',
    description: 'Explore 10,000+ financial data connections'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Custom workflow setup',
    description: 'Discover personalized automation for your business'
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'Q&A with our experts',
    description: 'Get answers from certified accounting professionals'
  }
];

const whyChooseHighlights = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Bank-level Security',
    description: 'SOC 2 Type II certified with 256-bit encryption'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: '99.9% Accuracy',
    description: 'AI-powered categorization with human oversight'
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Expert accounting support whenever you need it'
  }
];

export default function ScheduleDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formStep, setFormStep] = useState<'form' | 'success'>('form');

  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<DemoFormData>({
    defaultValues: {
      interests: []
    }
  });

  const watchedCompanySize = watch('companySize');
  const watchedIndustry = watch('industry');

  const handleInterestChange = useCallback((interestId: string, checked: boolean) => {
    setSelectedInterests(prev => {
      const newInterests = checked 
        ? [...prev, interestId]
        : prev.filter(id => id !== interestId);
      
      setValue('interests', newInterests);
      return newInterests;
    });
  }, [setValue]);

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    
    try {
      // Mock API call - replace with actual demo booking API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Demo booking submitted:', { ...data, interests: selectedInterests });
      
      toast.success('Demo scheduled successfully! Check your email for confirmation.');
      setFormStep('success');
      
      // Store form data in localStorage for persistence
      localStorage.setItem('demoBooking', JSON.stringify({ ...data, interests: selectedInterests }));
      
    } catch (error) {
      console.error('Demo booking failed:', error);
      toast.error('Failed to schedule demo. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    reset();
    setSelectedInterests([]);
    setFormStep('form');
    localStorage.removeItem('demoBooking');
  };

  if (formStep === 'success') {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Demo <span className="text-primary">Scheduled!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for booking your personalized UPLINQ AI demo. You'll receive a confirmation email shortly with meeting details and preparation instructions.
            </p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>Check your email for calendar invite</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>Demo duration: 30-45 minutes</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={resetForm}
                variant="outline" 
                className="border-border hover:border-primary"
              >
                Schedule Another Demo
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-primary hover:bg-primary/90"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              See UPLINQ AI in <span className="text-primary">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience a personalized demo of our AI-powered bookkeeping platform. 
              See how UPLINQ can transform your accounting operations in real-time.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Demo Booking Form - Left Column */}
            <div className="bg-surface-dark/50 backdrop-blur-lg border border-border rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-medium mb-2">Book Your Personal Demo</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get you set up with a customized demonstration.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-primary">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { 
                          required: 'First name is required',
                          minLength: { value: 2, message: 'First name must be at least 2 characters' }
                        })}
                        className="bg-input border-border focus:border-primary transition-colors"
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm animate-pulse">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { 
                          required: 'Last name is required',
                          minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                        })}
                        className="bg-input border-border focus:border-primary transition-colors"
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm animate-pulse">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="bg-input border-border focus:border-primary transition-colors"
                      placeholder="your@company.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm animate-pulse">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', {
                        pattern: {
                          value: /^[\+]?[1-9][\d]{0,15}$/,
                          message: 'Please enter a valid phone number'
                