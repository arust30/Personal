import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import ByteSizeWebsiteScreenshot from "./images/ByteSizeWebsiteScreenshot.png";
import WhirlDataDashboardScreenshot from "./images/WhirlDataDashboardScreenshot.png";
import ByteSizeLearningLogoBlue from "./images/logos/ByteSizeLearningLogoBlue.png";
import WhirlLogo from "./images/logos/LetsWhirlLogo.png";
import LogTrackLogoBlue from "./images/logos/LogTrackLogoBlue.png";
import LogTrackWebAppScreenshot from "./images/LogTrackWebAppScreenshot.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ByteSize Learning Website",
      overview:
        "In this project, I built a website for ByteSize Learning, a learning platform that provides short, bite-sized courses to help kids learn new skills quickly and easily.",
      image: ByteSizeWebsiteScreenshot,
      logo: ByteSizeLearningLogoBlue,
      skills: [
        "React.js",
        "TailwindCSS",
        "Python",
        "Flask",
        "Stripe.js",
        "Firestore",
        "Firebase",
        "Cloud Run",
        "Docker",
      ],
      features: [
        "Responsive Design",
        "Payment Processing",
        "RESTful APIs",
        "Serverless Architecture",
        "Docker Containerization",
        "Continuous Integration",
      ],
      link: "https://www.bytesizelearning.org",
    },
    {
      id: 2,
      title: "Whirl Data Dashboard",
      overview:
        "Whirl Data Dashboard is a data visualization tool that helps the Founders of Let's Whirl understand the data they collect from their users and their app demograhics.",
      image: WhirlDataDashboardScreenshot,
      logo: WhirlLogo,
      skills: [
        "React.js",
        "TailwindCSS",
        "Regraph.js",
        "RESTful APIs",
        "Firebase",
      ],
      features: [
        "Data Visualization",
        "Data Analytics",
        "Responsive Design",
        "Admin Dashboard",
        "RESTful API",
        "Scalable Architecture",
        "Continuous Deployment",
      ],
      link: "https://www.bytesizelearning.org",
    },
    {
      id: 3,
      title: "LogTrack Tracking Web App",
      overview:
        "LogTrack is a web app that allows users to track their trucking shipments and share documents with their clients, partners, and other stakeholders - all in one place.",
      image: LogTrackWebAppScreenshot,
      logo: LogTrackLogoBlue,
      skills: ["React.js", "Material UI", "Node.js", "MySQL", "Figma"],
      features: [
        "Responsive Design",
        "User Authentication",
        "Tracking System",
        "Document Sharing",
        "Upload/Download Files",
        "RESTful API",
      ],
      link: "https://www.thelogtrack.com",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-white_alt bg-gradient-anim duration-2000 dark:bg-gray-900 h-full"
    >
      <div className="py-8 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
          Projects
        </h2>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          {projects.map((project) => (
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md mb-4 mt-[20vh]">
              <div key={project.id} className="text-center">
                <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
                  {project.title}
                </h3>
                {project.skills.map((skill) => (
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {skill}
                  </span>
                ))}
                <div className="flex max-w-5xl mt-8 lg:mt-16 mx-6 gap-8 lg:gap-16">
                  <img
                    className="w-[50%] rounded-lg shadow-lg"
                    src={project.image}
                    alt="nothing"
                  />
                  <img
                    className="w-[50%] object-contain"
                    src={project.logo}
                    alt="nothing"
                  />
                </div>
                <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2 lg:mt-16">
                  <div>
                    <div>
                      <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                        Overview
                      </h3>
                      <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400 text-left">
                        {project.overview}
                      </p>
                    </div>
                  </div>
                  <div class="space-y-8">
                    <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                      Features
                    </h3>
                    <ul class="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} class="flex items-center gap-2.5">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
