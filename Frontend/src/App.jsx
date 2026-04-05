import { useState } from "react"
import {Home} from "./Container/Home.jsx"
import { Services } from "./Container/Services"
import  CaseStudies  from "./Container/CaseStudies"
import { Working } from "./Container/Working"
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
     <Navbar 
        items={["About us","Services","Use Cases","Pricing ","Blog","Request a quote"]}
        />

      <Home />
      <Services />
      <CaseStudies />
      <Working />
    </>
  )
}

export default App
