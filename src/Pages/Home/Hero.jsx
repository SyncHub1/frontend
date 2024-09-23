import React from "react";
import img1 from "../../assets/images/vector.svg";
const Hero = () => {
  const handleJoinClick = () => {
    // Navigate to the join-team page
    window.location.href = "join-team.html";

    // Or display a message
    // alert("Thank you for your interest in joining a team!");
  };

  return (
    <>
    {/* hero section  */}
      <div className="min-h-[90vh] flex flex-col justify-center items-start lg:items-center lg:flex-row pl-14">

        {/* text content  */}
        <div className="pt-24 h-[50vh] flex flex-col justify-around items-start md:w-[40vw] md:pt-0">
        <h1 class="text-4xl md:text-7xl font-light leading-tight tracking-wider">
          Discover. Engage. Succeed
        </h1>
        <span class="text-xl md:text-3xl block font-thin leading-none my-5">
          Your one-stop productive social media partner
        </span>

          <button
            onClick={handleJoinClick}
            className="py-2 px-6 text-lg font-light bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition duration-300"
          >
            Join a team
          </button>
        </div>

        {/* Image Content */}
        <div class="flex-1 flex justify-end m-0 p-0">
          <img src={img1} alt="Team vector" class="max-w-full h-auto drop-shadow-[12px_8px_10px_hsl(255,_38%,_59%)] object-contain mix-blend-lighten" width="600" />
        </div>
      </div>
    </>
  );
};

export default Hero;
