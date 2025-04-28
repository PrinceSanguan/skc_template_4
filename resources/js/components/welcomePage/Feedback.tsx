"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Star } from "lucide-react"

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current

    // Title animation
    if (section) {
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
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll(".testimonial-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const testimonials = [
    {
      id: 1,
      content:
        "My son has been begging to take karate for two years. He was diagnosed with ADD, hyperactive type with sensory issue components. This summer I decided to try the intro 6 week class. We had our first class and the staff was wonderful. After one week, I can already tell his confidence is growing. So far we love Seigler's!",
      name: "SHANNA NELSON GREENE",
      position: "PARENT",
      avatar: "/Images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png",
    },
    {
      id: 2,
      content:
        "Accountability and an awesome workout! I had the knowledge of how to loose weight and get fit, but like so many of us, I needed that push to get me started! Having a scheduled class time and training with athletes at the top of their game has motivated me to crush my goals.",
      name: "RACHEL KIMBROUGH-EUGENE",
      position: "MEMBER",
      avatar: "/Images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png",
    },
    {
      id: 3,
      content:
        "Seigler's Karate Center is the BEST place to send your kids! A wonderful blend of Karate, leadership training and character building. Instructors know each child by name and are truly dedicated to their craft and the success of every child.",
      name: "OBAMBI A",
      position: "PARENT",
      avatar: "/Images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png",
    },
  ]

  return (
    <section ref={sectionRef} id="feedback" className="relative py-20 text-[#1e2025] bg-white">
      {/* Sharp red line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3a2f]"></div>
      
      {/* Subtle abstract elements */}
      <div className="absolute bottom-1/3 right-10 w-56 h-56 rounded-full bg-[#ff3a2f]/[0.02] -z-0"></div>
      <div className="absolute top-1/4 left-5 w-40 h-40 bg-[#ff3a2f]/[0.03] -z-0"
           style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
      <div className="absolute top-20 right-1/4 w-28 h-28 bg-[#ff3a2f]/[0.02] -z-0"
           style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}></div>
      <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-[#ff3a2f]/[0.01] -z-0"
           style={{ clipPath: "circle(50% at 50% 50%)" }}></div>

      <div className="container relative mx-auto px-4">
        <div className="title-container mb-16">
          {/* Sharp, minimalist title treatment */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-[#ff3a2f]"></div>
            <span className="text-[#ff3a2f] uppercase tracking-widest text-sm font-bold ml-4">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight mb-6 text-[#1e2025]">
            WHAT OUR <span className="text-[#ff3a2f]">MEMBERS</span> SAY
          </h2>
          <p className="max-w-2xl text-gray-700 leading-relaxed">
            Hear directly from our community about their transformative experiences training at Seigler's Karate Center
          </p>
        </div>

        {/* Redesigned testimonial layout for white background */}
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-12">
          {/* Featured testimonial (larger) - spans 7 columns */}
          <div className="testimonial-card md:col-span-7 relative bg-white shadow-sm p-8 border-l-2 border-[#ff3a2f]">
            {/* Sharp quote mark */}
            <div className="absolute -top-5 -left-2 text-8xl text-[#ff3a2f]/10 font-bold leading-none">"</div>
            
            {/* Clean, sharp rating */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="mr-1 h-4 w-4 text-[#ff3a2f] fill-[#ff3a2f]"
                />
              ))}
            </div>

            <p className="text-gray-700 text-lg mb-8 relative z-10">
              {testimonials[0].content}
            </p>

            {/* Sharp divider line */}
            <div className="w-16 h-1 bg-[#ff3a2f] mb-6"></div>

            <div className="flex items-center">
              <div className="mr-4 h-14 w-14 overflow-hidden shadow-md" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}>
                <img
                  src={testimonials[0].avatar || "/placeholder.svg?height=56&width=56&query=person"}
                  alt={testimonials[0].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2025] tracking-wide text-sm">{testimonials[0].name}</h4>
                <p className="text-xs text-gray-600 tracking-wider">{testimonials[0].position}</p>
              </div>
            </div>
            
            {/* Angular decorative corner */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20">
              <div className="w-full h-full border-b-2 border-r-2 border-[#ff3a2f]"></div>
            </div>
          </div>

          {/* Right column with two stacked testimonials - spans 5 columns */}
          <div className="md:col-span-5 space-y-8">
            {testimonials.slice(1, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card relative bg-white shadow-sm p-6 border-l-2 border-[#ff3a2f]"
              >
                {/* Minimal rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="mr-1 h-3 w-3 text-[#ff3a2f] fill-[#ff3a2f]"
                    />
                  ))}
                </div>
                
                {/* Thin red line to separate */}
                <div className="w-8 h-0.5 bg-[#ff3a2f] mb-4"></div>

                <p className="text-gray-700 text-sm mb-4">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden shadow-sm" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)" }}>
                    <img
                      src={testimonial.avatar || "/placeholder.svg?height=40&width=40&query=person"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e2025] tracking-wide text-xs">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600 tracking-wider">{testimonial.position}</p>
                  </div>
                </div>
                
                {/* Red accent line at bottom */}
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-[#ff3a2f]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          {/* Sharp, angular button */}
          <button
            className="group bg-[#ff3a2f] hover:bg-[#ff3a2f]/90 px-8 py-4 text-white font-bold uppercase tracking-wide transition-all duration-300"
            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
          >
            <span className="flex items-center">
              READ ALL REVIEWS
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

export default Feedback