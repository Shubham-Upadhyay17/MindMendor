import React from "react";
import Authenticateheader from "../Authenticateheader";
import Footer from "../../Footer";

function Therapistlogin() {
  return (
    <div>
      <Authenticateheader />
      <div className="bg-[#212121] text-white h-[90vh] px-40 py-10 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl text-center mb-1">
          Therapist <span className="text-[#1479EA]">Login</span>
        </p>
        <div className="container text-justify lg:px-40 py-8 w-[60%] flex flex-col gap-15 justify-center items-center">
          <form
            className="box form__group field py-10 px-10 w-full flex flex-col gap-14"
            action="https://formspree.io/f/xyzgregg"
            method="POST"
          >
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email id"
                required
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <button className="submit-btn" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Therapistlogin
