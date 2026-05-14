import React from "react";

 function About() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen px-6 md:px-16 py-14">
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-14">
        <h1 className="bg-[#B9FF66] px-5 py-2 text-3xl font-bold rounded">
          About Us
        </h1>

        <p className="text-gray-700 max-w-2xl text-lg">
          Learn more about our digital marketing agency, our mission, and how
          we help businesses grow online with modern marketing strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="team"
            className="rounded-3xl shadow-lg border border-black"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            We Create Digital Solutions For Modern Businesses
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Positivus is a creative digital marketing agency focused on helping
            businesses improve their online presence through SEO, social media
            marketing, branding, and web design solutions.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-8">
            Our goal is to deliver high-quality marketing experiences that help
            brands connect with customers and achieve long-term growth in the
            digital world.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="bg-white border border-black rounded-3xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold mb-4">150+</h3>

          <p className="text-gray-700 text-lg">
            Successful projects delivered for clients worldwide.
          </p>
        </div>

        <div className="bg-white border border-black rounded-3xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold mb-4">98%</h3>

          <p className="text-gray-700 text-lg">
            Client satisfaction through quality digital solutions.
          </p>
        </div>

        <div className="bg-white border border-black rounded-3xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold mb-4">24/7</h3>

          <p className="text-gray-700 text-lg">
            Dedicated support and consultation for every project.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;