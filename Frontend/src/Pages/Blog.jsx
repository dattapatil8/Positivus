import React from "react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How SEO Helps Businesses Grow Online",
      desc: "Learn how search engine optimization improves website visibility and drives organic traffic.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 2,
      title: "Top Social Media Marketing Strategies",
      desc: "Discover effective social media techniques to increase engagement and brand awareness.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    },
    {
      id: 3,
      title: "Why Responsive Design Matters",
      desc: "Understand why responsive web design is important for modern businesses and user experience.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <div className="bg-[#F3F3F3] min-h-screen px-6 md:px-16 py-14">
      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-14">
        <h1 className="bg-[#B9FF66] px-5 py-2 text-3xl font-bold rounded">
          Blog
        </h1>

        <p className="text-gray-700 max-w-2xl text-lg">
          Explore the latest digital marketing insights, strategies, and trends
          to help your business grow online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden border border-black shadow-lg hover:-translate-y-2 duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>

              <p className="text-gray-600 mb-6">{blog.desc}</p>

              <button className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog