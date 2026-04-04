import { useState } from "react"

export function Working(){
    const[display ,setDisplay]=useState(false)
     const[display1 ,setDisplay1]=useState(false)
      const[display2 ,setDisplay2]=useState(false)
       const[display3 ,setDisplay3]=useState(false)
        const[display4 ,setDisplay4]=useState(false)
         const[display5 ,setDisplay5]=useState(false)
    return(
        <>
        <div>
            <div className="flex mt-10">
            <h1 className="text-2xl  ml-7 bg-[rgba(185,255,102,1)] w-70 text-center h-10"><b>Our Working Process</b> </h1>
            <h4 className="ml-10  ">Step-by-Step Guide to Achieving <br></br>Your Business Goals</h4>
            </div>
            <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>01</b></h1>
                    <h3 className="mt-7 ml-2"><b>Consultation</b></h3>  
                    <button className="h-12 w-12 rounded-full border-2 ml-215 mt-3 bg-amber-50 hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay(!display)}>{!display? "+":"-"}</button>
                </div>
              {display? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</h6>
                </div>:null}
            </div>
             <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>02</b></h1>
                    <h3 className="mt-7 ml-2  w-200 "><b>Research and Strategy Development</b></h3> 
                    <button className="h-12 w-12 rounded-full border-2 ml-40 mt-3 bg-amber-50  hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay1(!display1)}>{!display1? "+":"-"}</button>
                </div>
                 {display1? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">In this phase, we conduct in-depth research on your industry, competitors, and target audience. Based on these insights, we develop a customized strategy that aligns with your business goals and ensures maximum impact.</h6>
                </div>:null}
                </div>
                <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>03</b></h1>
                    <h3 className="mt-7 ml-2  w-200 "><b>Implementation</b></h3> 
                    <button className="h-12 w-12 rounded-full border-2 ml-40 mt-3 bg-amber-50  hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay2(!display2)}>{!display2? "+":"-"}</button>
                </div>
                 {display2? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">Once the strategy is finalized, we begin executing the planned activities. This includes deploying marketing campaigns, optimizing platforms, and ensuring everything runs smoothly according to the strategy.</h6>
                </div>:null}
                </div>
                <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>04</b></h1>
                    <h3 className="mt-7 ml-2  w-200 "><b>Monitoring and Optimization</b></h3>  
                    <button className="h-12 w-12 rounded-full border-2 ml-40 mt-3 bg-amber-50  hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay3(!display3)}>{!display3? "+":"-"}</button>
                </div>
                 {display3? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">We continuously track performance metrics and analyze results to identify areas of improvement. Based on data insights, we optimize campaigns to enhance efficiency and achieve better outcomes.</h6>
                </div>:null}
                </div>
                <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>05</b></h1>
                    <h3 className="mt-7 ml-2  w-200 "><b>Reporting and Communication</b></h3>  
                    <button className="h-12 w-12 rounded-full border-2 ml-40 mt-3 bg-amber-50  hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay4(!display4)}>{!display4? "+":"-"}</button>
                </div>
                 {display4? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">We provide regular reports detailing the performance of campaigns and key achievements. Clear communication ensures you stay informed about progress and any strategic adjustments.</h6>
                </div>:null}
                </div>
                <div className="w-280  m-10 hover:bg-[rgba(185,255,102,1)] border-2 rounded-3xl shadow-xl/30"> 
                <div className="flex h-20">
                    <h1 className="text-2xl ml-8 mt-5"><b>06</b></h1>
                    <h3 className="mt-7 ml-2  w-200 "><b>Continual Improvement</b></h3>  
                    <button className="h-12 w-12 rounded-full border-2 ml-40 mt-3 bg-amber-50  hover:bg-amber-100 cursor-pointer" onClick={()=>setDisplay5(!display5)}>{!display5? "+":"-"}</button>
                </div>
                 {display5? <div>
                    <hr className="w-260 ml-10"></hr>
                   <h6 className="m-5">We focus on long-term growth by constantly refining strategies and exploring new opportunities. Continuous learning and improvements help maintain and improve performance over time.</h6>
                </div>:null}
                </div>
        </div>
        </>
    )
}