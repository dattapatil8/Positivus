import { Link } from "react-router-dom"
import Positivus from"../assets/Positivus.png"
import Social from"../assets/Social.png"
import Social1 from"../assets/Social1.png"
import Social2 from"../assets/Social2.png"
export function FooterBlock(){
    return(
        <>
        <div className="bg-black rounded-t-4xl w-full">
        <div  className=" flex gap-2 pt-20 pl-10">
        <img  className="ml-1" src={Positivus}/>
        
        <Link to="/about" className="text-white ml-20 underline decoration-white hover:border-2 h-8 ">About us</Link>
         <Link to="/services" className="text-white ml-15 underline decoration-white hover:border-2" href="#">Services</Link>
         <Link to ="/casestudies" className="text-white ml-15 underline decoration-white hover:border-2" href="#">Use Cases</Link>
         <Link className="text-white ml-15 underline decoration-white hover:border-2" href="#">Pricing</Link>
         <Link className="text-white ml-15 underline decoration-white hover:border-2" href="#">Blog</Link>
         <div className="ml-60 gap-5 flex">
         <img  className="hover:border-2" src={Social}/>
           <img  className="hover:border-2" src={Social1}/>
             <img className="hover:border-2" src={Social2}/>
             </div>
        </div >
        <div className="flex">
        <div className="text-white text-2xl w-80 mt-30 ml-10">
            <h1 className=" bg-[rgba(185,255,102,1)] w-40 text-center text-black"><b>Contact us:</b></h1>
            <h2 className="mt-10">Email: info@positivus.com</h2>
            <h2 className="mt-10">Address: 1234 Main St
            Moonstone City, Stardust State 12345</h2>
        </div>
        <div className="text-white h-45 text-center  w-180 mt-30 ml-50 bg-gray-900 ">
            <input className="border-2 h-15 mt-15 w-60 rounded-2xl" type="email" placeholder="         Email"/>
            <button  className="border-2 h-15 mt-15 w-60 rounded-2xl ml-10 bg-[rgba(185,255,102,1)] text-black hover:bg-[#345a07]"><b>Subscribe to news</b></button>
        </div>
        </div>
        <hr className="border-white mt-10 mx-10" />
        <div className="text-white flex mt-10 pb-10 ml-10 gap-30">
            <h2>© 2023 Positivus. All Rights Reserved.</h2>
            <Link to="#" className="text-white underline decoration-white hover:text-blue-500"> Privacy Policy</Link>
           

        </div>
        </div>
        </>
    )
}