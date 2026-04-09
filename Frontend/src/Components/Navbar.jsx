import Frame from "../assets/Frame.png"
function Navbar() {
  return (
    <nav className=" flex justify-between  items-center bg-green-400 px-4 py-4">
    
        <img  src={Frame} />
      

      <div className=" flex text-lg gap-6 ">

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded "
        
        href="#">About us</a>

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded"
        
        href="#">Services</a>

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded"
        
        href="#">Use Cases</a>

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded"
        
        href="#">Pricing</a>

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded"
        
        href="#">Blog</a>

         <a className=" text-white cursor-pointer  p-3 hover:border  rounded"
        
        href="#">Request a quote</a>

      </div>
       
    </nav>
  )
}

export default Navbar
