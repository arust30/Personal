import React, { useRef, useState } from "react";
import TedPhone from "../assets/tedphone.png";
import TedEmail from "../assets/tedemail.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hp2vbge",
        "template_1ayf1yb",
        form.current,
        "_9sPC-R9huWnQ7KA-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="hidden lg:block">
              <h4 className="mb-1 pb-8 font-medium text-gray-900 dark:text-white">
                For questions, comments or inquiries about booking Pastor Rust
                as a supply preacher:
              </h4>
              <img
                className="h-10 w-1/2"
                src={TedPhone}
                alt="Ted's phone number"
              />
              <div className="pt-8"></div>
              <img
                className="h-10 w-1/2"
                src={TedEmail}
                alt="Ted's email address"
              />
              <h4 className="mb-1 font-medium text-gray-900 dark:text-white pt-8">
                Or leave a comment in the comment box to the right
              </h4>
            </div>
            <div className="col-span-2">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">
                Contact Ted
              </h2>
              <form onSubmit={handleSubmit} id="form" ref={form} className="space-y-8">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email address{" "}
                    <span className="text-xs text-gray-500">
                      (So I can reply to you)
                    </span>
                  </label>
                  <input
                    type="email"
                    email="email"
                    id="email"
                    name="email"
                    for="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    for="name"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Let me know who you are"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Let me know how I can help you"
                  ></textarea>
                  <div class="flex mt-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-light text-gray-500 dark:text-gray-400"
                    >
                      By submitting this form, you confirm that you have read
                      and agree to our{" "}
                      <a
                        class="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                        href="/"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        class="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                        href="/"
                      >
                        Privacy Statement
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    handleSubmit();
                  }
                  }
                >
                  Send message
                </button>
                {showMessage && (
                  <div class="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.293 14.707l5-5a1 1 0 0 0-1.414-1.414L10 12.586 7.707 10.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z"/></svg>
                    <p>Message sent successfully!</p>
                  </div>
                )}
                

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
