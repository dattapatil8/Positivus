import Frame from "../assets/Frame.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className=" flex justify-between  items-center bg-green-400 px-4 py-4">
    
        <img  src={Frame} />
      

      <div className=" flex text-lg gap-6 ">

         <Link to="" className=" text-white cursor-pointer  p-3 hover:border  rounded ">About us</Link>

         <Link to="/services" className=" text-white cursor-pointer  p-3 hover:border  rounded">Services</Link>

         <Link to="/casestudies"className=" text-white cursor-pointer  p-3 hover:border  rounded">Use Cases</Link>

         <Link to="" className=" text-white cursor-pointer  p-3 hover:border  rounded">Pricing</Link>

         <Link to="" className=" text-white cursor-pointer  p-3 hover:border  rounded">Blog</Link>

         <Link  to="" className=" text-white cursor-pointer  p-3 hover:border  rounded">Request a quote</Link>

      </div>
       
    </nav>
  )
}

export default Navbar
