import React from "react";
import "../css/hero.css"

function Hero() {
  return (
    <div className="bg-[black] text-center flex justify-evenly flex-col items-center h-[91vh]">
      <div>
        <p className="text-white font-bold text-3xl my-6">Welcome to</p>
        <p id="title" className="text-white font-bold text-8xl ">
          MindMendor
        </p>
      </div>
    </div>
  );
}

export default Hero;
