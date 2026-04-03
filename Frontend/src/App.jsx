import { useState } from "react"
import {Home} from "./Container/Home"
import { Services } from "./Container/Services"
import { CaseStudies } from "./Container/CaseStudies"

function App() {
  return (
    <>
      <Home />
      <Services />
      <CaseStudies />
    </>
  )
}

export default App
