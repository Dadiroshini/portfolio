import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 relative">
      {/* Top Yellow Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 relative">
          <span className="inline-flex items-center gap-2 text-yellow-400">
            <FaBriefcase className="text-4xl" />
          </span>{" "}
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 sm:p-8 relative">
          {/* Yellow Line on Top of the Card */}
          <div className="absolute top-0 left-0 w-full h-1  rounded-t-lg"></div>

          <div className="flex items-start gap-4">
            {/* Experience Icon */}
            <FaBriefcase className="text-yellow-400 text-3xl mt-1" />
            
            {/* Experience Details */}
            <div>
              <h3 className="text-xl font-bold">Frontend Developer<span className="font-medium">(Intern)</span></h3>
              <p className="text-gray-700 font-semibold">RFCHH Software PVT LTD</p>
              <p className="text-gray-600">August 2024 - January 2025</p>
              <p className="text-gray-700 mt-2">
                Worked on developing scalable web applications using{" "}
                <span className="font-semibold text-indigo-600">React.js</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Yellow Line */}
      <div className="absolute bottom-0 left-0 w-full h- bg-yellow-400"></div>
    </div>
  );
};

export default Experience;
