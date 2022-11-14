import React from "react";
import BgBarcelonaTour from "../../../assets/images/barcelona-tour.jpg";
import BgLondon from "../../../assets/images/london-united-state.jpeg";
import BgAustralia from "../../../assets/images/australia-tour-2.jpg";
import BgAustralia2 from "../../../assets/images/australia-tour.jpg";
import BgJapan from "../../../assets/images/japan-tour.jpg";
import BgJapan2 from "../../../assets/images/japan-tour-2.png";
import User from "../../../assets/images/user-32-01.jpg";

const DestinationsSection = () => {
  return (
    <div className="w-5/6 mx-auto mb-20">
      <div>
        <h1 className="text-3xl font-bold mb-3">Featured Destinations</h1>
        <p className="text-gray-500">
          Popular destinations open to visitors from Indonesia
        </p>
      </div>
      <div className="grid grid-rows-[repeat(18,_minmax(0,_1fr))] grid-flow-col gap-5 mt-5">
        <div
          style={{
            backgroundImage: `url(${BgBarcelonaTour.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 h-60 col-span-2 row-[span_8_/_span_8]"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-32">
            <h1 className="font-semibold text-2xl text-white">
              Barcelona Tour
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgLondon.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 col-span-1 row-[span_10_/_span_10]"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-48">
            <h1 className="font-semibold text-2xl text-white">
              London, United State
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgAustralia.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 col-span-1 row-[span_10_/_span_10]"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-48">
            <h1 className="font-semibold text-2xl text-white">
              Australia Tour
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgAustralia2.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 row-span-6"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-[63px]">
            <h1 className="font-semibold text-2xl text-white">
              Australia Tour
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgJapan.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 row-span-6"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-[63px]">
            <h1 className="font-semibold text-2xl text-white">Japan Tour</h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgJapan2.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg p-3 row-span-6"
        >
          <span className="font-bold text-red-500 text-sm bg-white rounded-xl px-3">
            3.5
          </span>
          <div className="mt-[63px]">
            <h1 className="font-semibold text-2xl text-white">Japan Tour</h1>
            <div className="flex items-center space-x-2 mt-2">
              <img src={User.src} alt="" className="rounded-full w-6 h-6" />
              <p className="text-white">196 Activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsSection;
