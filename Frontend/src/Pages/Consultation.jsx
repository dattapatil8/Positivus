import React from "react";

export default function Consultation() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen px-6 md:px-16 py-14">
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-14">
        <h1 className="bg-[#B9FF66] px-5 py-2 text-3xl font-bold rounded">
          Book a Consultation
        </h1>

        <p className="text-gray-700 max-w-2xl text-lg">
          Schedule a free consultation with our digital marketing experts and
          discover strategies to grow your business online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white border border-black rounded-3xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
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
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-black rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Preferred Service
              </label>

              <select className="w-full border border-black rounded-xl px-4 py-3 outline-none">
                <option>SEO Optimization</option>
                <option>Social Media Marketing</option>
                <option>Web Design</option>
                <option>Content Marketing</option>
                <option>Brand Strategy</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your business goals..."
                className="w-full border border-black rounded-xl px-4 py-3 outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-lg hover:scale-105 duration-300">
              Book Now
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="consultation"
            className="w-[300px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}