"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, type ReactNode, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { ElementType } from "react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animated component wrapper
interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft"
  as?: ElementType
}

const AnimatedElement = ({ 
  children, 
  delay = 0, 
  className = "", 
  animation = "fadeIn",
  as: Component = "div" 
}: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationProps = {}

    switch (animation) {
      case "fadeIn":
        animationProps = { opacity: 0, y: 0 }
        break
      case "slideUp":
        animationProps = { opacity: 0, y: 30 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -20 }
        break
      case "slideLeft":
        animationProps = { opacity: 0, x: 20 }
        break
    }

    gsap.fromTo(el, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
    })
  }, [delay, animation])

  return (
    <Component ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </Component>
  )
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Fade in the hero section
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.inOut" })
  }, [])

  return (
    <div ref={heroRef} className="relative bg-white pt-20 pb-28 overflow-hidden">
      {/* Sharp red line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3a2f]"></div>
      
      {/* Subtle abstract elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#ff3a2f]/[0.03] -z-0"></div>
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-[#ff3a2f]/[0.02] -z-0"
           style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}></div>
      <div className="absolute top-40 left-1/4 w-20 h-20 bg-[#ff3a2f]/[0.03] -z-0"
           style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-[#ff3a2f]/[0.01] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Two column layout with sharp divisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column - Strong typography */}
          <div className="flex flex-col justify-center">
            <AnimatedElement delay={0.2} animation="slideRight">
              {/* Bold, sharp heading with strong contrast */}
              <h1 className="text-5xl lg:text-7xl font-bold text-[#1e2025] tracking-tight leading-none mb-8">
                MARTIAL 
                <span className="block mt-2">
                  <span className="text-[#ff3a2f]">ARTS</span> TRAINING
                </span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.3} animation="slideRight">
              {/* Sharp dividing line */}
              <div className="w-24 h-1 bg-[#ff3a2f] mb-8"></div>
            </AnimatedElement>

            <AnimatedElement delay={0.4} animation="fadeIn">
              <p className="text-gray-700 text-lg mb-10 max-w-md">
                Disciplined training. Expert instruction. 
                Forge your body and mind at Seigler's Karate Center.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.5} animation="slideUp">
              {/* Sharp, angular button with hover effect */}
              <Button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group bg-[#ff3a2f] hover:bg-[#ff3a2f]/90 px-8 py-4 text-white font-bold uppercase tracking-wide w-fit transition-all duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
              >
                <span className="flex items-center">
                  Begin Training
                  <ArrowRight 
                    className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                    size={18}
                  />
                </span>
              </Button>
            </AnimatedElement>
          </div>

          {/* Right column - Bold image treatment */}
          <div className="relative">
            <AnimatedElement delay={0.3} animation="fadeIn">
              {/* Sharp-edged container */}
              <div className="relative aspect-[3/4] overflow-hidden shadow-lg"
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}>
                {/* High contrast image */}
                <img
                  src="/Images/team/ADULTKEMPO.jpg"
                  alt="Martial Arts Training"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.1)" }}
                />
                
                {/* Subtle diagonal overlay for white background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e2025]/20 via-transparent to-transparent"></div>
                
                {/* Strong accent line */}
                <div className="absolute bottom-0 left-0 w-3/4 h-2 bg-[#ff3a2f]"></div>
              </div>
              
              {/* Angular decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <div className="w-full h-full border-t-4 border-r-4 border-[#ff3a2f]"></div>
              </div>
              
              {/* Sharp year badge with white background */}
              <div className="absolute -bottom-5 -left-5 bg-white border-2 border-[#ff3a2f] py-2 px-6 shadow-md">
                <span className="text-[#1e2025] font-bold">EST. 1982</span>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
      
      {/* Minimal location indicator adjusted for white background */}
      <div className="absolute bottom-6 right-6 flex items-center">
        <div className="w-2 h-2 bg-[#ff3a2f] mr-2"></div>
        <span className="text-[#1e2025] text-sm tracking-widest uppercase">AUGUSTA, GA</span>
      </div>
    </div>
  )
}

export default Hero