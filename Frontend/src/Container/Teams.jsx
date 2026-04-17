import { Link } from "react-router-dom"
import Profile1 from "../assets/Profile1.png"
import Profile2 from "../assets/Profile2.png"
import Profile3 from "../assets/Profile3.png"
import Profile4 from "../assets/Profile4.png"
import Profile5 from "../assets/Profile5.png"
import Profile6 from "../assets/Profile6.png"
import {Card} from "../Components/Card.jsx"
export function Teams(){

    return(
        <>
        <div className="flex ">
            <span className="text-2xl ml-7 bg-[rgba(185,255,102,1)] w-40 text-center h-10" ><b>Team</b></span>
            <p className="ml-10"> Meet the skilled and experienced team behind our<br/>
                 successful digital marketing strategies</p>
        </div>
       
       <div className="flex justify-around">
         <Card 
        image={Profile1}
        name="John Smith"
        role="CEO and Founder"
        detail="10+ years of experience in digital
         marketing. Expertise in SEO, PPC,
          and content strategy"
        />

         <Card 
        image={Profile2}
        name="Jane Doe"
        role="Director of Operations"
        detail="7+ years of experience in project 
        management and team leadership.
       Strong organizational and communication skills"
        />
         <Card 
        image={Profile3}
        name="Michael Brown"
        role="Senior SEO Specialist"
        detail="5+ years of experience in SEO and 
        content creation. Proficient in 
        keyword research and on-page
         optimization"
        />
       </div>

       <div className="flex justify-around">
         <Card 
        image={Profile4}
        name="Emily Johnson"
        role="PPC Manager"
        detail="3+ years of experience in paid 
        search advertising. Skilled in 
        campaign management and
         performance analysis"
        />

         <Card 
        image={Profile5}
        name="Brian Williams"
        role="Social Media Specialist"
        detail="4+ years of experience in social
         media marketing. Proficient in 
         creating and scheduling content,
         analyzing metrics, and building engagement"
        />
         <Card 
        image={Profile6}
        name="Sarah Kim"
        role="Content Creator"
        detail="2+ years of experience in writing 
        and editing
        Skilled in creating compelling,
       SEO-optimized content for various industries"
        />
       </div>
       <div className=" mt-4 flex justify-end  mr-10">

       <Link to="/teams">
        <button className="  cursor-pointer bg-black text-white  py-2 px-9 rounded-xl">See all team</button>
       </Link>
       </div>
        </>
    )
}