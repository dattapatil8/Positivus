import { Link } from "react-router-dom";
import Positivus from "../assets/Positivus.png";
import Social from "../assets/Social.png";
import Social1 from "../assets/Social1.png";
import Social2 from "../assets/Social2.png";

export function FooterBlock() {
  return (
    <>
      <div className="bg-black rounded-t-4xl w-full px-5 md:px-10 py-14">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img src={Positivus} alt="logo" />

            <div className="flex flex-col md:flex-row gap-5 text-center">
              <Link
                to="/about"
                className="text-white underline decoration-white hover:text-[#B9FF66]"
              >
                About us
              </Link>

              <Link
                to="/services"
                className="text-white underline decoration-white hover:text-[#B9FF66]"
              >
                Services
              </Link>

              <Link
                to="/casestudies"
                className="text-white underline decoration-white hover:text-[#B9FF66]"
              >
                Use Cases
              </Link>

              <Link
                to="/pricing"
                className="text-white underline decoration-white hover:text-[#B9FF66]"
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className="text-white underline decoration-white hover:text-[#B9FF66]"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex gap-5">
            <img className="hover:scale-110 duration-300" src={Social} alt="" />
            <img className="hover:scale-110 duration-300" src={Social1} alt="" />
            <img className="hover:scale-110 duration-300" src={Social2} alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16">
          
          <div className="text-white max-w-md">
            <h1 className="bg-[rgba(185,255,102,1)] w-fit px-4 py-2 text-black text-xl font-bold rounded">
              Contact us:
            </h1>

            <h2 className="mt-8 text-lg">
              Email: info@positivus.com
            </h2>

            <h2 className="mt-6 text-lg leading-8">
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </h2>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row gap-5 items-center justify-center w-full lg:w-auto">
            <input
              className="border-2 border-white bg-transparent text-white h-14 px-5 rounded-2xl w-full md:w-72 outline-none"
              type="email"
              placeholder="Email"
            />

            <button className="bg-[rgba(185,255,102,1)] text-black font-bold h-14 px-8 rounded-2xl hover:bg-[#345a07] hover:text-white duration-300 w-full md:w-auto">
              Subscribe to news
            </button>
          </div>
        </div>

        <hr className="border-white mt-14" />

        <div className="text-white flex flex-col md:flex-row justify-between items-center gap-5 mt-10">
          <h2 className="text-center md:text-left">
            © 2023 Positivus. All Rights Reserved.
          </h2>

          <Link
            to="#"
            className="underline decoration-white hover:text-[#B9FF66]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
}