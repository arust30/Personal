import React, { useState } from "react";
import ColumbiaPoloHeadshot from "../images/AndrewHeadshotColumbiaPolo.png";
// import BlueTieSuitHeadshot from "../images/AndrewHeadshotBlueTieSuit.png";
import { ArrowDownTrayIcon, CheckIcon } from "@heroicons/react/24/outline";
import AndrewResume from "../images/RustAndrewSWEResumeMarch2023.pdf";

function Header() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  // };

  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = AndrewResume;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "RustAndrewSWEResumeMarch2023.pdf";
    document.body.appendChild(link);
    link.click();
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
      document.body.removeChild(link);
    }, 5000);
  };

  const lettersOfName = "Andrew Rust".split("");

  const lettersOfDescription =
    "I am a full-stack web developer with a passion for building stuff and helping people.".split(
      ""
    );

  const lettersOfNameWithSpans = lettersOfName.map((letter, index) => {
    return (
      <span
        key={index}
        className="hover:text-primary hover:font-extrabold transition duration-200 ease-in-out"
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
          className="hover:text-primary hover:font-extrabold transition duration-200 ease-in-out"
        >
          {letter}
        </span>
      );
    }
  );

  return (
    <>
      <section
        id="home"
        class="grid max-w-screen-xl h-[75vh] px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-12 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            {lettersOfNameWithSpans}
          </h1>
          <p class="max-w-2xl mb-12 font-light text-gray lg:mb-8 md:text-lg lg:text-xl">
            {lettersOfDescriptionWithSpans}
          </p>
          <a
            href="#download"
            style={{ cursor: "pointer" }}
            onClick={handleDownload}
            className={`mt-4 inline-flex items-center justify-center px-5 py-3 mr-8 text-base font-medium text-center rounded-lg duration-200 hover:font-bold ${
              isDownloaded
                ? "bg-secondary border-secondary text-white_alt hover:secondary hover:border-secondary"
                : "bg-primary border-primary text-white_alt hover:bg-light_gray hover:text-primary"
            } border-2`}
          >
            {isDownloaded ? (
              <>
                Downloaded
                <CheckIcon className="w-5 h-5 ml-2 -mr-1" />
              </>
            ) : (
              <>
                Download Resume
                <ArrowDownTrayIcon className="w-5 h-5 ml-2 -mr-1" />
              </>
            )}
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray border border-black rounded-lg hover:bg-light_gray duration-200 hover:font-bold"
          >
            Contact Me
          </a>
        </div>

        <div
          className="lg:mt-0 lg:col-span-5 lg:flex"
          // onMouseEnter={handleHover}
          // onMouseLeave={handleHover}
        >

        {/* <div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          // onMouseEnter={handleHover}
          // onMouseLeave={handleHover}
        > */}
                      <img
              src={ColumbiaPoloHeadshot}
              alt="Me in a blue tie and suit"
              className="object-cover transition-opacity duration-200 ease-out opacity-100"
            />
          {/* {isHovered ? (
            <img
              src={BlueTieSuitHeadshot}
              alt="Me in a Columbia polo"
              className="object-cover transition-opacity duration-200 opacity-0 hover:opacity-90"
            />
          ) : (
            <img
              src={ColumbiaPoloHeadshot}
              alt="Me in a blue tie and suit"
              className="object-cover transition-opacity duration-200 ease-out opacity-100 hover:opacity-0"
            />
          )} */}
        </div>
      </section>
    </>
  );
}

export default Header;
