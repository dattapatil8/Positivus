export function CaseStudies() {
  return (
    <div className="px-10 py-12 font-sans">
      
      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <span className="text-2xl ml-3 bg-[rgba(185,255,102,1)] w-50 text-center h-10"><b>Case Studies</b></span>

        <p className="text-gray-500 max-w-md">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Cards */}
      <div className="flex bg-slate-900 text-white rounded-2xl p-8 gap-6">
        
        {/* Card 1 */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <a href="#" className="inline-block mt-4 text-lime-300 font-semibold">
            Learn more →
          </a>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gray-600"></div>

        {/* Card 2 */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <a href="#" className="inline-block mt-4 text-lime-300 font-semibold">
            Learn more →
          </a>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gray-600"></div>

        {/* Card 3 */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            For a national retail chain, we created a social media marketing campaign
            that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <a href="#" className="inline-block mt-4 text-lime-300 font-semibold">
            Learn more →
          </a>
        </div>

      </div>
    </div>
  );
}