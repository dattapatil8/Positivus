import Illustration from "../assets/Illustration.png";
import FooterImg from "../assets/Footer.png"
export function Home(){
    return(
        <>
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
       <div className="mt-5">
              <img src={FooterImg} />
          </div>
        </>
    )
}