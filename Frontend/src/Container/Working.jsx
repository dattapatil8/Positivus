import { useState } from "react";

export function Working() {
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);

  return (
    <>
      <div className="px-5 md:px-10 py-10 ">
        
        <div className="flex flex-col md:flex-row gap-5 md:items-center">
          <h1 className="text-3xl font-bold bg-[rgba(185,255,102,1)] px-5 py-2 rounded w-fit">
            Our Working Process
          </h1>

          <h4 className="text-gray-700">
            Step-by-Step Guide to Achieving <br />
            Your Business Goals
          </h4>
        </div>

        <div className="space-y-8 mt-14">

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">01</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Consultation
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay(!display)}
              >
                {!display ? "+" : "-"}
              </button>
            </div>

            {display ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  During the initial consultation, we will discuss your business
                  goals and objectives, target audience, and current marketing
                  efforts. This will allow us to understand your needs and
                  tailor our services to best fit your requirements.
                </h6>
              </div>
            ) : null}
          </div>

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">02</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Research and Strategy Development
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay1(!display1)}
              >
                {!display1 ? "+" : "-"}
              </button>
            </div>

            {display1 ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  In this phase, we conduct in-depth research on your industry,
                  competitors, and target audience. Based on these insights, we
                  develop a customized strategy that aligns with your business
                  goals and ensures maximum impact.
                </h6>
              </div>
            ) : null}
          </div>

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">03</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Implementation
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay2(!display2)}
              >
                {!display2 ? "+" : "-"}
              </button>
            </div>

            {display2 ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  Once the strategy is finalized, we begin executing the planned
                  activities. This includes deploying marketing campaigns,
                  optimizing platforms, and ensuring everything runs smoothly
                  according to the strategy.
                </h6>
              </div>
            ) : null}
          </div>

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">04</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Monitoring and Optimization
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay3(!display3)}
              >
                {!display3 ? "+" : "-"}
              </button>
            </div>

            {display3 ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  We continuously track performance metrics and analyze results
                  to identify areas of improvement. Based on data insights, we
                  optimize campaigns to enhance efficiency and achieve better
                  outcomes.
                </h6>
              </div>
            ) : null}
          </div>

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">05</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Reporting and Communication
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay4(!display4)}
              >
                {!display4 ? "+" : "-"}
              </button>
            </div>

            {display4 ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  We provide regular reports detailing the performance of
                  campaigns and key achievements. Clear communication ensures
                  you stay informed about progress and any strategic
                  adjustments.
                </h6>
              </div>
            ) : null}
          </div>

          <div className="w-full border-2 rounded-3xl shadow-xl/30 hover:bg-[rgba(185,255,102,1)] transition duration-300">
            <div className="flex justify-between items-center px-5 md:px-8 py-5">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">06</h1>

                <h3 className="text-lg md:text-2xl font-semibold">
                  Continual Improvement
                </h3>
              </div>

              <button
                className="h-12 w-12 rounded-full border-2 bg-amber-50 hover:bg-amber-100 cursor-pointer"
                onClick={() => setDisplay5(!display5)}
              >
                {!display5 ? "+" : "-"}
              </button>
            </div>

            {display5 ? (
              <div className="px-5 md:px-10 pb-6">
                <hr />

                <h6 className="mt-5 text-gray-700 leading-8">
                  We focus on long-term growth by constantly refining strategies
                  and exploring new opportunities. Continuous learning and
                  improvements help maintain and improve performance over time.
                </h6>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </>
  );
}