import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import invite from "../../assets/images/invite.png";
import coding from "../../assets/images/coding.png";
import person from "../../assets/images/person.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import collabrate from "../../assets/images/collabrate.png";
import succed from "../../assets/images/succed.png";
import innovate from "../../assets/images/innovate.png";
import video1 from "../../assets/images/video1.jpg";
import video2 from "../../assets/images/video2.jpg";
import video3 from "../../assets/images/video3.jpg";
import video4 from "../../assets/images/video4.jpg";
import video5 from "../../assets/images/video5.jpg";
import { StretchHorizontal, Trophy, Users, Video } from "lucide-react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();
  const [email, setemail] = useState("");
  const scroll = useRef(null);

  const scrollToWaitlist = () => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleWaitlist = async (e) => {
    e.preventDefault();
    toast({
      description: "Please wait...",
    });
    try {
      const res = await axios.post(
        "https://waitlistingbackend.onrender.com/subscribe",
        { email }
      );
      if (res.status === 200) {
        toast({
          description: res.data.message,
        });
        setemail("");
      } else {
        toast({
          variant: "destructive",
          description: res.error,
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        description:
          err.response?.data?.message || "An error occurred. Please try again.",
      });
    }
  };
  const cardData = [
    {
      icon: <Video />,
      title: "Live video calls",
    },
    {
      icon: <Trophy />,
      title: "Leaderboard",
    },
    {
      icon: <StretchHorizontal />,
      title: "Code with your teammates",
    },
    {
      icon: <Users />,
      title: "Live AI suggestions",
    },
  ];

  const sections = [
    {
      title: "COLLABORATE",
      text: "Want to collaborate on meaningful projects and make a difference with real-time translation and AI summary.",
      img: collabrate,
    },
    {
      title: "SUCCEED",
      text: "Secure your spot on the leaderboard and get a chance to win rewards.",
      img: succed,
    },
    {
      title: "INNOVATE",
      text: "Be a part of the growing community to enhance your skills and connections.",
      img: innovate,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* hero section  */}
      <main className='md:min-h-screen min-h-[70vh] bg-[url("/images/windows11bgmob.png")] lg:bg-[url("/images/windows11bg.png")] bg-no-repeat bg-top flex flex-col justify-center items-center text-center px-2 pt-24 md:pt-48 md:px-64'>
        <h1 className="text-5xl font-bold md:text-6xl">
          A personalised hub for your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
            Innovation
          </span>
        </h1>
        <button className="bg-[rgb(117,60,234)] text-2xl px-20 py-2 rounded-3xl mt-16"
        onClick={scrollToWaitlist}>
          Get Started
        </button>
      </main>

      {/* invite section  */}
      <section>
        <img src={invite} alt="invite image" />
      </section>

      {/* features section  */}
      <section className="min-h-screen min-w-full text-center py-32">
        <h2 className="text-3xl md:text-5xl font-semibold">
          FEATURES <span className="text-base">to get started with!</span>
        </h2>
        <div className='min-w-full bg-[url("/images/lightBgmob.png")] md:bg-[url("/images/lightBg.png")] bg-contain bg-no-repeat mt-12 pt-4 md:pt-12'>
          <h3 className="text-2xl md:text-4xl">LIGHT UP YOUR CODE</h3>
          <div className="flex flex-col lg:flex-row justify-center pt-4 md:pt-20">
            {/* text area  */}
            <div className="flex min-h-screen md:min-h-[140vh] flex-col justify-between lg:px-24 ">
              <div className="text-left p-2 md:p-6">
                <h3 className="text-3xl md:text-5xl font-bold w-3/4 md:leading-normal">
                  <span className="text-cyan-400">Personalised</span> coding
                  platform for teams
                </h3>
                <span>
                  SyncHub's smart tools and resources enable students to tailor
                  their learning journey, making education more personalized and
                  engaging.
                </span>
              </div>
              <div className="flex flex-row flex-wrap pt-10">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="flex-grow flex flex-col items-center gap-4 text-center p-8 hover:bg-slate-600 rounded-3xl text-xl"
                  >
                    <span>{card.icon}</span>
                    <span>{card.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* coding image  */}
            <div className="min-w-[50vw] h-[120vh] flex justify-end">
              <img src={coding} alt="coding image" />
            </div>
          </div>
        </div>
      </section>

      {/* hackathon section  */}
      <section className="w-full flex flex-row flex-wrap-reverse justify-evenly items-end py-4 md:py-24 gap-20 md:gap-0">
        {/* left side  */}
        <div className="md:h-[560px] text-center border-2 border-purple-900 rounded-2xl py-12 px-2 md:pt-12 md:px-16 relative">
          <div className="relative bottom-20 lg:bottom-40">
            <img src={person} alt="person image" />
          </div>
          <div className="text-2xl font-medium md:text-5xl pb-4 relative bottom-20">
            Ready to excel in
            <div>Hack?</div>
          </div>
          <span className="text-gray-400 relative bottom-20 text-xl">
            You are just one click away
          </span>
          <div className="text-xl pt-8 flex flex-row justify-center gap-6 relative bottom-20">
            <button className="bg-[rgb(117,60,234)] py-1 px-6 rounded-3xl">
              Participate
            </button>
            <button className="text-[rgb(117,60,234)] border-2 border-[rgb(117,60,234)] py-1 px-10 rounded-3xl">
              Judge
            </button>
          </div>
        </div>

        {/* right side  */}
        <div className="md:w-[30vw] pt-16 text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-bold leading-normal pb-6">
            AI Powered <span className="text-cyan-400">Hackathons</span>
          </h3>
          <span>
            AI Powered hackathons allow users to work on hackathons with
            students of different cities with our cutting age technologies and
            features .
          </span>
        </div>
      </section>

      <section className="w-full flex flex-row flex-wrap-reverse justify-evenly items-end py-4 md:py-24 gap-20 md:gap-0">
        <div className="content-header">
          <h2>Create a content that</h2>
          <h3>INSPIRES</h3>
          <p>&gt;&gt;</p>
        </div>

        <div className="video-container">
          <img className="video small" src={video1}></img>
          <img className="video small" src={video2}></img>
          <img className="video full" src={video3}></img>
          <img className="video small" src={video4}></img>
          <img className="video small" src={video5.jpg}></img>
        </div>
      </section>

      <section>
        <div className="integration-section">
          <h1 className="integration-heading">Integrate with any platform</h1>
          <p className="integration-subheading">
            We built the ultimate tool for showcasing your work to business.
            With 3-lines of HTML code, you can embed all your projects to any
            platform!
          </p>
        </div>

        <div className="image-row">
          <img src={img1} alt="Image 1" className="image-item" />
          <img src={img2} alt="Image 2" className="image-item" />
          <img src={img3} alt="Image 3" className="image-item" />
          <img src={img4} alt="Image 4" className="image-item" />
        </div>
      </section>

      <section>
        <div className="md:w-[90vw] connect-container">
          <div className="text-section">
            <div className="badge">Easy to manage</div>
            <h1>
              Connect with <span className="highlight">Business</span>
            </h1>
            <p>
              Technika helps students and businesses to seamlessly onboard the
              best talents from our platform reducing manpower efforts in
              onboarding talent.
            </p>
          </div>
          <div className="md:w-[90vw] image-section">
            <img src={img5} alt="Connect" className="image" />
            <h2>Technika helps you connect</h2>
            <button className="demo-button">Schedule a live demo!</button>
          </div>
        </div>
      </section>

      <section className="synchubb-container">
        <h3 className="main-heading">
          SyncHubb is a <span className="highlight">place to</span>
        </h3>

        <div className="carousel">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`section ${
                index === activeIndex ? "active" : "inactive"
              }`}
            >
              <h4 className="section-heading">{section.title}</h4>
              <p className="section-text">{section.text}</p>
              <button className="learn-more-button">Learn more →</button>
              <img
                src={section.img}
                alt={section.title}
                className="section-image"
              />
            </div>
          ))}
        </div>

        <div className="indicator-dots">
          {sections.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active-dot" : ""}`}
            ></span>
          ))}
        </div>
      </section>

        <section ref={scroll}>
          <div className="md:w-[90vw]  waitlist-container">
            <h2>Join Our Waitlist</h2>
            <form className="input-container" onSubmit={handleWaitlist}>
              <input
                type="email"
                placeholder="Enter your mail address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
    </div>
  );
};

export default Home;
