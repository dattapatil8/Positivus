import searchengine  from "../assets/1st.png";
import payper  from "../assets/pay-per.png";
import socialmedia  from "../assets/social-media.png";
import analytetrac  from "../assets/analyte-trac.png";
import emailmark  from "../assets/email-mark.png";
import emailmarket  from "../assets/email-market.png";
import proposal  from "../assets/proposal.png";

export function Services(){
    return(
        <>
        <div> 
             <div className=" flex  mt-20">
            <h1 className="text-2xl ml-7 bg-[rgba(185,255,102,1)] w-70 text-center h-10"><b>Services</b> </h1>
            <h4 className="ml-10  ">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</h4>
            </div>

           
             <div className="flex gap-20 mt-10 ml-25 ">
             <div className= "flex w-140 h-60 border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(185,255,102,1)]">
              <h1>Search engine </h1>
              <h2>optimization </h2>
               <a href="#" className="inline-block mt-20 text-xl text-[rgba(30,12,30,0.71)] ">
                <b>
                   → Learn more
                </b>
               </a>
             </div>
              <img className="ml-10" src={searchengine} /> 
            </div>

            <div className= "flex w-140 h-60 border-2 bg-[rgba(185,255,102,1)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(241,235,241,0.9)] ">
              <h1>Pay-per-click </h1>
              <h2>Advertising</h2>
              <a href="#" className="inline-block mt-20 text-xl text-[rgba(30,12,30,0.71)] ">
                <b>
                   → Learn more
                </b>
              </a>
             </div>
              <img className="ml-10" src={payper} /> 
            </div>
            </div>
            

             <div className="flex gap-20 mt-10 ml-25">
            <div className= "flex w-140 h-60 border-2 bg-[rgba(185,255,102,1)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(241,235,241,0.9)] ">
              <h1>Content </h1>
              <h2>creation </h2>
              <a href="#" className="inline-block mt-20 text-xl text-[rgba(30,12,30,0.71)] ">
                <b>
                   → Learn more
                </b>
               </a>
             </div>
              <img className="ml-10" src={socialmedia} /> 
              </div>

             <div className= "flex w-140 h-60 border-2 bg-[rgba(30,12,30,0.71)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(185,255,102,1)]">
              <h1>Analytics and </h1>
              <h2>Tracking </h2>
              <a href="#" className="inline-block mt-20 text-xl text-[rgba(241,235,241,0.9)] ">
                <b>
                   → Learn more
                </b>
              </a>
             </div>
              <img className="ml-10" src={analytetrac} /> 
            </div>
            </div>

             <div className="flex gap-20 mt-10 ml-25">
             <div className= "flex w-140 h-60 border-2 bg-[rgba(30,12,30,0.71)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(185,255,102,1)]">
              <h1>Social Media </h1>
              <h2>Marketing </h2>
              <a href="#" className="inline-block mt-20 text-xl text-[rgba(241,235,241,0.9)] ">
                <b>
                   → Learn more
                </b>
              </a>
             </div>
              <img className="ml-10" src={emailmark} /> 
              </div>

            <div className= "flex w-140 h-60 border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(185,255,102,1)]">
              <h1>Email </h1>
              <h2>Marketing </h2>
              <a href="#" className="inline-block mt-20 text-xl text-[rgba(30,12,30,0.71)] ">
                <b>
                   → Learn more
                </b>
                </a>
             </div>
              <img className="ml-10" src={emailmarket} /> 
            </div>
            </div>

            <div className="flex gap-20 mt-10 ml-25">
            <div className= "flex w-300 h-65 border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-2xl w-150 h-18">
              <h1 className=""><b>Let’s make things happen </b></h1>
              <h2 className="text-base mt-5">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online. </h2>
              <h3 className="border-1 mt-10 h-10 w-70 text-center bg-[rgb(7,12,0)] rounded-xl text-white">Get Your free proposal</h3>
              {/* <a href="#" className="inline-block mt-20 text-xl text-[rgba(30,12,30,0.71)] ">
                <b>
                   → Learn more
                </b>
                </a> */}
             </div>
              <img className="ml-60 " src={proposal} /> 
            </div>
            </div>
       </div>

        </>
    )
}