import React from "react";

 function Quote() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen px-6 md:px-16 py-14">
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-14">
        <h1 className="bg-[#B9FF66] px-5 py-2 text-3xl font-bold rounded">
          Request a Quote
        </h1>

        <p className="text-gray-700 max-w-2xl text-lg">
          Fill out the form below and our team will get back to you with a
          customized solution for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-black">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-black rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-black rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company Name
              </label>

              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border border-black rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Service Required
              </label>

              <select className="w-full border border-black rounded-xl px-4 py-3 outline-none">
                <option>SEO Optimization</option>
                <option>Social Media Marketing</option>
                <option>Pay Per Click</option>
                <option>Web Design</option>
                <option>Content Marketing</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Project Details
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border border-black rounded-xl px-4 py-3 outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-lg hover:scale-105 duration-300">
              Submit Request
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="quote"
            className="w-[300px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Quote