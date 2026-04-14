import Frame from "../assets/Frame.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className=" flex justify-between  items-center bg-lime-500 px-4 py-4 w-full ">
    
        <img  src={Frame} />
      

      <div className=" flex text-lg gap-6 ">

         <Link to="" className=" text-white text-xl cursor-pointer  p-3  transition duration-300 hover:shadow-xl hover:border rounded ">About us</Link>

         <Link to="/services" className=" text-white text-xl cursor-pointer  p-3 transition duration-300 hover:shadow-xl hover:border  rounded">Services</Link>

         <Link to="/casestudies"className=" text-white text-xl cursor-pointer  p-3 transition duration-300 hover:shadow-xl hover:border  rounded">Use Cases</Link>

         <Link to="" className=" text-white text-xl cursor-pointer  p-3 transition duration-300 hover:shadow-xl hover:border   rounded">Pricing</Link>

         <Link to="" className=" text-white text-xl cursor-pointer  p-3 transition duration-300 hover:shadow-xl hover:border   rounded">Blog</Link>

         <button className="border rounded-lg p-2 cursor-pointer  text-white text-xl  tranition duration-300 hover:shadow-xl">Request a quote</button>

      </div>
       
    </nav>
  )
}

export default Navbar
