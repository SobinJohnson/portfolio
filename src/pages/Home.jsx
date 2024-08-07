import React from "react";
import "./Home.css";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="  h-dvh flex flex-col  w-1/2 text-slate-200 justify-center">
        <div className="pl-20 py-10 pb-14 w-full z-10 hero">
          <h1 className=" font-montserrat text-9xl font-black">Hi!</h1>
          <h1 className=" font-montserrat text-5xl font-black pt-4">
            I am Sobin Johnson
          </h1>
          <p className="max-w-lg pt-2">
            A full-stack developer with a passion for creating beautiful and
            functional web applications.
          </p>
          <div className="flex gap-6">
            <button className="bg-primary text-white font-montserrat mt-10 rounded-lg font-bold text-lg px-4 py-2 ">
              Contact Me
            </button>
            <button className=" text-white opacity-80 font-montserrat mt-10 font-semibold text-base py-2 ">
              Learn More
            </button>
          </div>
        </div>
        {/* <div className="absolute bg-transparent inset-0 z-10"> */}
        <Spline
          className="absolute bg-transparent inset-0 z-10"
          scene="https://prod.spline.design/ClgmpA82pYuUVvGu/scene.splinecode"
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
