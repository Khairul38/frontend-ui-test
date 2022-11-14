import React from "react";
import Manila from "../../../assets/images/manila.jpg";
import SanFrancisco from "../../../assets/images/san-francisco.jpg";
import FrankfurtMain from "../../../assets/images/frankfurt-main.jpg";
import Washington from "../../../assets/images/washington.jpg";
import Stockholm from "../../../assets/images/stockholm.jpg";
import Seattle from "../../../assets/images/settle.jpg";

const trendingCities = [
  {
    id: 1,
    title: "Manila",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: Manila,
  },
  {
    id: 2,
    title: "San Francisco",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: SanFrancisco,
  },
  {
    id: 3,
    title: "Frankfurt Main",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: FrankfurtMain,
  },
  {
    id: 4,
    title: "Washington",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: Washington,
  },
  {
    id: 5,
    title: "Stockholm",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: Stockholm,
  },
  {
    id: 6,
    title: "Seattle",
    avRating: "4.91",
    totalRating: "(147)",
    price: "250.00",
    img: Seattle,
  },
];

const CitesSection = () => {
  return (
    <div className="w-5/6 mx-auto mb-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Trending Cites</h1>
        <p className="text-gray-500">
          The most searched for cities on TripGuid
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        {trendingCities.map((e) => (
          <div
            key={e.id}
            className="rounded-xl p-5 bg-white border hover:border-0 hover:shadow-xl cursor-pointer flex items-center space-x-6"
          >
            <img src={e.img.src} alt="" className="rounded-xl w-40 h-44" />
            <div className="space-y-5">
              <h1 className="font-bold text-lg">{e.title}</h1>
              <div className="flex space-x-2">
                <button>
                  <span className="sr-only">1 star</span>
                  <svg
                    className="w-4 h-4 fill-current text-amber-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                </button>
                <p>
                  <span className="font-semibold">{e.avRating}</span>{" "}
                  <span className="text-gray-400">{e.totalRating}</span>
                </p>
              </div>

              <p>
                <span className="font-bold text-lg">${e.price}</span>{" "}
                <span className="text-gray-400">/night</span>
              </p>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitesSection;
