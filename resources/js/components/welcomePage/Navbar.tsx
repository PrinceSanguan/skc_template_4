"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedElement from "@/components/ui/animated-element"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const [isMainContactDropdownOpen, setIsMainContactDropdownOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)
  const [isSuccessStoriesDropdownOpen, setIsSuccessStoriesDropdownOpen] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)
  const navbarBgRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Navbar animation on mount
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
    })

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.7)",
        },
      )

      // Subtle pulse effect for the logo
      gsap.to(logoRef.current, {
        filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
    }

    // Navbar scroll animation with enhanced styling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(220, 38, 38, 0.3)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(220, 38, 38, 0.2)",
          duration: 0.3,
        })
      } else {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(220, 38, 38, 0.1)",
          boxShadow: "none",
          duration: 0.3,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    // Create fire particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff4b4b", "#ff8c42", "#ffdc5e", "#ff6b6b", "#ff3333"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1 // Smaller particles for navbar
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.4"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 30 - 15,
          y: -(Math.random() * 30 + 10), // Shorter rise for navbar
          opacity: 0,
          duration: 2 + Math.random() * 1, // Faster animation
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 300)

      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  // Add CSS styles directly to the head for the hover behavior
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      /* Common dropdown styles */
      .nav-dropdown {
        position: relative;
      }

      .nav-dropdown-menu {
        position: absolute;
        left: 0;
        top: 100%;
        min-width: 200px;
        background-color: rgba(0, 0, 0, 0.95);
        border: 1px solid rgba(220, 38, 38, 0.3);
        border-radius: 4px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(220, 38, 38, 0.2);
        backdrop-filter: blur(10px);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        z-index: 50;
        padding: 4px 0;
      }

      .nav-dropdown:hover .nav-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      /* Delay hiding the dropdown to give users time to move to it */
      .nav-dropdown .nav-dropdown-menu {
        transition-delay: 0s;
      }

      .nav-dropdown:hover .nav-dropdown-menu {
        transition-delay: 0s;
      }

      .nav-dropdown-menu:hover {
        transition-delay: 0s;
      }

      /* Dropdown item styles */
      .dropdown-item {
        display: block;
        padding: 8px 16px;
        color: white;
        font-size: 14px;
        transition: all 0.2s ease;
        position: relative;
      }

      .dropdown-item:hover {
        background-color: rgba(220, 38, 38, 0.2);
        color: #f87171;
      }

      /* Nested dropdown styles */
      .nested-dropdown {
        position: relative;
      }

      .nested-dropdown-menu {
        position: absolute;
        left: 100%;
        top: 0;
        min-width: 180px;
        background-color: rgba(0, 0, 0, 0.95);
        border: 1px solid rgba(220, 38, 38, 0.3);
        border-radius: 4px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(220, 38, 38, 0.2);
        backdrop-filter: blur(10px);
        opacity: 0;
        visibility: hidden;
        transform: translateX(10px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        z-index: 51;
        padding: 4px 0;
      }

      .nested-dropdown:hover .nested-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }

      /* Animated underline effect for nav items */
      .nav-link {
        position: relative;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background: linear-gradient(to right, #dc2626, #ef4444);
        transition: all 0.3s ease;
        transform: translateX(-50%);
        border-radius: 2px;
      }

      .nav-link:hover::after {
        width: 70%;
      }

      /* Arrow indicator for dropdowns */
      .dropdown-arrow {
        margin-left: 4px;
        transition: transform 0.2s ease;
      }

      .nav-dropdown:hover .dropdown-arrow {
        transform: rotate(180deg);
      }

      .nested-dropdown .nested-arrow {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        transition: transform 0.2s ease;
      }

      .nested-dropdown:hover .nested-arrow {
        transform: translateY(-50%) rotate(-90deg);
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Red top border */}
      <div className="h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      {/* Main navbar */}
      <div ref={navbarBgRef} className="bg-black bg-opacity-90 backdrop-blur-sm border-b border-red-900/20">
        {/* Particle effect container - positioned to not interfere with content */}
        <div
          ref={particlesRef}
          className="absolute inset-x-0 bottom-0 h-8 pointer-events-none overflow-hidden opacity-50"
        ></div>

        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <div ref={logoRef} className="flex items-center">
                {/* Logo emblem */}
                <div className="mr-2 w-8 h-8 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">SKC</span>
                </div>

                <AnimatedElement type="fadeIn" delay={0.1} scrollTrigger={false}>
                  <span className="text-xl font-bold">
                    <span className="text-red-600">Seigler's</span>
                    <span className="text-white"> Karate</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                      {" "}
                      Center
                    </span>
                  </span>
                </AnimatedElement>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <AnimatedElement as="div" type="fadeInDown" delay={0.2} scrollTrigger={false}>
                  <span
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors cursor-pointer"
                    onClick={() => console.log('Home clicked - navigation disabled')}
                  >
                    Home
                  </span>
                </AnimatedElement>

                {/* About Us Dropdown - Updated */}
                <AnimatedElement as="div" type="fadeInDown" delay={0.3} scrollTrigger={false}>
                  <div className="nav-dropdown">
                    <span
                      className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors flex items-center cursor-pointer"
                      onClick={() => console.log('About Us clicked - navigation disabled')}
                    >
                      About Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 dropdown-arrow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <div className="nav-dropdown-menu">
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Our Team clicked - navigation disabled')}>
                        Our Team
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Blog clicked - navigation disabled')}>
                        Blog
                      </span>
                      <div className="nested-dropdown">
                        <span className="dropdown-item flex justify-between items-center cursor-pointer" onClick={() => console.log('Contact clicked - navigation disabled')}>
                          <span>Contact</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 nested-arrow"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <div className="nested-dropdown-menu">
                          <span className="dropdown-item cursor-pointer" onClick={() => console.log('Evans, GA clicked - navigation disabled')}>
                            Evans, GA
                          </span>
                          <span className="dropdown-item cursor-pointer" onClick={() => console.log('Grovetown, GA clicked - navigation disabled')}>
                            Grovetown, GA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Programs Dropdown */}
                <AnimatedElement as="div" type="fadeInDown" delay={0.4} scrollTrigger={false}>
                  <div className="nav-dropdown">
                    <span
                      className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors flex items-center cursor-pointer"
                      onClick={() => console.log('Programs clicked - navigation disabled')}
                    >
                      Programs
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 dropdown-arrow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <div className="nav-dropdown-menu w-60">
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Lil Dragons clicked - navigation disabled')}>
                        Lil Dragons (4 — 5)
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Kids Karate clicked - navigation disabled')}>
                        Kids Karate (6 — 10)
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Teens Karate clicked - navigation disabled')}>
                        Teens Karate (11 — 13)
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Adult Kempo Karate clicked - navigation disabled')}>
                        Adult Kempo Karate (14+)
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Kickboxing clicked - navigation disabled')}>
                        Kickboxing (14+)
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Jiu Jitsu clicked - navigation disabled')}>
                        Jiu Jitsu (14+)
                      </span>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Success Stories Dropdown */}
                <AnimatedElement as="div" type="fadeInDown" delay={0.5} scrollTrigger={false}>
                  <div className="nav-dropdown">
                    <span
                      className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors flex items-center cursor-pointer"
                      onClick={() => console.log('Success Stories clicked - navigation disabled')}
                    >
                      Success Stories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 dropdown-arrow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <div className="nav-dropdown-menu">
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Written Reviews clicked - navigation disabled')}>
                        Written Reviews
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Video Testimonials clicked - navigation disabled')}>
                        Video Testimonials
                      </span>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement as="div" type="fadeInDown" delay={0.6} scrollTrigger={false}>
                  <span
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors cursor-pointer"
                    onClick={() => console.log('Franchise Info clicked - navigation disabled')}
                  >
                    Franchise Info
                  </span>
                </AnimatedElement>

                {/* Location Dropdown */}
                <AnimatedElement as="div" type="fadeInDown" delay={0.7} scrollTrigger={false}>
                  <div className="nav-dropdown">
                    <span
                      className="rounded-md bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-3 py-2 text-sm font-medium text-white transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] flex items-center cursor-pointer"
                      onClick={() => console.log('Select Location clicked - navigation disabled')}
                    >
                      Select Location
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 dropdown-arrow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <div className="nav-dropdown-menu right-0 left-auto">
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Evans, GA clicked - navigation disabled')}>
                        Evans, GA
                      </span>
                      <span className="dropdown-item cursor-pointer" onClick={() => console.log('Grovetown, GA clicked - navigation disabled')}>
                        Grovetown, GA
                      </span>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors"
              >
                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-red-900/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
              onClick={() => console.log('Home clicked - navigation disabled')}
            >
              Home
            </span>
            <div>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-red-900/20 transition-colors"
              >
                <span>About Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${isAboutDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l border-red-900/20 ml-3">
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('About Us Home clicked - navigation disabled')}
                  >
                    About Us Home
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Our Team clicked - navigation disabled')}
                  >
                    Our Team
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Blog clicked - navigation disabled')}
                  >
                    Blog
                  </span>
                  <div>
                    <button
                      onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                      className="flex justify-between w-full rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors"
                    >
                      <span>Contact</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${isContactDropdownOpen ? "transform rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isContactDropdownOpen && (
                      <div className="pl-4 space-y-1 mt-1 border-l border-red-900/20 ml-3">
                        <span
                          className="block rounded-md px-3 py-2 text-xs font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                          onClick={() => console.log('Evans, GA clicked - navigation disabled')}
                        >
                          Evans, GA
                        </span>
                        <span
                          className="block rounded-md px-3 py-2 text-xs font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                          onClick={() => console.log('Grovetown, GA clicked - navigation disabled')}
                        >
                          Grovetown, GA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-red-900/20 transition-colors"
              >
                <span>Programs</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${isProgramsDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProgramsDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l border-red-900/20 ml-3">
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Lil Dragons clicked - navigation disabled')}
                  >
                    Lil Dragons (4 — 5)
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Kids Karate clicked - navigation disabled')}
                  >
                    Kids Karate (6 — 10)
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Teens Karate clicked - navigation disabled')}
                  >
                    Teens Karate (11 — 13)
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Adult Kempo Karate clicked - navigation disabled')}
                  >
                    Adult Kempo Karate (14+)
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Kickboxing clicked - navigation disabled')}
                  >
                    Kickboxing (14+)
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Jiu Jitsu clicked - navigation disabled')}
                  >
                    Jiu Jitsu (14+)
                  </span>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsSuccessStoriesDropdownOpen(!isSuccessStoriesDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-red-900/20 transition-colors"
              >
                <span>Success Stories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${isSuccessStoriesDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSuccessStoriesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l border-red-900/20 ml-3">
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('All Success Stories clicked - navigation disabled')}
                  >
                    All Success Stories
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Written Reviews clicked - navigation disabled')}
                  >
                    Written Reviews
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Video Testimonials clicked - navigation disabled')}
                  >
                    Video Testimonials
                  </span>
                </div>
              )}
            </div>
            <span
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
              onClick={() => console.log('Franchise Info clicked - navigation disabled')}
            >
              Franchise Info
            </span>
            <div>
              <button
                onClick={() => setIsMainContactDropdownOpen(!isMainContactDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 mt-4 transition-colors"
              >
                <span>Select Location</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${isMainContactDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMainContactDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l border-red-900/20 ml-3">
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Evans, GA clicked - navigation disabled')}
                  >
                    Evans, GA
                  </span>
                  <span
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-400 hover:bg-red-900/10 transition-colors cursor-pointer"
                    onClick={() => console.log('Grovetown, GA clicked - navigation disabled')}
                  >
                    Grovetown, GA
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
