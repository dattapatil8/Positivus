import Frame from "../assets/Frame.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(185,255,102,1)] px-4 md:px-8 py-4 w-full">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Frame} className="w-24 md:w-28" alt="logo" />
        </Link>

        <div className="hidden md:flex text-lg gap-6 items-center">
          <Link
            to="/about"
            className="text-black font-semibold text-base md:text-lg px-3 py-2 transition duration-300 hover:shadow-xl hover:border rounded"
          >
            About us
          </Link>

          <Link
            to="/services"
            className="text-black font-semibold text-base md:text-lg px-3 py-2 transition duration-300 hover:shadow-xl hover:border rounded"
          >
            Services
          </Link>

          <Link
            to="/casestudies"
            className="text-black font-semibold text-base md:text-lg px-3 py-2 transition duration-300 hover:shadow-xl hover:border rounded"
          >
            Use Cases
          </Link>

          <Link
            to="/pricing"
            className="text-black font-semibold text-base md:text-lg px-3 py-2 transition duration-300 hover:shadow-xl hover:border rounded"
          >
            Pricing
          </Link>

          <Link
            to="/blog"
            className="text-black font-semibold text-base md:text-lg px-3 py-2 transition duration-300 hover:shadow-xl hover:border rounded"
          >
            Blog
          </Link>

          <Link
            to="/quote"
            className="text-black font-semibold text-base md:text-lg px-4 py-2 border rounded cursor-pointer hover:shadow-xl"
          >
            Request a quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-6 bg-white p-6 rounded-2xl shadow-xl">
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            About us
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Services
          </Link>

          <Link
            to="/casestudies"
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Use Cases
          </Link>

          <Link
            to="/pricing"
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Pricing
          </Link>

          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Blog
          </Link>

          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="border rounded-lg px-4 py-3 text-center font-semibold"
          >
            Request a quote
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;