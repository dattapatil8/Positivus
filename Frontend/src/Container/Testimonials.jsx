import { useEffect, useState } from "react";

export function Testimonials() {
  const testimonials = [
    {
      text: " Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services...",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leadsas a result of their efforts. The team is professional,responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Sarah Lee",
      role: "CEO at ABC Ltd",
    },
    {
      text: "We have been working with Positivus for the past year...",
      name: "David Brown",
      role: "Founder at Startup Inc",
    },
  ];

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-10 py-16 bg-gray-100 min-h-screen">
      
      <div className="flex items-center gap-8 mb-12">
        <h1 className="text-2xl font-bold bg-[rgba(185,255,102,1)]  px-4 py-2 rounded">
          Testimonials
        </h1>

        <p className="text-sm text-gray-700 leading-5">
          Hear from Our Satisfied Clients: Read Our Testimonials <br />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#111827] rounded-3xl max-w-6xl mx-auto px-6 h-[420px] flex flex-col justify-between">
        
        <div className="flex justify-center items-center mt-10">
          
          <div className="w-[420px] transition-all duration-700 ease-in-out">
            <div className="border border-lime-400 rounded-3xl p-8 text-white text-sm leading-6">
              "{testimonials[index].text}"
            </div>

            <div className="mt-8 ml-6">
              <h3 className="text-lime-400 font-bold">
                {testimonials[index].name}
              </h3>
              <p className="text-gray-300 text-sm">
                {testimonials[index].role}
              </p>
            </div>
          </div>

        </div>

        
        <div className="flex justify-center items-center gap-6 mt-12 text-white text-xl">
          <button
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
          >
            ←
          </button>

          <div className="text-lime-400">
            {index + 1} / {testimonials.length}
          </div>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % testimonials.length)
            }
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}