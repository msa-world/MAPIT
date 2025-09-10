"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GISPlatformPerformance() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const chartRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Chart animation
      gsap.fromTo(
        chartRef.current,
        {
          opacity: 0,
          scale: 0.8,
          x: 50,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-number"),
        {
          textContent: 0,
        },
        {
          textContent: (i, target) => target.dataset.value,
          duration: 2,
          delay: 0.6,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <div ref={contentRef} className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight text-white">
                    Our GIS platform{" "}
                    <span className="text-primary font-medium">delivers results</span>
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Advanced cadastral mapping and efficient digitization are at your fingertips. Our platform streamlines **land administration**, **parcel management**, and **web GIS** access for your organization.
                  </p>
                </div>

                <div ref={statsRef} className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <span className="stat-number" data-value="99">0</span>%
                    </div>
                    <p className="text-gray-400 text-sm">Data Accuracy</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <span className="stat-number" data-value="10">0</span>x
                    </div>
                    <p className="text-gray-400 text-sm">Faster Digitization</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <span className="stat-number" data-value="50">0</span>+
                    </div>
                    <p className="text-gray-400 text-sm">Successful Projects</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      <span className="stat-number" data-value="24">0</span>/7
                    </div>
                    <p className="text-gray-400 text-sm">Web GIS Access</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-300 text-base">
                    Our cutting-edge solutions integrate **remote sensing** and **machine learning** to automate processes like cadastral mapping and land asset management, providing unparalleled efficiency.
                  </p>
                </div>
              </div>

              {/* Right chart */}
              <div ref={chartRef} className="relative">
                <div className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  {/* Performance comparison chart */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-white mb-6">Cadastral Digitization Comparison</h3>

                    <div className="space-y-4">
                      {/* Traditional GIS */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Manual Digitization</span>
                          <span className="text-gray-400 text-sm">100% Time</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-gray-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>

                      {/* Cloud-based Solutions */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">Outsourced Services</span>
                          <span className="text-yellow-400 text-sm">65% Time</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>

                      {/* Our Platform */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">Our Automated Platform</span>
                          <span className="text-primary text-sm font-bold">10% Time</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full animate-pulse" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Additional metrics */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">TB/min</div>
                          <div className="text-xs text-gray-400">Data Processing</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">Real-time</div>
                          <div className="text-xs text-gray-400">Web GIS</div>
                        </div>
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
      </div>
    </section>
  );
}