import Frame from "../assets/Frame.png"
function Navbar({items}) {
  return (
    <div className="flex justify-between p-3 bg-green-400 text-xl  ">
        <img  src={Frame} />
        <ul className="flex h-15 items-center  gap-15 ">

            {items.map((item,index)=>(

                <li className=" cursor-pointer hover:border rounded p-2 hover:border-black transition duration-200"
                
                key={index}> {item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
