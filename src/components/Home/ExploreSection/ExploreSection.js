import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
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
    avRating: "4.91",
    totalRating: "(147)",
    price: 210,
    img: ComfortSpace1,
  },
  {
    id: 2,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    avRating: "4.91",
    totalRating: "(147)",
    price: 210,
    img: ComfortSpace2,
  },
  {
    id: 3,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    avRating: "4.91",
    totalRating: "(147)",
    price: 210,
    img: ComfortSpace3,
  },
  {
    id: 4,
    title: "Comfort Space",
    details: "1.2 km to Town Center",
    location: "Turkey, Mamaris",
    rooms: 375,
    avRating: "4.91",
    totalRating: "(147)",
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
          <p className="text-gray-500">10,788 beautiful places to go</p>
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
      <div className="grid grid-cols-4 gap-5 mt-8">
        {exploreWorld.map((e) => (
          <div key={e.id} className="rounded-xl p-3 bg-white border hover:border-0 hover:shadow-xl cursor-pointer">
            <img src={e.img.src} alt="" className="rounded-xl w-full h-36" />
            <div className="flex space-x-2 mt-4">
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
                {e.totalRating}
              </p>
            </div>
            <div className="flex justify-between items-center my-1">
              <h1 className="font-bold">{e.title}</h1>
              <p className="bg-blue-100 rounded-md px-2 font-semibold text-blue-500">
                ${e.price}
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-3">{e.details}</p>
            <p className="flex text-sm text-gray-500 mb-2 gap-2">
              <HiOutlineLocationMarker size={20} /> {e.location}
            </p>
            <p className="flex text-sm text-gray-500 gap-2">
              <HiOutlineOfficeBuilding size={20} /> Rooms available: {e.rooms}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
