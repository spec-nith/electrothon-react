import React, { useEffect, useRef } from "react";
import Timeline from "../Timeline_new/Timeline_new";
import Header from "../Header/Header";
import anime from "animejs";
import SocialHeader from "../SocialMedia/SocialMedia";
import { NewMilestone } from "../newmilestones/NewMilestone";
import Timer from '../CountDown/countDown'

export default function Hero(props) {
  // const animationRef = useRef(null);
  const animeHandler = () => {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });
    tl.add({
      targets: ".social-handler",
      left: ["92%"],
    }).add({
      targets: ".social-handler",
      opacity: ["0", "1"],
    });
    document.removeEventListener("scroll", animeHandler);
    setTimeout(() => {
      const header = document.getElementById("header-handler");
      header.classList.remove("lg:hidden");
    }, 1000);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    // const heroSection = document.getElementById("hero-section");
    // heroSection.scrollIntoView();
    console.log("width", window.innerWidth);
    document.addEventListener("scroll", animeHandler);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full" style={props.style}>
      <SocialHeader />
      <div className="lg:hidden" id="header-handler">
        <Header />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center text-white">
        <div className="text-center flex flex-col justify-center items-center lg:w-1/2 m-auto font-thin">
          <p className="text-4xl md:text-6xl lg:text-8xl tracking-widest md:tracking-[0.6rem] lg:tracking-[1rem] hero-heading heading-glow font-bold md:font-light">
            ELECTROTHON
          </p>
          <p className="text-4xl md:text-6xl lg:text-8xl hero-heading heading-glow font-bold md:font-light">
            5.0
          </p>
          <p className="text-md md:text-lg lg:text-2xl font-semibold mt-2 hero-heading">
            MOONSHOT YOUR EUREKA
          </p>
          <div className="flex w-full justify-center mt-6 hero-heading">
            <div
              className="apply-button h-full"
              data-hackathon-slug="electrothon-5"
              data-button-theme="light"
            ></div>
          </div>
          <div>
        <Timer/>
      </div>
        </div>
        {/* <div className="font-[Poppins] mx-6 md:mx-24 lg:mx-auto lg:w-1/2 lg:mt-16 m-auto border-2 border-violet-500 bg-black/30 hero-about">
          <p className="text-2xl font-semibold lg:font-light md:text-4xl text-center p-4">
            About Us
          </p>
          <p className="text-md md:text-xl xl:text-xl text-center lg:font-light px-2 md:px-6 pb-4 md:pb-8 leading-normal md:leading-relaxed">
            Taking moonshots is no smooth sailing. It's an inherently
            unpredictable ride. As we launch the 5th in-person lunation of
            Electrothon, we strive for nothing less than the moon. Run by the
            student community SPEC under the moonlight of NIT Hamirpur,
            Electrothon has impacted over 5000 students. The budding hackers who
            joined Electrothon over its previous iterations left no stone
            unturned to ideate and amalgamate technologies that transfigure
            visions into reality.
          </p>
        </div> */}


      </div>
      <div className="text-4xl lg:text-6xl font-bold text-[#8471ae] tracking-wider my-4 lg:my-6 font-[Oswald] text-center">
        About Us
      </div>

      <div className="md:w-[900px] rounded-xl p-8 text-white mx-auto opacity-60">
        <p className="paraContent text-center">
          Taking moonshots is no smooth sailing. It's an inherently
          unpredictable ride. As we launch the 5th in-person lunation of
          Electrothon, we strive for nothing less than the moon. Run by the
          student community SPEC under the moonlight of NIT Hamirpur,
          Electrothon has impacted over 5000 students. The budding hackers who
          joined Electrothon over its previous iterations left no stone
          unturned to ideate and amalgamate technologies that transfigure
          visions into reality.
        </p>
      </div>
      
      {/* ---------------------------------------------------------------- */}

      {/* Milestones */}
      <NewMilestone />
      {/* <Milestone /> */}

      {/* Timeline */}
      <Timeline />
      {/* ---------------------------------------------------------------- */}
    </div>
  );
}


Hero.defaultProps = {
  style: {


  },
};
