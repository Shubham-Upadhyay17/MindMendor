import React from "react";
import "./css/contact.css";

function Contact() {
  return (
    <div className="bg-[#29292c] text-white px-20 md:px-40 py-10 flex flex-col justify-center items-center">
      <p className="font-semibold text-3xl text-center mb-1">
        Contact <span className="text-[#1479EA]">Us</span>
      </p>
      <div className="container text-justify lg:px-40 py-8 w-[100%] md:w-[65%] flex flex-col gap-15 justify-center items-center">
        <form
          className="box form__group field py-10 px-10 w-full flex flex-col gap-12"
          action="https://formspree.io/f/xyzgregg"
          method="POST"
        >
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Name"
              required
              className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
          <div className="relative">
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Email"
              required
              className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
          </div>
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Subject"
              className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
            />
            
          </div>
          <div className="relative">
            <textarea
              name="textarea"
              id="textarea"
              required
              placeholder="Write you message.."
              className="bg-transparent text-white px-4 py-5 placeholder-white"
            >
              
            </textarea>
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
