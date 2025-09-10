"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function GeospatialServices() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const dashboardRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-black-0 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div ref={contentRef} className="space-y-8 relative z-10">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-light leading-tight text-white">
                  <span className="text-primary font-medium">Transforming</span>{" "}
                  geospatial data
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  We specialize in taking raw aerial and satellite imagery and converting it into actionable, accessible, and high-quality geospatial assets through a series of meticulous processes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">High-Resolution Orthomosaics</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We stitch together hundreds of images from drones or aerial surveys to create a single, seamless, and geographically accurate map of your project area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Precise Vector Digitization</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our experts convert raster images into usable vector features, such as points, lines, and polygons, for detailed analysis and planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Interactive Web GIS Platforms</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We develop dynamic and collaborative Web GIS applications that allow you to view, analyze, and share your geospatial data from any browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right dashboard */}
            <div ref={dashboardRef} className="relative z-10">
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-medium">Project Status & Deliverables</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Processing</span>
                  </div>
                </div>

                {/* Analysis results */}
                <div className="space-y-4 mb-6">
                  <div className="analysis-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Orthomosaic Progress</span>
                      <span className="text-primary text-sm">95%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Images Stitched</span>
                        <span className="text-green-400">450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Total Pixels</span>
                        <span className="text-blue-400">2.1B</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Final Resolution</span>
                        <span className="text-orange-400">5 cm/px</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Georeferencing Accuracy</span>
                        <span className="text-yellow-400">1.2m</span>
                      </div>
                    </div>
                  </div>

                  <div className="analysis-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Vector Digitization</span>
                      <span className="text-primary text-sm">Active</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Roads: 125 features digitized</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Buildings: 350 polygons completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">Land Use: 21% complete</span>
                      </div>
                    </div>
                  </div>

                  <div className="analysis-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Web GIS Development</span>
                      <span className="text-primary text-sm">Online</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Layers', 'Users', 'Features', 'API', 'Export', 'Mobile'].map((item, index) => (
                        <div key={item} className="text-center">
                          <div className={`w-full h-2 rounded-full mb-1 ${
                            index % 3 === 0 ? 'bg-gradient-to-r from-red-500 to-red-300' :
                            index % 3 === 1 ? 'bg-gradient-to-r from-green-500 to-green-300' :
                            'bg-gradient-to-r from-blue-500 to-blue-300'
                          }`}></div>
                          <span className="text-gray-400 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Processing stats */}
                <div className="border-t border-white/10 pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">56</div>
                      <div className="text-xs text-gray-400">Orthomosaics Created</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">12.5K</div>
                      <div className="text-xs text-gray-400">Vector Features</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">11</div>
                      <div className="text-xs text-gray-400">Web Apps Deployed</div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-sm -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
