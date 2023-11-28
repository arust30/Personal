import React from "react";
import TedHeadshot from "../assets/tedheadshot.png";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section class="bg-[url('././assets/churchbackground.jpg')] bg-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply h-[60vh] justify-center items-center">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="object-cover w-full"
              src={TedHeadshot}
              alt="Ted Rust of Ted Rust Ministries"
            />
          </div>
          <div class="mr-auto place-self-center lg:col-span-7 bg-white opacity-80 p-6 rounded-xl">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Ted Rust Ministries
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome friends to Ted Rust Ministries! I am a preacher of the
              Christian Word, trained in Lutheran theology, with forty-two years
              of service to His kingdom. I am available for supply preaching and
              can also serve as a musician and evangelism consultant. Follow my
              weekly online messages or contact me to arrange pulpit supply or
              help with your specific congregational needs
            </p>
            <a
              href="/sermons"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800"
            >
              View Sermons
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/contact"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
