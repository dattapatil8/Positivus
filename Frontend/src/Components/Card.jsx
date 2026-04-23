import { Link } from "react-router-dom";
export function Card({image,name,role,detail}){
    return(
        <>
        <div className="relative mt-5 w-full max-w-sm mx-auto rounded-4xl border p-6 md:p-8  bg-white hover:shadow-xl hover:border transition druration-300 ">
        
        <div className="flex justify-between items-center">

             <div className="flex items-center gap-3">
                <img 
                src={image}
               className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                    <h2 className="font-semibold text-base md:text-lg">{name}</h2>
                  <p className="text-gray-500 text-xs md:text-sm">{role}</p>
                </div>
             </div>

             <div className="absolute top-3 right-3 md:top-5 md:right-5 bg-black text-lime-300 text-xs md:text-sm font-semibold px-2 py-1 rounded-full">
        <a 
                 href="https://www.linkedin.com/company/linkedin"> in </a>

              </div>

        </div>
        <hr className="my-4" />

      
          <p className="text-gray-600 text-sm md:text-base">{detail}</p>
        </div>
        </>
    )
}