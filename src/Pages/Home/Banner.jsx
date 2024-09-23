import React from "react";
import groupImg from "../../assets/images/Group.svg";
const Banner = () => {
  return (
    <>
      <div className="flex items-start justify-between bg-gradient-to-b from-teal-300 to-blue-900 px-14 pt-12 rounded-tr-[10rem] mx-auto">
        {/* Banner Image */}
        <div class="hidden md:flex relative -bottom-5 pt-16">
          <img 
            src={groupImg} 
            alt="Banner" 
            class="w-full h-[250px] object-contain" 
          />
        </div>


        {/* Banner Text */}
        <div class="md:flex-4 text-start md:text-start text-center">
          <h2 class="text-4xl md:text-6xl font-light leading-tight text-black md:w-[40vw]">
            Get bored of academic curriculum!
          </h2>
          <p class="text-sm md:text-lg text-gray-800 mt-4 mx-auto max-w-[90%] md:max-w-[60%] pb-12">
            SyncHub is dedicated to providing a platform where students can
            unleash their full potential and thrive in a community of like-minded peers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
