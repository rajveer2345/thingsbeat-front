import React from "react";
import hero from "../../assets/hero.png";
import RealTimeChart from "./RealTimeChart";

function Hero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container mx-auto flex justify-between items-center gap-20 px-20 py-7">
        <div className="max-w-[500px]  flex flex-col justify-center items-start gap-6 ">
          <h1 className="text-[52px] text-white font-semibold leading-14">
            Discover, Collect, Visualize & Analyze IoT Data Effortlessly
          </h1>
          <h1 className="text-gray-200 text-base">
            Seamlessly connect your devices, monitor real-time data, gain
            actionable insights, and optimize performance with intelligent
            analytics.
          </h1>
          <button className="text-sm font-medium text-white bg-[#427AA1] px-6 py-2 rounded-lg">
            Explore
          </button>
        </div>
        <div className="hidden lg:flex">
          <RealTimeChart />
        </div>
      </div>
    </div>
  );
}

export default Hero;
