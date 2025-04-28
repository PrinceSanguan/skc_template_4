"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { ElementType } from "react"

// Simple animated element component
interface AnimatedElementProps {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "slideDown" | "slideRight" | "slideLeft"
  as?: ElementType
}

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  animation = "fadeIn",
  as: Component = "div",
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
      case "slideDown":
        animationProps = { opacity: 0, y: -10 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -10 }
        break
      case "slideLeft":
        animationProps = { opacity: 0, x: 10 }
        break
    }

    gsap.fromTo(el, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.6,
      delay,
      ease: "power2.out",
    })
  }, [delay, animation])

  return (
    <Component ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </Component>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navbarRef = useRef<HTMLElement>(null)
  const navbarBgRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Navbar animation on mount
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.6,
      ease: "power2.out",
    })

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
        },
      )
    }

    // Navbar scroll animation with minimal styling
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: "1px solid rgba(255, 58, 47, 0.3)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        })
      } else {
        gsap.to(navbarBgRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderBottom: "1px solid rgba(255, 58, 47, 0.1)",
          boxShadow: "none",
          duration: 0.3,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add CSS styles for the sharp, minimalist dropdown
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      /* Sharp dropdown styles */
      .nav-dropdown {
        position: relative;
      }

      .nav-dropdown-menu {
        position: absolute;
        left: 0;
        top: 100%;
        min-width: 200px;
        background-color: white;
        border-left: 2px solid #ff3a2f;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(5px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
        z-index: 50;
      }

      .nav-dropdown:hover .nav-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      /* Dropdown item styles */
      .dropdown-item {
        display: block;
        padding: 12px 16px;
        color: #333;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.2s ease;
        position: relative;
        border-bottom: 1px solid rgba(255, 58, 47, 0.1);
      }

      .dropdown-item:hover {
        background-color: rgba(255, 58, 47, 0.1);
        color: #ff3a2f;
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
        background-color: white;
        border-left: 2px solid #ff3a2f;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateX(5px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
        z-index: 51;
      }

      .nested-dropdown:hover .nested-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const navItems = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", dropdown: "about", href: "#about" },
    { name: "PROGRAMS", dropdown: "programs", href: "#programs" },
    { name: "TESTIMONIALS", href: "#feedback" },
    { name: "FRANCHISE", href: "#franchise" },
    { name: "CONTACT", dropdown: "contact", href: "#contact" },
  ]

  const aboutDropdown = [
    { name: "OUR TEAM", href: "#team" },
    { name: "OUR STORY", href: "#story" },
    { name: "OUR PHILOSOPHY", href: "#philosophy" },
  ]

  const programsDropdown = [
    { name: "LIL DRAGONS (4-5)", href: "#lil-dragons" },
    { name: "KIDS KARATE (6-10)", href: "#kids-karate" },
    { name: "TEENS KARATE (11-13)", href: "#teens-karate" },
    { name: "ADULT KEMPO (14+)", href: "#adult-kempo" },
    { name: "KICKBOXING (14+)", href: "#kickboxing" },
    { name: "JIU JITSU (14+)", href: "#jiu-jitsu" },
  ]

  const contactDropdown = [
    { name: "EVANS, GA", href: "#evans" },
    { name: "GROVETOWN, GA", href: "#grovetown" },
  ]

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Sharp red line at top */}
      <div className="h-1 bg-[#ff3a2f]"></div>

      {/* Main navbar with minimal styling */}
      <div ref={navbarBgRef} className="bg-white border-b border-[#ff3a2f]/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo area */}
            <div className="flex-shrink-0">
              <div ref={logoRef} className="flex items-center">
                {/* Sharp, angular logo emblem */}
                <div
                  className="mr-3 w-8 h-8 flex items-center justify-center"
                  style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                  <div className="w-full h-full bg-[#ff3a2f] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SKC</span>
                  </div>
                </div>

                {/* Minimalist logo text */}
                <div>
                  <span className="text-lg font-bold tracking-tight uppercase">
                    <span className="text-[#ff3a2f]">Seigler's</span>
                    <span className="text-white"> Karate</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <AnimatedElement
                    key={item.name}
                    as="div"
                    animation="slideDown"
                    delay={0.1 + index * 0.05}
                    className={item.dropdown ? "nav-dropdown" : ""}
                  >
                    <a
                      href={item.href}
                      className="px-3 py-5 text-xs font-medium tracking-wider text-gray-800 hover:text-[#ff3a2f] transition-colors uppercase"
                    >
                      {item.name}
                    </a>

                    {/* Dropdown menus for items with dropdowns */}
                    {item.dropdown === "about" && (
                      <div className="nav-dropdown-menu">
                        {aboutDropdown.map((dropItem) => (
                          <a key={dropItem.name} href={dropItem.href} className="dropdown-item">
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {item.dropdown === "programs" && (
                      <div className="nav-dropdown-menu">
                        {programsDropdown.map((dropItem) => (
                          <a key={dropItem.name} href={dropItem.href} className="dropdown-item">
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {item.dropdown === "contact" && (
                      <div className="nav-dropdown-menu">
                        {contactDropdown.map((dropItem) => (
                          <a key={dropItem.name} href={dropItem.href} className="dropdown-item">
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </AnimatedElement>
                ))}

                {/* Location Button */}
                <AnimatedElement animation="slideDown" delay={0.5}>
                  <a
                    href="#locations"
                    className="px-4 py-2 text-xs font-medium text-white bg-[#ff3a2f] uppercase tracking-wider hover:bg-[#ff3a2f]/90 transition-colors"
                    style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
                  >
                    Select Location
                  </a>
                </AnimatedElement>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-white focus:outline-none"
              >
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                <div className="relative w-6 h-5">
                  <span
                    className={`absolute h-0.5 w-full bg-gray-800 transition-all duration-300 ${isMenuOpen ? "top-2 -rotate-45" : "top-0"}`}
                  ></span>
                  <span
                    className={`absolute h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-full opacity-100"} top-2`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-full bg-gray-800 transition-all duration-300 ${isMenuOpen ? "top-2 rotate-45" : "top-4"}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - minimalist version */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#ff3a2f]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.dropdown)}
                      className="flex justify-between w-full px-3 py-2 text-sm font-medium text-gray-800 uppercase tracking-wider"
                    >
                      <span>{item.name}</span>
                      <span
                        className={`transition-transform duration-300 ${activeDropdown === item.dropdown ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>

                    {activeDropdown === item.dropdown && (
                      <div className="pl-4 mt-1 border-l border-[#ff3a2f]">
                        {item.dropdown === "about" &&
                          aboutDropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block py-2 pl-3 text-xs text-gray-600 hover:text-[#ff3a2f] transition-colors uppercase tracking-wider"
                            >
                              {dropItem.name}
                            </a>
                          ))}

                        {item.dropdown === "programs" &&
                          programsDropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block py-2 pl-3 text-xs text-gray-600 hover:text-[#ff3a2f] transition-colors uppercase tracking-wider"
                            >
                              {dropItem.name}
                            </a>
                          ))}

                        {item.dropdown === "contact" &&
                          contactDropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block py-2 pl-3 text-xs text-gray-600 hover:text-[#ff3a2f] transition-colors uppercase tracking-wider"
                            >
                              {dropItem.name}
                            </a>
                          ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#ff3a2f] transition-colors uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile location button */}
            <div className="pt-2">
              <a
                href="#locations"
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-[#ff3a2f] uppercase tracking-wider text-center"
              >
                Select Location
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
