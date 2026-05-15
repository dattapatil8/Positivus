import searchengine from "../assets/1st.png";
import payper from "../assets/pay-per.png";
import socialmedia from "../assets/social-media.png";
import analytetrac from "../assets/analyte-trac.png";
import emailmark from "../assets/email-mark.png";
import emailmarket from "../assets/email-market.png";
import proposal from "../assets/proposal.png";

export function Services() {
  return (
    <>
      <div className="px-5 md:px-10 py-10 ">
        
        <div className="flex flex-col md:flex-row gap-5 md:items-center mt-10">
          <h1 className="text-3xl font-bold bg-[rgba(185,255,102,1)] px-5 py-2 rounded w-fit">
            Services
          </h1>

          <h4 className="text-gray-700 max-w-3xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(185,255,102,1)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Search engine</h1>
                <h2>optimization</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-[rgba(30,12,30,0.71)] hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img
              className="w-52 mt-8 md:mt-0"
              src={searchengine}
              alt=""
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(185,255,102,1)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(241,235,241,0.9)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Pay-per-click</h1>
                <h2>Advertising</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-[rgba(30,12,30,0.71)] hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img className="w-52 mt-8 md:mt-0" src={payper} alt="" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(185,255,102,1)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(241,235,241,0.9)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Content</h1>
                <h2>creation</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-[rgba(30,12,30,0.71)] hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img className="w-52 mt-8 md:mt-0" src={socialmedia} alt="" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(30,12,30,0.71)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(185,255,102,1)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Analytics and</h1>
                <h2>Tracking</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-white hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img className="w-52 mt-8 md:mt-0" src={analytetrac} alt="" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(30,12,30,0.71)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(185,255,102,1)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Social Media</h1>
                <h2>Marketing</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-white hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img className="w-52 mt-8 md:mt-0" src={emailmark} alt="" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl p-8 hover:shadow-xl transition duration-300">
            <div>
              <div className="bg-[rgba(185,255,102,1)] text-2xl font-semibold px-4 py-2 rounded-xl w-fit">
                <h1>Email</h1>
                <h2>Marketing</h2>
              </div>

              <a
                href="#"
                className="inline-block mt-16 text-xl text-[rgba(30,12,30,0.71)] hover:text-red-500"
              >
                → Learn more
              </a>
            </div>

            <img className="w-52 mt-8 md:mt-0" src={emailmarket} alt="" />
          </div>
        </div>

        <div className="mt-16 border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-10 hover:shadow-xl transition duration-300">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">
              Let’s make things happen
            </h1>

            <h2 className="text-lg mt-5 text-gray-700 leading-8">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </h2>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl hover:bg-lime-400 hover:text-black transition duration-300">
              Get Your free proposal
            </button>
          </div>

          <img className="w-72 md:w-96" src={proposal} alt="" />
        </div>
      </div>
    </>
  );
}