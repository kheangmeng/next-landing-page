'use client'

import Home from "./home-section"
import About from "./about-section"
import Contact from "./contact-section"
import Price from "./price-section"
import Career from "./career-section"

export default function Page() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="price">
        <Price />
      </div>
      <div id="career">
        <Career />
      </div>
    </>
  )
}
