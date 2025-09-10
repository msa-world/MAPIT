"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, User, BookOpen, Filter, ArrowRight, Mail, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
  color: string;
}

const categories: Category[] = [
  { id: 'all', name: 'All', color: 'bg-primary text-primary-foreground' },
  { id: 'ai-tech', name: 'AI & Technology', color: 'bg-accent text-accent-foreground' },
  { id: 'finance', name: 'Finance', color: 'bg-chart-4 text-black' },
  { id: 'startup', name: 'Startup', color: 'bg-chart-3 text-black' },
  { id: 'product', name: 'Product Updates', color: 'bg-chart-2 text-black' },
  { id: 'insights', name: 'Industry Insights', color: 'bg-chart-5 text-white' },
];

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Accounting and Finance',
    excerpt: 'Explore how artificial intelligence is revolutionizing the accounting industry, from automated bookkeeping to predictive financial analytics.',
    content: 'AI is transforming accounting...',
    category: 'ai-tech',
    author: {
      name: 'Sarah Chen',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-15',
    readTime: 8,
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: '2',
    title: 'How UPLINQ AI Reduces Bookkeeping Errors by 88%',
    excerpt: 'Discover the breakthrough technology behind UPLINQ\'s industry-leading accuracy rates and how it transforms financial operations.',
    content: 'Our AI technology...',
    category: 'product',
    author: {
      name: 'Michael Rodriguez',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-12',
    readTime: 6,
    image: '/api/placeholder/600/400'
  },
  {
    id: '3',
    title: 'Top 10 Financial Integrations Every Business Needs',
    excerpt: 'A comprehensive guide to the most essential financial software integrations that can streamline your business operations.',
    content: 'Financial integrations are crucial...',
    category: 'finance',
    author: {
      name: 'Emily Watson',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-10',
    readTime: 12,
    image: '/api/placeholder/600/400'
  },
  {
    id: '4',
    title: 'Real-time Financial Insights: A Game Changer',
    excerpt: 'Learn how real-time financial data processing is revolutionizing decision-making for modern businesses.',
    content: 'Real-time insights provide...',
    category: 'insights',
    author: {
      name: 'David Kim',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-08',
    readTime: 7,
    image: '/api/placeholder/600/400'
  },
  {
    id: '5',
    title: 'The Evolution of Automated Bookkeeping',
    excerpt: 'Trace the journey from manual ledgers to AI-powered bookkeeping systems and what the future holds.',
    content: 'Bookkeeping has evolved dramatically...',
    category: 'ai-tech',
    author: {
      name: 'Lisa Thompson',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-05',
    readTime: 10,
    image: '/api/placeholder/600/400'
  },
  {
    id: '6',
    title: 'Tax Compliance Made Simple with AI',
    excerpt: 'How artificial intelligence is simplifying tax compliance processes and reducing the burden on finance teams.',
    content: 'Tax compliance doesn\'t have to be complex...',
    category: 'finance',
    author: {
      name: 'James Wilson',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-03',
    readTime: 9,
    image: '/api/placeholder/600/400'
  },
  {
    id: '7',
    title: 'Building Scalable FinTech Solutions',
    excerpt: 'Key principles and best practices for developing financial technology solutions that can grow with your business.',
    content: 'Scalability is crucial in FinTech...',
    category: 'startup',
    author: {
      name: 'Anna Martinez',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-01',
    readTime: 11,
    image: '/api/placeholder/600/400'
  },
  {
    id: '8',
    title: 'Data Security in Financial AI Applications',
    excerpt: 'Understanding the critical security measures needed to protect sensitive financial data in AI-powered applications.',
    content: 'Security is paramount in financial AI...',
    category: 'ai-tech',
    author: {
      name: 'Robert Chang',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2023-12-28',
    readTime: 8,
    image: '/api/placeholder/600/400'
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const heroRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  // Simulate loading posts
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Filter posts by category and search
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if