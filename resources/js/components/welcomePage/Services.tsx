"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      // Title animation
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Cards animation with improved stagger
      gsap.fromTo(
        section.querySelectorAll(".program-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        },
      )
    }
  }, [])

  const services = [
    {
      id: 1,
      title: "LIL DRAGONS",
      ages: "AGES 4-5",
      description:
        "Empower your child with martial arts classes designed to channel their energy into focus and fun.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      image: "/Images/team/TN-Lil-Dragons.jpg",
      imageAlt: "Lil Dragons martial arts class",
    },
    {
      id: 2,
      title: "KIDS KARATE",
      ages: "AGES 6-10",
      description:
        "Build confidence, discipline, resilience, and essential self-defense skills through structured training.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      image: "/Images/team/TN-Kids-Karate.jpg",
      imageAlt: "Kids Karate class",
    },
    {
      id: 3,
      title: "TEENS KARATE",
      ages: "AGES 11-13",
      description:
        "Support your teenager's transition to adulthood with training that enhances emotional intelligence and unlocks potential.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      image: "/Images/team/TN-Teen-Karate.jpg",
      imageAlt: "Teens Karate class",
    },
    {
      id: 4,
      title: "ADULT KEMPO",
      ages: "AGES 14+",
      description:
        "Experience a dynamic fusion of fitness and self-defense in a challenging and supportive environment.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      image: "/Images/team/ADULTKEMPO.jpg",
      imageAlt: "Adult Kempo Karate class",
    },
    {
      id: 5,
      title: "KICKBOXING",
      ages: "AGES 14+",
      description:
        "Build power, strength, and confidence through high-energy kickboxing sessions led by expert instructors.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
      image: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      imageAlt: "Kickboxing class",
    },
    {
      id: 6,
      title: "JIU JITSU",
      ages: "AGES 14+",
      description:
        "Transform your fitness, resilience, and mental strength through the strategic art of Tetsu Shin Ryu Jiu-Jitsu.",
      icon: (
        <svg
          className="h-10 w-10 text-[#ff3a2f]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      image: "/Images/team/JIU JITSU.jpg",
      imageAlt: "Jiu Jitsu class",
    },
  ]

  return (
    <section id="programs" className="relative py-20 text-[#1e2025] bg-white" ref={sectionRef}>
      {/* Sharp red line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3a2f]"></div>
      
      {/* Subtle abstract elements */}
      <div className="absolute top-40 right-5 w-72 h-72 bg-[#ff3a2f]/[0.02] -z-0"
           style={{ clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)" }}></div>
      <div className="absolute bottom-80 left-20 w-36 h-36 rounded-full bg-[#ff3a2f]/[0.03] -z-0"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-[#ff3a2f]/[0.01] -z-0"
           style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-[#ff3a2f]/[0.02] -z-0"
           style={{ clipPath: "circle(40% at 50% 50%)" }}></div>

      <div className="container relative mx-auto px-4">
        <div className="title-container mb-16">
          {/* Sharp, minimalist title treatment */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-[#ff3a2f]"></div>
            <span className="text-[#ff3a2f] uppercase tracking-widest text-sm font-bold ml-4">OUR PROGRAMS</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight mb-6 text-[#1e2025]">
            MARTIAL ARTS <span className="text-[#ff3a2f]">TRAINING</span>
          </h2>
          <p className="max-w-2xl text-gray-700 leading-relaxed">
            Discover the perfect martial arts discipline at SKC. Our diverse programs are structured to 
            accommodate all ages and skill levels, with expert instruction and personalized attention.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="program-card bg-white relative group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image with sharp angular clip */}
              <div className="relative overflow-hidden" 
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-64 object-cover"
                  style={{ filter: "contrast(1.1)" }}
                />
                
                {/* Subtle diagonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e2025]/20 via-transparent to-transparent"></div>
                
                {/* Age badge */}
                <div className="absolute top-0 right-0 bg-[#ff3a2f] py-1 px-4"
                     style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }}>
                  <span className="text-white text-xs font-bold tracking-wider">{service.ages}</span>
                </div>
              </div>
              
              {/* Content area with sharp design on white background */}
              <div className="mt-4 pb-8 relative px-4">
                {/* Red line separator */}
                <div className="w-8 h-1 bg-[#ff3a2f] mb-4"></div>
                
                <h3 className="text-xl font-bold text-[#1e2025] tracking-wide mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.description}</p>
                
                {/* Sharp angular button */}
                <button 
                  className="absolute bottom-0 right-4 bg-white text-[#ff3a2f] font-bold uppercase text-xs tracking-widest flex items-center group-hover:text-[#1e2025] transition-colors duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                {/* Bottom accent line that animates on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3a2f] group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          {/* Sharp, angular button */}
          <button
            className="group bg-[#ff3a2f] hover:bg-[#ff3a2f]/90 px-8 py-4 text-white font-bold uppercase tracking-wide transition-all duration-300"
            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
          >
            <span className="flex items-center">
              VIEW ALL PROGRAMS
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </span>
          </button>
        </div>
      </div>
      
      {/* Minimal location indicator for white background */}
      <div className="absolute bottom-6 right-6 flex items-center">
        <div className="w-2 h-2 bg-[#ff3a2f] mr-2"></div>
        <span className="text-[#1e2025] text-sm tracking-widest uppercase">AUGUSTA, GA</span>
      </div>
    </section>
  )
}

export default Services