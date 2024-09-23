import React from "react";
import peopleImg from "../../assets/images/people-collaborating-online.svg";
import { useNavigate } from "react-router-dom";
const Article = () => {
  const navigate = useNavigate();

  const handleCreateProjectClick = () => {
    console.log('Create Project button clicked!');
  };

  const handleApplyInternshipClick = () => {
    console.log('Apply for Internship button clicked!');
  };

  const handleJoinTeamClick = () => {
    navigate('/teams');
  };

  return (
    <>
      <article className="flex flex-col md:flex-row items-center justify-center min-h-screen px-5 md:px-10">
        {/* Article Content */}
        <div className="flex flex-col gap-8 items-start justify-evenly md:w-[50vw] md:pl-44 md:gap-0">
          <h1 className="text-4xl md:text-6xl font-thin mb-9">
            Empowering Student Creativity
          </h1>

          <div className="article-button flex flex-col gap-8 text-base md:text-2xl">
            <button
              className="border-2 px-9 py-2 rounded-3xl border-transparent bg-gradient-to-r from-[#23FFDA] to-[#991517] text-white cursor-pointer"
              onClick={handleCreateProjectClick}
            >
              Create Project
            </button>
            <button
              className="border-2 px-9 py-2 rounded-2xl border-transparent bg-gradient-to-r from-[#23FFB9] to-[#451599] text-white cursor-pointer"
              onClick={handleApplyInternshipClick}
            >
              Apply for Internship
            </button>
            <button
              className="bg-gradient-to-r from-[#23E9FF] to-[#191599] text-white py-2 px-5 rounded-full hover:bg-gradient-to-r hover:from-[#43a7f9] hover:to-[#286394] hover:drop-shadow-lg"
              onClick={handleJoinTeamClick}
            >
              Join a team
            </button>
          </div>
        </div>

        {/* Article Image */}
        <div className="flex justify-center items-center md:flex-1 relative">
          <img
            width="800"
            src={peopleImg}
            alt="Collaboration"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p className="text-white text-lg text-center">Team Collaboration</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
