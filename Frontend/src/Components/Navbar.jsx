import Frame from "../assets/Frame.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className=" flex justify-between  items-center  bg-[rgba(185,255,102,1)] px-4  md:px-8 py-4 w-full ">
    
        <img  src={Frame} className="w-24 md:w-24" />
      

      <div className="hidden md:flex text-lg gap-6 items-center ">

         <Link to="" className=" text-black font-semibold text-base md:text-lg cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">About us</Link>

         <Link to="/services"  className=" text-black font-semibold text-base md:text-lg cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Services</Link>

         <Link to="/casestudies"  className=" text-black font-semibold text-base md:text-lg cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Use Cases</Link>

         <Link to=""  className=" text-black font-semibold text-base md:text-lg cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Pricing</Link>

         <Link to=""  className=" text-black font-semibold text-base md:text-lg cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Blog</Link>

         <button  className=" text-black font-semibold text-base md:text-lg px-4 py-2 border rounded  cursor-pointer hover:shadow-xl  ">Request a quote</button>

      </div>
       
    </nav>
  )
}

export default Navbar
