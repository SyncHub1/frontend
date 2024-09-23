import React from "react";
import img1 from "../../assets/images/Rectangle3.svg";
import img2 from "../../assets/images/Rectangle4.svg";
import img3 from "../../assets/images/Rectangle10.svg";
import img4 from "../../assets/images/Rectangle 11.svg";
const Offerings = () => {
  const features = [
    {
      img: img1,
      title: "Comprehensive Student Support",
      description:
        "SyncHub provides dedicated support to students, ensuring they have the resources and assistance needed to thrive in academic and extracurricular pursuits.",
    },
    {
      img: img2,
      title: "Effective Project Management",
      description:
        "SyncHub ensures smooth workflows and collaboration, empowering students to work together effectively on various projects and initiatives.",
    },
    {
      img: img3,
      title: "Personalized Learning Experience",
      description:
        "SyncHub's smart tools and resources enable students to tailor their learning journey, making education more personalized and engaging.",
    },
    {
      img: img4,
      title: "Empowering Opportunities",
      description:
        "SyncHub's smart tools and resources enable students to tailor their learning journey, making education more personalized and engaging.",
    },
  ];

  return (
    <>
      <div className="p-20">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-normal mb-8">Our Offerings</h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            SyncHub offers a wide array of features to facilitate seamless
            communication, efficient project management, and skill development
            for students.
          </p>
        </div>

        {/* Features Section */}
        <div className="features flex flex-wrap justify-between pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#E0D5BA] p-4 w-[260px] mb-10 rounded-3xl md:opacity-60 hover:transform hover:scale-110 hover:opacity-100"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-auto"
              />
              <h2 className="text-xl font-normal mt-4 text-black pl-2">
                {feature.title}
              </h2>
              <p className="text-sm font-light text-[#504646] mt-2 pl-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offerings;
