import contactRight from "../assets/contactRight.png";

export function ContactUs() {
    return (
        <div>

            {/* head */}
            <div className="flex items-center gap-6 px-10 py-6">
                <span className="bg-lime-300 px-4 py-1 rounded font-semibold text-lg">
                    Contact Us
                </span>

                <p className="text-gray-600 max-w-md text-sm">
                    Connect with Us: Let’s Discuss Your Digital Marketing Needs
                </p>
            </div>

            {/* mainBox */}
            <div className="mx-10 bg-gray-100 rounded-2xl flex items-center justify-between px-12 py-8 overflow-hidden">

  {/* left */}
  <div className="w-1/2"></div>

  {/* right */}
  <div className="w-1/2 flex justify-end relative">

    <img
      src={contactRight}
      alt="design"
      className="h-[320px] object-contain translate-x-20"
    />

  </div>

</div>
        </div>
    );
}