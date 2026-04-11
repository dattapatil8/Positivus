import contactRight from "../assets/contactRight.png";

export function ContactUs() {
    return (
        <div className="m-">
         {/* head */}
            <div className="flex items-center gap-6 px-10 py-6 mt-10">
                <span className="bg-lime-300 px-4 py-1 rounded font-semibold text-lg">
                    Contact Us
                </span>

                <p className="text-gray-600 max-w-md text-sm">
                    Connect with Us: Let’s Discuss Your Digital Marketing Needs
                </p>
            </div>

            {/* box */}
            <div className="mx-20 bg-gray-100 rounded-2xl flex items-center justify-between px-10 py-8 overflow-hidden mb-14">

  {/* left */}
  <div className="w-[60%]">
         {/* Radio Buttons */}
      <div className="flex items-center gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input type="radio" name="type" defaultChecked className="accent-lime-400" />
          Say Hi
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="type" />
          Get a Quote
        </label>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-400 rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Email*</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-400 rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block mb-1 text-sm">Message*</label>
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full border border-gray-400 rounded-xl px-4 py-3 outline-none resize-none"
        ></textarea>
      </div>

      {/* Button */}
      <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg">
        Send Message
      </button>

  </div>

  {/* right */}
  <div className="w-[40%] flex justify-end relative overflow-hidden">
    <img
      src={contactRight}
      alt="design"
      className="h-[320px] object-contain translate-x-24"
    />
  </div>

</div>
        </div>
    );
}