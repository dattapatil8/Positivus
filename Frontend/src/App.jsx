import { useState } from "react"
import {Home} from "./Container/Home.jsx"
import { Services } from "./Container/Services"
import { CaseStudies } from "./Container/CaseStudies"
import { Working } from "./Container/Working"
import {Teams} from "./Container/Teams.jsx"
import {Testimonials} from "./Container/Testimonials.jsx"
import { ContactUs } from "./Container/ContactUs.jsx"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx"
import { FooterBlock } from "./Container/FooterBlock.jsx"
function App() {
  return (
    <>
     <Navbar 
        items={["About us","Services","Use Cases","Pricing ","Blog","Request a quote"]}
        />

      <Home />
      <Footer/>
      <Services />
      <CaseStudies />
      <Working />
      <Teams/>
      <Testimonials/>
      <ContactUs />
      <FooterBlock />
    </>
  )
}

export default App
