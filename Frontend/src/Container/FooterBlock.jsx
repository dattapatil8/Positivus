import Positivus from"../assets/Positivus.png"
import Social from"../assets/Social.png"
import Social1 from"../assets/Social1.png"
import Social2 from"../assets/Social2.png"
export function FooterBlock(){
    return(
        <>
        <div className="bg-black rounded-t-4xl">
        <div  className=" flex gap-2 pt-20 pl-10">
        <img  className="ml-1" src={Positivus}/>
        
        <a className="text-white ml-20 underline decoration-white" href="#">About us</a>
         <a className="text-white ml-15 underline decoration-white" href="#">Services</a> 
         <a className="text-white ml-15 underline decoration-white" href="#">Use Cases</a>
         <a className="text-white ml-15 underline decoration-white" href="#">Pricing</a>
         <a className="text-white ml-15 underline decoration-white" href="#">Blog</a>
         <div className="ml-50 gap-5 flex">
         <img  src={Social}/>
           <img  src={Social1}/>
             <img  src={Social2}/>
             </div>
        </div >
        <div className="flex">
        <div className="text-white  w-80 mt-30 ml-10">
            <h1 className=" bg-[rgba(185,255,102,1)] w-25 text-black"><b>Contact us:</b></h1>
            <h2 className="mt-10">Email: info@positivus.com</h2>
            <h2 className="mt-10">Address: 1234 Main St
            Moonstone City, Stardust State 12345</h2>
        </div>
        <div className="text-white h-45 text-center  w-150 mt-30 ml-50 bg-gray-900 ">
            <input className="border-2 h-15 mt-15 w-60 rounded-2xl" type="email" placeholder="         Email"/>
            <button  className="border-2 h-15 mt-15 w-60 rounded-2xl ml-10 bg-[rgba(185,255,102,1)] text-black"><b>Subscribe to news</b></button>
        </div>
        </div>
        <hr className="border-white mt-10 mx-10" />
        <div className="text-white flex mt-10 pb-10 ml-10 gap-30">
            <h2>© 2023 Positivus. All Rights Reserved.</h2>
            <a href="#" className="text-white underline decoration-white">
            Privacy Policy
</a>
        </div>
        </div>
        </>
    )
}