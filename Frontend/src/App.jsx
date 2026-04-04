import { useState } from "react"
import {Home} from "./Container/Home.jsx"
import { Services } from "./Container/Services"
import  CaseStudies  from "./Container/CaseStudies"
import { Working } from "./Container/Working"
function App() {
  return (
    <>
      <Home />
      <Services />
      <CaseStudies />
      <Working />
    </>
  )
}

export default App
