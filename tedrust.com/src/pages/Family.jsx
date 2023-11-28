import React from "react";
import TedImage from "../assets/Ted.png";
import Christian from "../assets/Christian.jpg";
import Hope from "../assets/Hope.jpg";
import Daniel from "../assets/Daniel.jpg";
import Beverly from "../assets/Mom.jpg";
import Butterscotch from "../assets/Butterscotch.jpg";
import Andrew from "../assets/Andrew.png";
import Contact from "./Contact";

const Family = () => {
  const family = [
    {
      name: "Ted Rust",
      location: "New Bern, NC",
      image: TedImage ,
    },
    {
      name: "Beverly Rust",
      location: "New Bern, NC",
      image: Beverly,
    },
    {
      name: "Christian Rust",
      location: "Durham, NC",
      image: Christian,
    },
    {
      name: "Hope Rust",
      location: "Raleigh, NC",
      image: Hope,
    },
    {
      name: "Daniel Rust",
      location: "Morrisville, NC",
      image: Daniel,
    },
    {
      name: "Butterscotch",
      location: "New Bern, NC",
      image: Butterscotch,
    },
    {
      name: "Andrew Rust",
      location: "New York, NY",
      image: Andrew,
    },
  ];

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              The Rust family
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              The Rust family Beverly and I have been married for thirty
              wonderful years and we have been blessed with four grown children.
              We love our adopted state of North Carolina and look forward to
              many more years together serving Christ and one another.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {family.map((member) => (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full object-contain"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p>{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Family;
