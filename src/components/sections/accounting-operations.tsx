"use client";

import React, { useEffect, useRef } from "react";

export default function GISOperations() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const bentoRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary text-sm font-medium">Complete Platform</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-light leading-tight text-white mb-6">
              Modernizing{" "}
              <span className="text-primary font-medium">cadastral and land administration</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of accurate cadastral data and efficient digitization. Our comprehensive platform handles every aspect of spatial data analysis and remote sensing workflows.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div ref={bentoRef} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:gap-8">
              {/* Cadastral Mapping - Large card spanning 2 columns */}
              <div className="service-card lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 group hover:border-primary/30 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-4">
                      Cadastral Mapping
                    </h3>
                    
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                      Advanced processing of multi-spectral satellite imagery with 
                      AI-powered classification and change detection algorithms.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/40 rounded-lg p-3 text-center">
                      <div className="text-primary font-bold text-lg">50+</div>
                      <div className="text-gray-400 text-xs">Projects</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 text-center">
                      <div className="text-primary font-bold text-lg">99.8%</div>
                      <div className="text-gray-400 text-xs">Data Accuracy</div>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Web GIS Access */}
              <div className="service-card lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 group hover:border-primary/30 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-4">
                    Web GIS Access
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                    Secure, real-time access to your geospatial data from any device. 
                    Manage users, assets, and workflows on a centralized platform.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Active Users</span>
                      <span className="text-primary font-medium">2,500+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Asset Management</span>
                      <span className="text-primary font-medium">Integrated</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">System Uptime</span>
                      <span className="text-primary font-medium">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digitizing Services */}
              <div className="service-card lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 group hover:border-primary/30 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-3">
                    Digitizing Services
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    Convert legacy paper maps and CAD files into accurate,
                    georeferenced digital formats with high precision.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-primary font-bold text-lg">500k+</div>
                    <div className="text-gray-400 text-xs">Parcels Digitized</div>
                  </div>
                </div>
              </div>

              {/* Land Administration */}
              <div className="service-card lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 group hover:border-primary/30 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">
                        Land Administration
                      </h3>
                      <p className="text-gray-300 text-base">
                        Comprehensive solutions for land registration, land use planning,
                        and property valuation with seamless integration.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-primary font-bold text-lg">Secure</div>
                      <div className="text-gray-400 text-xs">Registry</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-primary font-bold text-lg">Efficient</div>
                      <div className="text-gray-400 text-xs">Workflows</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-4 text-center">
                      <div className="text-primary font-bold text-lg">AI</div>
                      <div className="text-gray-400 text-xs">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
