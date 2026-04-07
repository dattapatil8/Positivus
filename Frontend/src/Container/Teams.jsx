import SocialIcon from "../assets/SocialIcon.png"
import Profile1 from "../assets/Profile1.png"
import {Card} from "../Components/Card.jsx"
export function Teams(){

    return(
        <>
        <div className="flex ">
            <span className=" ml-10  h-10  text-center bg-lime-300 px-3 py-1 font-semibold rounded" >Team</span>
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
        image={Profile1}
        name="John Smith"
        role="CEO and Founder"
        detail="10+ years of experience in digital
         marketing. Expertise in SEO, PPC,
          and content strategy"
        />
         <Card 
        image={Profile1}
        name="John Smith"
        role="CEO and Founder"
        detail="10+ years of experience in digital
         marketing. Expertise in SEO, PPC,
          and content strategy"
        />
       </div>
        </>
    )
}