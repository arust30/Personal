import React from "react";
import TedPhoto1 from "../assets/tedandkids.jpg";
import TedPhoto2 from "../assets/tedbevandfreind.jpg";
import TedPhoto3 from "../assets/tedandctr.jpg";
import TedPhoto4 from "../assets/ted2.jpg";
import TedPhoto5 from "../assets/tedsenior.jpg";
import Contact from "./Contact";

const Biography = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Ted Rust's Biography
            </h2>
            <p class="mb-4">
              On Christmas Eve in 1975, I was called by God through my father's
              sermon into parish ministry. After completing a degree from
              Capital University in Columbus, Ohio, I graduated from Trinity
              Seminary and later earned a Doctorate in Ministry from Pittsburgh
              Theological Seminary. My dissertation focus, “The harvest is
              plentiful, but the laborers are few. Therefore pray earnestly to
              the Lord of the harvest to send out laborers into his harvest."
              Luke 10:2.
            </p>
            <p>
              This verse still inspires me to bring people to know, love, trust
              and serve Jesus, the Risen Christ. I have served growing
              congregations in Ohio and North Carolina and served as a mission
              developer in Lexington, Kentucky. My ministry includes music; I
              sing, play the keyboard and guitar, and do a little bit of
              songwriting too. In my free time I like to run, do yard work and
              play golf. I look forward to meeting you online or in person and
              to share with you the Good News of God's love and his promises
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src={TedPhoto2}
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src={TedPhoto1}
              alt="office content 2"
            />
          </div>
        </div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
            <div class="flex mb-2 md:flex-col md:mb-0">
              <img
                class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src={TedPhoto3}
                alt="office"
              />
            </div>
            <div class="flex mb-2 md:flex-col md:mb-0">
              <img
                class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src={TedPhoto4}
                alt="office 2"
              />
            </div>
            <div class="flex md:flex-col">
              <img
                class="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
                src={TedPhoto5}
                alt="office 3"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Biography;
