export function Testimonials() {
  return (
    <div className="px-10 py-16 bg-gray-100 min-h-screen">

      
      <div className="flex items-center gap-8 mb-12">
        <h1 className="text-2xl font-bold bg-lime-400 px-4 py-2 rounded">
          Testimonials
        </h1>

        <p className="text-sm text-gray-700 leading-5">
          Hear from Our Satisfied Clients: Read Our Testimonials <br />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>

     
      <div className="bg-[#111827] rounded-3xl max-w-6xl mx-auto py-16 px-6 overflow-hidden">

       
        <div className="flex items-center justify-center gap-8 relative">

          
          <div className="w-72 -ml-40 opacity-80">
            <div className="border border-lime-400 rounded-3xl p-5 text-white text-sm relative">
              "We have been working with Positivus for the past year..."
               </div>
          </div>

         
          <div className="w-[420px]">
            <div className="border border-lime-400 rounded-3xl p-8 text-white text-sm leading-6 relative">
              "We have been working with Positivus for the past year and
              have seen a significant increase in website traffic and leads
              as a result of their efforts. The team is professional,
              responsive, and truly cares about the success of our business.
              We highly recommend Positivus to any company looking to grow
              their online presence."
            </div>

            <div className="mt-8 ml-6">
              <h3 className="text-lime-400 font-bold">John Smith</h3>
              <p className="text-gray-300 text-sm">
                Marketing Director at XYZ Corp
              </p>
            </div>
          </div>

          
          <div className="w-72 -mr-40 opacity-80">
            <div className="border border-lime-400 rounded-3xl p-5 text-white text-sm relative">
              "We have seen significant growth and excellent results..."
            </div>
          </div>
        </div>

        
        <div className="flex justify-center items-center gap-6 mt-12 text-white text-xl">
          <button>←</button>
          <div className="text-lime-400">★ ☆ ☆ ☆ ☆</div>
          <button>→</button>
        </div>
      </div>
    </div>
  );
}