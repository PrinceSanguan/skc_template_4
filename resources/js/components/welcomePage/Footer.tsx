"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const locationCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footer = footerRef.current
    const logo = logoRef.current
    const locationCards = locationCardsRef.current

    if (footer && logo) {
      // Animate logo with clean movement
      gsap.fromTo(
        logo,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Stagger animate links with sharp timing
      gsap.fromTo(
        footer.querySelectorAll(".footer-links li"),
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate social icons with sharp reveal
      gsap.fromTo(
        footer.querySelectorAll(".social-icon"),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate bottom bar
      gsap.fromTo(
        footer.querySelector(".bottom-bar"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )
    }

    // Animate location cards
    if (locationCards) {
      gsap.fromTo(
        locationCards.querySelectorAll(".location-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locationCards,
            start: "top 90%",
          },
        },
      )
    }
  }, [])

  const navigation = {
    main: [
      { name: "HOME", href: "#" },
      { name: "ABOUT", href: "#about" },
      { name: "PROGRAMS", href: "#programs" },
      { name: "TESTIMONIALS", href: "#feedback" },
      { name: "BLOG", href: "#blog" },
      { name: "CONTACT", href: "#contact" },
    ],
    programs: [
      { name: "KIDS KARATE", href: "#" },
      { name: "ADULT MARTIAL ARTS", href: "#" },
      { name: "KICKBOXING", href: "#" },
      { name: "SELF DEFENSE", href: "#" },
      { name: "PRIVATE LESSONS", href: "#" },
    ],
    socialMedia: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "YouTube", href: "#", icon: Youtube },
    ],
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Location Cards Section - White Background */}
      <div ref={locationCardsRef} className="py-12 bg-white relative">
        {/* Red line at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3a2f]"></div>
        
        {/* Subtle abstract elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#ff3a2f]/[0.02] -z-0"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#ff3a2f]/[0.03] -z-0"
             style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#ff3a2f]/[0.01] -z-0"
             style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section title with red line */}
          <div className="flex items-center mb-12">
            <div className="w-12 h-1 bg-[#ff3a2f]"></div>
            <span className="text-[#ff3a2f] uppercase tracking-widest text-sm font-bold ml-4">OUR LOCATIONS</span>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Evans Location - Sharp, angular card with white background */}
            <div className="location-card relative bg-white shadow-sm p-8 border-l-2 border-[#ff3a2f]">
              <h3 className="text-2xl font-bold text-[#1e2025] uppercase tracking-wide mb-2">EVANS, GA</h3>
              <div className="w-8 h-0.5 bg-[#ff3a2f] mb-6"></div>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#ff3a2f] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">4150 Washington Road, Suite 4, Evans, GA, 30809</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#ff3a2f] flex-shrink-0" />
                  <a href="tel:+17068555683" className="text-gray-700 hover:text-[#ff3a2f] transition-colors">
                    (706) 855-5683
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#ff3a2f] flex-shrink-0" />
                  <a href="mailto:skc@goskc.com" className="text-gray-700 hover:text-[#ff3a2f] transition-colors">
                    skc@goskc.com
                  </a>
                </div>
              </div>
              
              {/* Social icons with minimal styling */}
              <div className="absolute top-8 right-8 flex space-x-5">
                {navigation.socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-[#ff3a2f] transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              
              {/* Angular decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16">
                <div className="w-full h-full border-b-2 border-r-2 border-[#ff3a2f]"></div>
              </div>
            </div>

            {/* Grovetown Location - Sharp, angular card with white background */}
            <div className="location-card relative bg-white shadow-sm p-8 border-l-2 border-[#ff3a2f]">
              <h3 className="text-2xl font-bold text-[#1e2025] uppercase tracking-wide mb-2">GROVETOWN, GA</h3>
              <div className="w-8 h-0.5 bg-[#ff3a2f] mb-6"></div>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#ff3a2f] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">271 Meridian Drive Grovetown, GA 30813</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-[#ff3a2f] flex-shrink-0" />
                  <a href="tel:+17068555683" className="text-gray-700 hover:text-[#ff3a2f] transition-colors">
                    (706) 855-5683
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-[#ff3a2f] flex-shrink-0" />
                  <a href="mailto:skc@goskc.com" className="text-gray-700 hover:text-[#ff3a2f] transition-colors">
                    skc@goskc.com
                  </a>
                </div>
              </div>
              
              {/* Social icons with minimal styling */}
              <div className="absolute top-8 right-8 flex space-x-5">
                {navigation.socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-[#ff3a2f] transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              
              {/* Angular decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16">
                <div className="w-full h-full border-b-2 border-r-2 border-[#ff3a2f]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - White Background */}
      <footer ref={footerRef} className="relative py-16 bg-white border-t border-[#ff3a2f]/20">
        {/* Subtle abstract elements */}
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#ff3a2f]/[0.01] -z-0"></div>
        <div className="absolute top-1/3 left-20 w-40 h-40 bg-[#ff3a2f]/[0.02] -z-0"
             style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
        
        {/* Footer content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Logo & about - spans 5 columns */}
            <div className="md:col-span-5">
              <div ref={logoRef} className="mb-8">
                <h1 className="logo-text text-4xl font-bold tracking-tight text-[#1e2025]">
                  <span className="text-[#ff3a2f]">SEIGLER'S</span> KARATE
                </h1>
                <h2 className="text-3xl font-bold tracking-tight text-[#1e2025] mt-1">
                  <span className="text-[#ff3a2f]">CENTER</span>
                </h2>
              </div>
              <div className="w-12 h-1 bg-[#ff3a2f] mb-8"></div>
              <p className="text-gray-700 mb-8 max-w-md leading-relaxed">
                Empowering students with discipline, strength, and wisdom through martial arts training since 1982.
                Join our community and discover your potential.
              </p>
              <div className="flex space-x-8">
                {navigation.socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="social-icon text-gray-500 hover:text-[#ff3a2f] transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Grid - spans 7 columns */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Quick Links */}
              <div>
                <h2 className="text-sm font-bold text-[#1e2025] mb-6 uppercase tracking-wider">
                  Quick Links
                </h2>
                <ul className="footer-links space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name} className="group">
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#ff3a2f] transition-colors duration-300 text-sm tracking-wide"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h2 className="text-sm font-bold text-[#1e2025] mb-6 uppercase tracking-wider">
                  Programs
                </h2>
                <ul className="footer-links space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name} className="group">
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#ff3a2f] transition-colors duration-300 text-sm tracking-wide"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter signup */}
              <div>
                <h2 className="text-sm font-bold text-[#1e2025] mb-6 uppercase tracking-wider">
                  Newsletter
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Stay updated with our latest news and special offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full py-2 px-3 bg-transparent border-b-2 border-gray-300 text-sm text-[#1e2025] placeholder-gray-500 focus:outline-none focus:border-[#ff3a2f] transition-colors"
                  />
                  <button className="ml-2 text-[#ff3a2f] hover:text-[#ff3a2f]/80 transition-colors duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar mt-16 pt-8 border-t border-[#ff3a2f]/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-xs tracking-wide">© {currentYear} SEIGLER'S KARATE CENTER. ALL RIGHTS RESERVED.</p>
              <div className="mt-4 md:mt-0 flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-[#ff3a2f] text-xs tracking-wide transition-colors duration-300">
                  PRIVACY POLICY
                </a>
                <a href="#" className="text-gray-600 hover:text-[#ff3a2f] text-xs tracking-wide transition-colors duration-300">
                  TERMS OF SERVICE
                </a>
                <a href="#" className="text-gray-600 hover:text-[#ff3a2f] text-xs tracking-wide transition-colors duration-300">
                  SITEMAP
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimal location indicator for white background */}
        <div className="absolute bottom-6 right-6 flex items-center">
          <div className="w-2 h-2 bg-[#ff3a2f] mr-2"></div>
          <span className="text-[#1e2025] text-sm tracking-widest uppercase">AUGUSTA, GA</span>
        </div>
      </footer>
    </>
  )
}

export default Footer