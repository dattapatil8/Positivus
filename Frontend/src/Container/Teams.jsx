import SocialIcon from "../assets/SocialIcon.png"
import Profile1 from "../assets/Profile1.png"
export function Teams(){

    return(
        <>
        <div className="flex ">
            <span className=" ml-10  h-10  text-center bg-lime-300 px-3 py-1 font-semibold rounded" >Team</span>
            <p className="ml-10"> Meet the skilled and experienced team behind our<br/>
                 successful digital marketing strategies</p>
        </div>

        <div className=" ml-10 mt-5 p-2 flex border rounded-2xl w-80 h-62">
            <div className="">
                <img className="mt-5 ml-60 w-10" 
                src={SocialIcon} />

                    <div className="flex ">
                <img className="w-20"
                 src={Profile1} />
                 </div>
            </div>   
        </div>
        </>
    )
}