import Illustration from "../assets/Illustration.png";
import Frame from "../assets/Frame.png"
import Footer from "../assets/Footer.png"
export function Home(){
    return(
        <>
        <div className="flex justify-between p-3" >
            <img  src={Frame} />
            <ul className="flex h-15 items-center  gap-15  " >
                <li className="hover:border p-2  rounded">About us</li>
                <li className="hover:border p-2  rounded">Services</li>
                <li className="hover:border p-2  rounded">Use Cases</li>
                <li className="hover:border p-2  rounded">Pricing</li>
                <li className="hover:border p-2  rounded">Blog</li>
                <li className="hover:border p-2  rounded">Request a quote</li>
            </ul>
        </div>

        <div className=" flex  "><h1 className="text-5xl mt-20  ml-10  ">Navigating the <br/>
                 digital landscape<br/>
                 for success </h1>

            <img className=" mt-20 ml-150 w-100"
                      src={Illustration}
                        alt="logo"
                  />
      </div>

      <div className="ml-10">
        <p>Our digital marketing agency helps businesses <br/>
            grow and succeed online through a range of<br/>
             services including SEO, PPC, social media marketing,<br/>
              and content creation.</p>
      </div>

      <button className=" mt-5 ml-10 bg-black p-4  text-white rounded-xl  ">Book a consultation</button>

      <footer className="mt-5">
        <img src={Footer} />
      </footer>
                 
        </>
    )
}