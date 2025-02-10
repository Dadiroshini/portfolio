import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-10 px-4 sm:py-12 sm:px-6 bg-gray-900 text-white"
    >
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      {/* Content Section */}
      <div className="w-full sm:w-5/6 md:w-3/4 bg-white text-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mx-auto relative z-10">
  <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-indigo-900">
    About Me
  </h2>
  <p className="leading-relaxed text-base sm:text-lg text-center sm:text-left">
    A problem-solver at heart and a designer by passion, I am a{" "}
    <span className="text-yellow-400 font-semibold">
      Frontend Developer
    </span>{" "}
    with a background in{" "}
    <span className="text-yellow-400 font-semibold">
      Computer Science and Engineering
    </span>
    . I thrive at the intersection of creativity and logic, transforming complex ideas into immersive digital experiences.
  </p>
  <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
    My expertise lies in{" "}
    <span className="text-yellow-400 font-semibold">React.js</span> and{" "}
    <span className="text-yellow-400 font-semibold">JavaScript</span>, where I craft intuitive, high-performance user interfaces that prioritize both form and function. Whether it's engineering seamless interactions, optimizing accessibility, or ensuring pixel-perfect designs, I am driven by the art of precision.
  </p>
  <p className="leading-relaxed text-base sm:text-lg mt-4 text-center sm:text-left">
    Beyond the code, I see every project as a story one where technology meets emotion, and interfaces become intuitive extensions of human behavior. Fueled by curiosity, I continuously explore the evolving landscape of frontend development to push the boundaries of what’s possible.
  </p>
</div>



      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
    </section>
  );
};

export default About;
