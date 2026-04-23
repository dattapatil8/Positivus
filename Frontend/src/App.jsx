import { useState } from "react"
import {Routes, Route} from "react-router-dom"
import {Home} from "./Container/Home.jsx"
import { Services } from "./Container/Services"
import { CaseStudies } from "./Container/CaseStudies"
import { Working } from "./Container/Working"
import {Teams} from "./Container/Teams.jsx"
import {Testimonials} from "./Container/Testimonials.jsx"
import { ContactUs } from "./Container/ContactUs.jsx"
import Navbar from "./Components/Navbar";
import { FooterBlock } from "./Container/FooterBlock.jsx"
import { LandingPage } from "./Container/LandingPage.jsx"
import About from "./Pages/About.jsx"
import Pricing from "./Pages/Pricing.jsx"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    < Route path="/home"  element={<Home />} />
     < Route path="/services"    element={ <Services />} /> 
     < Route path="/casestudies"    element={<CaseStudies />}/>
     < Route path="/working"    element={<Working />} />  
     < Route path="/teams"    element={<Teams/>}  /> 
     < Route path="/testimonials"    element={<Testimonials/>}  />
     < Route path="/contactus"    element={<ContactUs />} />
     < Route path="/footerblock"    element={<FooterBlock />}  />
     <Route path ="/about" element={<About/>} />
      <Route path ="/pricing" element={<Pricing/>} />
      <Route path ="/blog" element={<Blog/>} />

      </Routes>
    
    </>
  )
}

export default App
