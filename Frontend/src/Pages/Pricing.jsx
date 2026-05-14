import React from "react";

 function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$29/month",
      features: [
        "SEO Optimization",
        "Social Media Support",
        "Basic Analytics",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$59/month",
      features: [
        "Advanced SEO",
        "Content Marketing",
        "Email Marketing",
        "Performance Reports",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$99/month",
      features: [
        "Full Marketing Strategy",
        "24/7 Support",
        "Custom Campaigns",
        "Advanced Analytics",
      ],
    },
  ];

  return (
    <div className="bg-[#F3F3F3] min-h-screen px-6 md:px-16 py-14">
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-14">
        <h1 className="bg-[#B9FF66] px-5 py-2 text-3xl font-bold rounded">
          Pricing Plans
        </h1>

        <p className="text-gray-700 max-w-2xl text-lg">
          Choose a pricing plan that fits your business goals and digital
          marketing needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white border border-black rounded-3xl p-8 shadow-lg hover:-translate-y-2 duration-300"
          >
            <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>

            <h3 className="text-4xl font-bold mb-8">{plan.price}</h3>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <p key={index} className="text-lg">
                  ✓ {feature}
                </p>
              ))}
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl text-lg hover:scale-105 duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing