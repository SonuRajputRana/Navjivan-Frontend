// import React from 'react'

import Reveal from "../../animations/Reveal"
import NavjivanButton from "../buttons/NavjivanButton"
import PillLabel from "../buttons/PillLabel"



const AboutNavjivanSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE CARD */}
            <Reveal direction="fade-up">
              <div className="relative w-full h-[260px] sm:h-[340px] md:h-[350px]">
                  <iframe
                    className="absolute inset-0 w-full h-full z-0 rounded-md"
                    src="https://www.youtube.com/embed/rnqKTJAg8bg?rel=0"
                    title="Sarthak Global Resource Centre"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Gradient Overlay (NON CLICKABLE) */}

                  {/* Logo Text (NON CLICKABLE) */}
                  <div className="absolute left-6 top-6 text-white pointer-events-none">
                    <p className="text-sm uppercase tracking-wide opacity-80">
                      Navjivan Educational Trust
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                      Navjivan Global <br /> Resource Centre
                    </h2>
                  </div>

              </div>
            </Reveal>

          {/* RIGHT CONTENT */}
          <Reveal direction="fade-up">
            <div>
              <div className="pilllabel mb-4">
                  <PillLabel text="About Navjivan" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-head-900 mb-4">
                About Navjivan
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2026 by Dr. Jitender Aggarwal, Navjivan Transforming Lives and Careers Trust
                began as a response to personal adversity and has since transformed
                into a national movement for disability inclusion.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We empower persons with disabilities through a life-cycle approach —
                from early intervention and inclusive education to skilling,
                employment, and leadership. Rooted in empathy and excellence,
                Sarthak has impacted over <strong>100,000 lives</strong>.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <NavjivanButton name="Learn More" classname="navbtn de-bg"/>
                <NavjivanButton name="Contact Us" classname="navbtn bg-hover"/>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default AboutNavjivanSection


