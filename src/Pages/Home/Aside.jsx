import React, { useState } from "react";
import frameImg from "../../assets/images/Frame 427318907.svg";
import arrow from "../../assets/images/Arrow.svg";
const Aside = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      console.log("Email submitted:", email);
      setEmail("");
    } else {
      console.log("Email failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-evenly p-10">
        {/* text  */}
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl text-3xl md:text-5xl font-light">
            Elevate your student experience with SyncHub's cutting-edge
            solutions designed to maximize productivity and collaboration.
          </div>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-h-10 px-3 py-2 border-none bg-gradient-to-r from-indigo-900 to-cyan-400 text-white w-56 rounded-l-3xl"
            />
            <button
              onClick={handleSubmit}
              className="border-none bg-cyan-400 h-10 flex items-center justify-center rounded-r-3xl p-1"
            >
              <img src={arrow} alt="Submit" className="h-full" />
            </button>
          </div>
        </div>

        {/* image  */}
        <div class="flex items-center justify-center pt-8">
          <img src={frameImg} alt="Frame" class="max-w-full max-h-32" />
        </div>
      </div>
    </>
  );
};

export default Aside;
