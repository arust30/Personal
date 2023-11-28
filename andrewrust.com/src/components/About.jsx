import React, { useState } from "react";

// If I eventually get good images to go here, I'll uncomment these
// import NCSSMImage from "./images/NCSSMImage.png";
// import WFUImage from "./images/WFUImage.png";
// import ColumbiaImage from "./images/ColumbiaImage.png";

// For now, I'll just use the logos
import {
  BeakerIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

//import Github and LinkedIn logos
// import GitHubLogoWhite from "./images/logos/GitHubLogoWhite.png";
import GitHubLogoDark from "./images/logos/GitHubLogoDark.png";
import LinkedInLogoWhite from "./images/logos/LinkedInLogoWhite.png";
import LinkedInLogoBlue from "./images/logos/LinkedInLogoBlue.png";

//Experience logos
import LetsWhirlLogo from "./images/logos/LetsWhirlLogo.png";
import YakkertechLogo from "./images/logos/YakkertechLogo.svg";
import LogTrackLogo from "./images/logos/LogTrackLogoBlue.png";
import ByteSizeLogo from "./images/logos/ByteSizeLogo.png";

function About() {
  const education = [
    {
      id: 1,
      school: "North Carolina School of Science and Mathematics (NCSSM)",
      degree: "High School Diploma",
      dates: "2016 - 2018",
      icon: BeakerIcon,
    },
    {
      id: 2,
      school: "Wake Forest University",
      degree:
        "Bachelor of Science in Engineering, Minor in Computer Science, Mathematics",
      dates: "2019 - 2022",
      icon: BuildingLibraryIcon,
    },
    {
      id: 3,
      school: "Columbia University",
      degree: "Master of Science in Computer Engineering",
      dates: "2022 - 2023",
      icon: AcademicCapIcon,
    },
  ];

  const experiences = [
    {
      id: 1,
      name: "ByteSize Learning",
      title: "Founder, Tech Lead",
      dates: "September 2020 - Present",
      image: ByteSizeLogo,
    },
    {
      id: 2,
      name: "Let's Whirl",
      title: "Software Engineer",
      dates: "May 2022 - Present",
      image: LetsWhirlLogo,
    },
    {
      id: 3,
      name: "Yakkertech",
      title: "Software Engineer",
      dates: "February 2023 - Present",
      image: YakkertechLogo,
    },
    {
      id: 4,
      name: "LogTrack",
      title: "Software Engineer",
      dates: "September 2022 - May 2023",
      image: LogTrackLogo,
    },
  ];

  const [isLinkedInHovering, setIsLinkedInHovering] = useState(false);

  const lettersOfName = "About Me".split("");

  const lettersOfDescription =
    "Here is where I've learned and worked:".split(
      ""
    );

  const lettersOfNameWithSpans = lettersOfName.map((letter, index) => {
    return (
      <span
        key={index}
        className="hover:text-dark_gray hover:font-extrabold transition duration-200 ease-in-out"
      >
        {letter}
      </span>
    );
  });

  const lettersOfDescriptionWithSpans = lettersOfDescription.map(
    (letter, index) => {
      return (
        <span
          key={index}
          className="hover:text-dark_gray hover:font-extrabold transition duration-200 ease-in-out"
        >
          {letter}
        </span>
      );
    }
  );



  return (
    <section id="about" className="bg-gradient-to-b from-primary to-white h-[150vh] text-center bg-no-repeat bg-top" style={{"background-size": "100% 100%"}}>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white_alt">
        {lettersOfNameWithSpans}
      </h2>
      <a
        href="https://www.linkedin.com/in/andrew-rust30/"
        className="inline-flex items-center justify-center px-5 py-3 mr-8 text-base font-medium text-center rounded-lg bg-primary border-primary duration-200 text-white_alt hover:bg-light_gray hover:text-primary"
        onMouseEnter={() => setIsLinkedInHovering(true)}
        onMouseLeave={() => setIsLinkedInHovering(false)}
        style={{ cursor: "pointer" }}
      >
        LinkedIn
        {isLinkedInHovering ? (
          <img src={LinkedInLogoBlue} className="w-5 h-5 ml-3 duration-200" alt="nothing" />
        ) : (
          <img src={LinkedInLogoWhite} className="w-5 h-5 ml-3 duration-200" alt="nothing" />
        )}
      </a>

      <a
        href="https://www.github.com/arust30"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray border border-black rounded-lg hover:bg-light_gray duration-200"
        style={{ cursor: "pointer" }}
      >
        Github
        <img src={GitHubLogoDark} className="w-5 h-5 ml-3" alt="nothing" />

      </a>
      <p className="text-lg text-white_alt font-light mb-4 mt-4">
        {lettersOfDescriptionWithSpans}
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Left half - render education */}
        <div className="md:w-1/2 p-12">
          <h3 className="text-2xl font-bold mb-4 text-white_alt">Education</h3>
          <hr className="mb-8 w-[50%] items-center justify-center mx-auto" />
          {education.map((item) => (
            <div key={item.id} className="flex mb-4 hover:bg-light_gray hover:bg-opacity-30 hover:border-2 justify-center align-middle duration-200">
              <item.icon className="w-1/5 h-16 mr-4 rounded-lg my-4" />
              <div className="flex-1 text-left my-3">
                <h4 className="text-lg font-bold text-white_alt">{item.school}</h4>
                <p className="font-light text-white_alt">{item.degree}</p>
                <p className="font-light text-white_alt">{item.dates}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right half - render experience */}
        <div className="md:w-1/2 p-12">
          <h3 className="text-2xl font-bold mb-4 text-white_alt">Experience</h3>
          <hr className="mb-8 w-[50%] items-center justify-center mx-auto" />
          {experiences.map((item) => (
            <div key={item.id} className="flex mb-4 hover:bg-light_gray hover:bg-opacity-30 hover:border-2 justify-center align-middle duration-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-1/3 h-24 object-contain mx-4 rounded-lg"
              />
              <div className="flex-1 text-left my-3">
                <h4 className="text-lg font-bold text-white_alt">{item.name}</h4>
                <p className="font-light text-white_alt">{item.title}</p>
                <p className="font-light text-white_alt">{item.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
