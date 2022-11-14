import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ComfortSpace1 from "../../../assets/images/comfort-space-1.jpg";
import ComfortSpace2 from "../../../assets/images/comfort-space-2.jpg";
import ComfortSpace3 from "../../../assets/images/comfort-space-3.jpg";
import ComfortSpace4 from "../../../assets/images/comfort-space-4.jpg";

const exploreWorld = [
  {
    id: 1,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    rating: "4.91 (147)",
    price: 210,
    img: ComfortSpace1,
  },
  {
    id: 2,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    rating: "4.91 (147)",
    price: 210,
    img: ComfortSpace2,
  },
  {
    id: 3,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    rating: "4.91 (147)",
    price: 210,
    img: ComfortSpace3,
  },
  {
    id: 4,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    rating: "4.91 (147)",
    price: 210,
    img: ComfortSpace4,
  },
];

const ExploreSection = () => {
  return (
    <div className="w-5/6 mx-auto mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-3">Explore The World</h1>
          <p className="text-gray-500">Keep calm & travel on</p>
        </div>
        <div>
          <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full mr-2">
            <FiChevronLeft size={15} />
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            <FiChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {exploreWorld.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundImage: `url(${t.img.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="rounded-lg p-5"
          >
            <span className="font text-white text-sm bg-gray-500 bg-opacity-50 rounded-2xl px-4 py-1">
              {t.location}
            </span>
            <div className="mt-72">
              <h1 className="font-semibold text-2xl text-white">{t.title}</h1>
              <div className="flex items-center space-x-2 mt-2">
                {/* <img src={User.src} alt="" className="rounded-full w-6 h-6" /> */}
                <p className="text-white">{t.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
