import {Home} from "./Home.jsx"
import { Services } from "./Services"
import { CaseStudies } from "./CaseStudies"
import { Working } from "./Working"
import {Teams} from "./Teams.jsx"
import {Testimonials} from "./Testimonials.jsx"
import { ContactUs } from "./ContactUs.jsx"
import Navbar from "../Components/Navbar";
import { FooterBlock } from "./FooterBlock.jsx"
export function LandingPage(){
    return(
        <>
         <Navbar/>
    <Home />
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