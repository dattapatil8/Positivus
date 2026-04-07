export function Card({image,name,role,detail}){
    return(
        <>
        <div className="  relative ml-10  mt-5 w-80 rounded-4xl border p-8 shadow-xl   bg-white">
        
        <div className="flex justify-between items-center">

             <div className="flex items-center gap-3">
                <img 
                src={image}
                className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h2 className="font-semibold text-lg">{name}</h2>
                    <p className="text-gray-500 text-sm">{role}</p>
                </div>
             </div>

              <div className=" absolute top-5 right-5 bg-black text-lime-300  font-semibold text-sm  px-2 py-1 rounded-full">
          in
        </div>

        </div>
        <hr className="my-4" />

      
      <p className="text-gray-600 text-sm">{detail}</p>
        </div>
        </>
    )
}