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
function InputField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-xl px-4 py-3 outline-none ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// textarea field
function TextAreaField({ label, name, value, onChange, error }) {
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        className={`w-full border rounded-xl px-4 py-3 outline-none resize-none ${
          error ? "border-red-500" : "border-gray-400"
        }`}
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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // validation function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Budget validation only for quote
    if (type === "quote") {
      if (!form.budget.trim()) {
        newErrors.budget = "Budget is required";
      } else if (isNaN(form.budget)) {
        newErrors.budget = "Budget must be a number";
      } else if (Number(form.budget) < 1000) {
        newErrors.budget = "Minimum budget should be 1000";
      }
    }

    return newErrors;
  };

  // submit
  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully ✅");
      console.log(form);

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
        budget: "",
      });

      setErrors({});
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-6 px-10 py-6 mt-10">
        <span className="text-2xl ml-3 bg-[rgba(185,255,102,1)] w-50 text-center h-10">
          <b>Contact Us</b>
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
            type="email"
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

          {/* Quote field */}
          {type === "quote" && (
            <InputField
              label="Budget"
              name="budget"
              type="number"
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