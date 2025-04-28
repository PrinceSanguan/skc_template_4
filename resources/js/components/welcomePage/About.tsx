"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const image = imageRef.current
    const content = contentRef.current
    const stats = statsRef.current

    if (section && image && content && stats) {
      // Title animation with improved easing
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Image animation with more dynamic movement
      gsap.fromTo(
        image,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Text content animation with staggered reveal
      gsap.fromTo(
        content.querySelectorAll("h3, p"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        },
      )

      // Stats animation with sharp reveal
      gsap.fromTo(
        stats.querySelectorAll(".stat-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stats,
            start: "top 90%",
          },
        },
      )
    }
  }, [])

  return (
    <section id="about" className="relative py-20 text-[#1e2025] bg-white" ref={sectionRef}>
      {/* Sharp red line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3a2f]"></div>
      
      {/* Subtle abstract elements */}
      <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-[#ff3a2f]/[0.02] -z-0"></div>
      <div className="absolute top-1/3 left-0 w-40 h-40 bg-[#ff3a2f]/[0.03] -z-0"
           style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}></div>
      <div className="absolute top-20 right-1/4 w-24 h-24 bg-[#ff3a2f]/[0.02] -z-0"
           style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-[#ff3a2f]/[0.01] -z-0"
           style={{ clipPath: "circle(50% at 50% 50%)" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16">
          {/* Sharp, minimalist title treatment */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-[#ff3a2f]"></div>
            <span className="text-[#ff3a2f] uppercase tracking-widest text-sm font-bold ml-4">OUR LEGACY</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-[#1e2025]">
            ABOUT <span className="text-[#ff3a2f]">OUR DOJO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Image column with sharp edges */}
          <div className="md:col-span-5" ref={imageRef}>
            <div className="relative w-full overflow-hidden shadow-lg" 
                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}>
              {/* Main image with contrast filter */}
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg')",
                  filter: "contrast(1.1)" 
                }}
              ></div>

              {/* Subtle diagonal overlay for white background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e2025]/20 via-transparent to-transparent"></div>

              {/* Year badge - sharp, angular */}
              <div className="absolute top-0 right-0 bg-[#ff3a2f] px-6 py-3"
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }}>
                <span className="text-white font-bold tracking-wider">EST. 1982</span>
              </div>

              {/* Bold red line accent */}
              <div className="absolute bottom-0 left-0 w-2/3 h-2 bg-[#ff3a2f]"></div>
            </div>
            
            {/* Angular decorative corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24">
              <div className="w-full h-full border-b-4 border-l-4 border-[#ff3a2f]"></div>
            </div>
          </div>

          {/* Content column with minimalist design */}
          <div className="md:col-span-7" ref={contentRef}>
            <div className="mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6 text-[#1e2025]">OUR STORY</h3>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We
                  instill life skills like focus, discipline & respect, helping students achieve success on and off the
                  mat.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At SKC, we make it easy for you and your family to find your best selves through martial arts. Our skilled instructors are
                  committed to understanding your goals and guiding you towards success in a dynamic, engaging, and
                  supportive atmosphere.
                </p>
              </div>
            </div>

            {/* Stats with sharp, minimalist design on white background */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" ref={statsRef}>
              <div className="stat-item">
                <div className="flex flex-col">
                  <Clock className="text-[#ff3a2f] mb-2" size={24} />
                  <span className="text-3xl font-bold text-[#1e2025]">40+</span>
                  <div className="w-8 h-1 bg-[#ff3a2f] my-2"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Years</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="flex flex-col">
                  <Users className="text-[#ff3a2f] mb-2" size={24} />
                  <span className="text-3xl font-bold text-[#1e2025]">1000+</span>
                  <div className="w-8 h-1 bg-[#ff3a2f] my-2"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Students</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="flex flex-col">
                  <MapPin className="text-[#ff3a2f] mb-2" size={24} />
                  <span className="text-3xl font-bold text-[#1e2025]">2+</span>
                  <div className="w-8 h-1 bg-[#ff3a2f] my-2"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Locations</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="flex flex-col">
                  <Award className="text-[#ff3a2f] mb-2" size={24} />
                  <span className="text-3xl font-bold text-[#1e2025]">6+</span>
                  <div className="w-8 h-1 bg-[#ff3a2f] my-2"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Programs</span>
                </div>
              </div>
            </div>

            {/* Sharp, angular button */}
            <div>
              <Button
                className="group bg-[#ff3a2f] hover:bg-[#ff3a2f]/90 px-8 py-4 text-white font-bold uppercase tracking-wide transition-all duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
              >
                <span className="flex items-center">
                  Learn More
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={18}
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal location indicator adjusted for white background */}
      <div className="absolute bottom-6 right-6 flex items-center">
        <div className="w-2 h-2 bg-[#ff3a2f] mr-2"></div>
        <span className="text-[#1e2025] text-sm tracking-widest uppercase">AUGUSTA, GA</span>
      </div>
    </section>
  )
}

export default About