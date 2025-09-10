"use client";

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { 
  Copy, 
  Download, 
  Palette, 
  Type, 
  FileImage, 
  MessageSquare, 
  Monitor,
  Smartphone,
  Tablet,
  Mail,
  CreditCard,
  Globe,
  Users,
  Eye,
  EyeOff,
  Star,
  Heart,
  Zap,
  Target,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  contrast?: string;
}

interface LogoVariant {
  name: string;
  preview: string;
  description: string;
  formats: string[];
}

interface TypographyExample {
  tag: string;
  size: string;
  weight: string;
  lineHeight: string;
  usage: string;
  example: string;
}

export default function BrandGuidelinesPage() {
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [selectedBackground, setSelectedBackground] = useState('dark');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [downloadingAsset, setDownloadingAsset] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(colorName);
      toast.success(`${colorName} color code copied to clipboard`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  }, []);

  const handleDownload = useCallback(async (assetName: string) => {
    setDownloadingAsset(assetName);
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success(`${assetName} downloaded successfully`);
    setDownloadingAsset(null);
  }, []);

  const colors: ColorSwatch[] = [
    {
      name: 'Primary Teal',
      hex: '#00D4AA',
      rgb: 'rgb(0, 212, 170)',
      usage: 'Primary actions, highlights, brand elements',
      contrast: 'AA+'
    },
    {
      name: 'Accent Cyan',
      hex: '#00E5FF',
      rgb: 'rgb(0, 229, 255)',
      usage: 'Secondary highlights, interactive elements',
      contrast: 'AA+'
    },
    {
      name: 'Success Green',
      hex: '#00FF88',
      rgb: 'rgb(0, 255, 136)',
      usage: 'Success states, positive indicators',
      contrast: 'AA+'
    },
    {
      name: 'Background Black',
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      usage: 'Primary background color',
      contrast: 'Perfect'
    },
    {
      name: 'Surface Dark',
      hex: '#1A1A1A',
      rgb: 'rgb(26, 26, 26)',
      usage: 'Card backgrounds, containers',
      contrast: 'AA+'
    },
    {
      name: 'Surface Medium',
      hex: '#2A2A2A',
      rgb: 'rgb(42, 42, 42)',
      usage: 'Interactive surfaces, inputs',
      contrast: 'AA'
    },
    {
      name: 'Text Primary',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      usage: 'Primary text, headings',
      contrast: 'Perfect'
    },
    {
      name: 'Text Secondary',
      hex: '#B0B0B0',
      rgb: 'rgb(176, 176, 176)',
      usage: 'Secondary text, descriptions',
      contrast: 'AA'
    },
    {
      name: 'Text Muted',
      hex: '#666666',
      rgb: 'rgb(102, 102, 102)',
      usage: 'Subtle text, placeholders',
      contrast: 'A'
    },
    {
      name: 'Border Dark',
      hex: '#333333',
      rgb: 'rgb(51, 51, 51)',
      usage: 'Subtle borders, dividers',
      contrast: 'AA'
    }
  ];

  const logoVariants: LogoVariant[] = [
    {
      name: 'Primary Logo',
      preview: '/api/placeholder/200/60',
      description: 'Main logo for dark backgrounds',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      name: 'Light Logo',
      preview: '/api/placeholder/200/60',
      description: 'Logo variant for light backgrounds',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      name: 'Dark Logo',
      preview: '/api/placeholder/200/60',
      description: 'Logo variant for very dark backgrounds',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      name: 'Monogram',
      preview: '/api/placeholder/60/60',
      description: 'Compact logo for small spaces',
      formats: ['SVG', 'PNG', 'PDF']
    }
  ];

  const typographyExamples: TypographyExample[] = [
    {
      tag: 'H1',
      size: '64px',
      weight: '300 (Light)',
      lineHeight: '1.1',
      usage: 'Hero headlines, main page titles',
      example: 'Welcome to the future of AI'
    },
    {
      tag: 'H2',
      size: '48px',
      weight: '400 (Regular)',
      lineHeight: '1.2',
      usage: 'Section headings, major titles',
      example: 'Brand Guidelines'
    },
    {
      tag: 'H3',
      size: '32px',
      weight: '500 (Medium)',
      lineHeight: '1.3',
      usage: 'Subsection titles, card headers',
      example: 'Color Palette'
    },
    {
      tag: 'Body Large',
      size: '18px',
      weight: '400 (Regular)',
      lineHeight: '1.6',
      usage: 'Primary body text, descriptions',
      example: 'This is primary body text used for main content and descriptions.'
    },
    {
      tag: 'Body Regular',
      size: '16px',
      weight: '400 (Regular)',
      lineHeight: '1.5',
      usage: 'Standard body text, navigation',
      example: 'Standard body text for general content and navigation items.'
    },
    {
      tag: 'Body Small',
      size: '14px',
      weight: '400 (Regular)',
      lineHeight: '1.4',
      usage: 'Secondary text, captions',
      example: 'Secondary text used for captions and supplementary information.'
    },
    {
      tag: 'Caption',
      size: '12px',
      weight: '400 (Regular)',
      lineHeight: '1.3',
      usage: 'Labels, metadata, fine print',
      example: 'Caption text for labels and metadata'
    }
  ];

  const brandPersonality = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovative',
      description: 'We embrace cutting-edge technology and forward-thinking solutions.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precise',
      description: 'We deliver accurate, reliable results with attention to detail.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Accessible',
      description: 'We make complex AI technology simple and approachable for everyone.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Trustworthy',
      description: 'We build long-term relationships through transparency and reliability.'
    }
  ];

  const voiceGuidelines = [
    {
      category: 'Tone',
      dos: ['Professional yet approachable', 'Confident and knowledgeable', 'Clear and concise'],
      donts: ['Overly technical jargon', 'Casual or unprofessional', 'Vague or ambiguous']
    },
    {
      category: 'Language',
      dos: ['Use active voice', 'Speak directly to the user', 'Focus on benefits'],
      donts: ['Use passive voice', 'Speak in third person', 'Focus only on features']
    },
    {
      category: 'Style',
      dos: ['Be conversational', 'Use short sentences', 'Include specific examples'],
      donts: ['Be robotic or cold', 'Use long paragraphs', 'Be overly abstract']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#00D4AA]/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              <span className="text-[#00D4AA]">Brand</span> Guidelines
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Maintain consistent brand identity across all touchpoints with our comprehensive design system and visual standards.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00D4AA] hover:bg-[#00D4AA]/80 text-black font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleDownload('Brand Kit')}
              disabled={downloadingAsset === 'Brand Kit'}
            >
              {downloadingAsset === 'Brand Kit' ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Downloading...
                </div>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download Brand Kit
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-[#00D4AA] text-[#00D4AA] mb-4">
              <FileImage className="w-4 h-4 mr-2" />
              Logo Usage
            </Badge>
            <h2 className="text-5xl font-normal mb-6">Logo Usage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our logo is the cornerstone of our brand identity. Use these