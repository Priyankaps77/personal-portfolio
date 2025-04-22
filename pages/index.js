"use client";
import React from "react";
import { useState } from "react";
import DestinationCards from "../components/Cards";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import { SplitImageText } from "../components/SplitImageText ";
import { SplitImageText2 } from "../components/SplitImageText2";
import { TestimonialsGrid } from "../components/TestimonialsGrid";
import { Gallery } from "../components/Gallery";

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  console.log(selectedDestination, "selectedDestination");

  return (
    <main className="scroll-smooth">
      <Header onSelectDestination={setSelectedDestination} />
      <DestinationCards />
      <Gallery />
      <SplitImageText />
      <SplitImageText2 />
      <Testimonial />
      <Hero />
      <TestimonialsGrid />
      <Contact />
    </main>
  );
}
