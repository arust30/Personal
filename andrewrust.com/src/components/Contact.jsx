import React, { useRef } from "react";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h0bjfod",
        "template_u8np72g",
        form.current,
        "_9sPC-R9huWnQ7KA-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white_alt to-primary bg-gradient-anim duration-2000 dark:bg-gray-900 h-[200%] text-center"
    >
      <div className="max-w-6xl mx-auto px-4 pt-[30vh]">
      <h2 className="text-4xl font-bold text-primary mb-8 mt-[20vh]">Contact Me</h2>

      <a
        href="/"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg duration-200 bg-primary border-primary text-white_alt hover:bg-light_gray hover:text-primary mr-4"
      >
        Book a Meeting
      </a>
      <a
        href="/"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray duration-200 border border-black rounded-lg hover:bg-light_gray"
      >
        Email Me
      </a>
      <p className="text-lg text-white_alt font-light mb-4 mt-4">
        Here is where to reach me:
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Left half - render Contact form */}
        <div className="md:w-1/2 p-4 m-4 text-left">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-white mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@gmail.com" 
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="How can I help you?"
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg duration-200 bg-primary border-primary text-white_alt hover:bg-light_gray hover:text-primary mr-4"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right half - render Calendly */}
        <div className="md:w-1/2 p-4 h-full">
          <div>
            <InlineWidget
              styles={{
                height: "60vh",
                width: "30vw",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
              }}
              url="https://calendly.com/andrew-rust/networking?hide_gdpr_banner=1"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
