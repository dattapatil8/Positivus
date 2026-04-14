import Illustration from "../assets/Illustration.png";
import FooterImg from "../assets/Footer.png";

export function Home() {
  return (
    <>
          <div className="flex justify-between items-center px-10 py-10">

        
        <div className="max-w-xl">
          <h1 className="text-7xl font-semibold leading-tight">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p className="mt-20 text-gray-600 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl cursor-pointer transition-shadow duration-300 hover:bg-lime-400 hover:text-black hover:shadow-xl  ">
            Book a consultation
          </button>
        </div>

    
        <div>
          <img
            className=" mr-20 w-[500px]"
            src={Illustration}
            alt="illustration"
          />
        </div>
      </div>

      <div className="px-10 pb-10">
        <img className="w-full mt-4" src={FooterImg} alt="brands" />
      </div>
    </>
  );
}