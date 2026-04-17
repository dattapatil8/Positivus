import Frame from "../assets/Frame.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className=" flex justify-between  items-center  bg-[rgba(185,255,102,1)] px-4 py-4 w-full ">
    
        <img  src={Frame} />
      

      <div className=" flex text-lg gap-6 ">

         <Link to="" className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">About us</Link>

         <Link to="/services" className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Services</Link>

         <Link to="/casestudies" className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Use Cases</Link>

         <Link to="" className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Pricing</Link>

         <Link to="" className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">Blog</Link>

         <button className=" text-black font-semibold text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl border rounded ">Request a quote</button>

      </div>
       
    </nav>
  )
}

export default Navbar
