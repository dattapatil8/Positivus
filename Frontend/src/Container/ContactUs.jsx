import { useState } from "react";
import contactRight from "../assets/contactRight.png";

// radio Group
function RadioGroup({ type, setType }) {
  return (
    <div className="flex items-center gap-6 mb-6">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="type"
          value="hi"
          checked={type === "hi"}
          onChange={() => setType("hi")}
          className="accent-lime-400"
        />
        Say Hi
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="type"
          value="quote"
          checked={type === "quote"}
          onChange={() => setType("quote")}
        />
        Get a Quote
      </label>
    </div>
  );
}

// input field
function InputField({ label, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-400 rounded-xl px-4 py-3 outline-none"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// txtarea field
function TextAreaField({ label, name, value, onChange, error }) {
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        className="w-full border border-gray-400 rounded-xl px-4 py-3 outline-none resize-none"
      ></textarea>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// button
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg"
    >
      {text}
    </button>
  );
}

// main component
export function ContactUs() {
  const [type, setType] = useState("hi");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    // get quote
    if (type === "quote" && !form.budget) {
      newErrors.budget = "Budget is required for quote";
    }

    return newErrors;
  };

  // submit
  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted ✅");
      console.log(form);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-6 px-10 py-6 mt-10">
        <span className="bg-lime-300 px-4 py-1 rounded font-semibold text-lg">
          Contact Us
        </span>

        <p className="text-gray-600 max-w-md text-sm">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Box */}
      <div className="mx-20 bg-gray-100 rounded-2xl flex items-center justify-between px-10 py-8 overflow-hidden mb-14">
        
        {/* Left */}
        <div className="w-[60%]">
          <RadioGroup type={type} setType={setType} />

          <InputField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextAreaField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
          />

          {/* Get a Quote */}
          {type === "quote" && (
            <InputField
              label="Budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              error={errors.budget}
            />
          )}

          <Button text="Send Message" onClick={handleSubmit} />
        </div>

        {/* Right */}
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