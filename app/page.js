"use client";

import { useRef } from "react";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/app/about/page";
import Projects from "@/app/project/page"
import Contact from "./contact/page";
import Services from "./services/page";
import Testimonials from "./testimonial/page";

export default function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const refs = { homeRef, aboutRef, projectsRef, contactRef, servicesRef, testimonialsRef };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Pass scroll function and refs to Header */}
      <Header scrollToSection={scrollToSection} refs={refs} />

      {/* Sections */}
      <div ref={homeRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={testimonialsRef}><Testimonials /></div>
      <div ref={contactRef}><Contact /></div>
      
    </>
  );
}
