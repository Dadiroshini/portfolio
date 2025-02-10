import React from "react";
import AWS from "../assets/AWS.jpeg";
import careernet from "../assets/careernet.jpeg";
import Hacking from "../assets/Hacking.jpeg";

function Certificates() {
  const certificates = [
    {
      title: "Virtual Internship Completion Certificate",
      description:
        "Certified by AWS Cloud Internship.",
      issueDate: "May 2022",
      image: AWS,
    },
    {
      title: "CareerTech 2.0",
      description:
        "Participated in The Ultimate Skill Showdown For Backend Engineering wizards .",
      issueDate: "17 February 2024",
      image: careernet,
    },
    // {
    //   title: "Appreciation Certificate from RFCHH",
    //   description:
    //     "Awarded for outstanding contribution to the organization, demonstrating leadership and commitment to excellence.",
    //   issueDate: "01 November 2024",
    //   image: Apprecitation,
    // },
    {
      title: "Nikistian Media Private Limited",
      description:
        "Certificate Of Attending Ethical Hacking.",
      issueDate: "May 2024",
      image: Hacking,
    },
    // {
    //   title: "Celonis Academy",
    //   description:
    //     "Certificate Of Celonis Foundation .",
    //   issueDate: "September 2022",
    //   image: Apprecitation,
    // },
  ];

  return (
    <section
      id="certificates"
      className="relative py-16 bg-gray-900 text-white"
    >
      {/* Line on top of the section */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-gray-500 text-sm mb-4">
                  Issued on: {cert.issueDate}
                </p>
                <p className="text-yellow-500 font-medium hover:underline">
                  View Certificate
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

