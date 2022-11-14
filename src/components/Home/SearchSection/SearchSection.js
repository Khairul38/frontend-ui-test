import React from "react";
import { MdHotel, MdFlightTakeoff, MdDirectionsCar } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import Dropdown from "../../Common/Dropdown";
import BatuEastJava from "../../../assets/images/batu-east-java.jpg";
import Kuta from "../../../assets/images/kuta.jpg";
import SurabayaEastJava from "../../../assets/images/surabaya-east-java.jpg";
import MalangEastJava from "../../../assets/images/malang-east-java.jpg";
import NusaDuaLombok from "../../../assets/images/nusa-dua-lombok.png";

const bestPlaces = [
  {
    id: 1,
    title: "Batu, East Java",
    details: "86 Destinations",
    img: BatuEastJava,
  },
  {
    id: 2,
    title: "Kuta",
    details: "86 Destinations",
    img: Kuta,
  },
  {
    id: 3,
    title: "Surabaya, East Java",
    details: "86 Destinations",
    img: SurabayaEastJava,
  },
  {
    id: 4,
    title: "Malang, East Java",
    details: "86 Destinations",
    img: MalangEastJava,
  },
  {
    id: 5,
    title: "Dieng, Central Java",
    details: "86 Destinations",
    img: MalangEastJava,
  },
  {
    id: 6,
    title: "Nusa Dua, Lomobok",
    details: "86 Destinations",
    img: NusaDuaLombok,
  },
  {
    id: 7,
    title: "Bandung, West Java",
    details: "86 Destinations",
    img: Kuta,
  },
  {
    id: 8,
    title: "Wakatobi, Sumatera",
    details: "86 Destinations",
    img: BatuEastJava,
  },
];

const SearchSection = () => {
  return (
    <div className="mb-20">
      {/* Section 1 */}
      <div className="flex justify-center relative">
        <div className="absolute top-[-90px] flex items-end w-5/6 gap-10 bg-white px-12 py-5 rounded-2xl">
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="flex space-x-5">
                <p className="flex items-center gap-1 font-semibold cursor-pointer">
                  <MdHotel size={20} /> Hotel
                </p>
                <p className="flex items-center gap-1 font-semibold text-gray-500 cursor-pointer">
                  <MdFlightTakeoff size={20} /> Flight
                </p>
                <p className="flex items-center gap-1 font-semibold text-gray-500 cursor-pointer">
                  <MdDirectionsCar size={20} /> Car Rental
                </p>
              </div>
              <div className="space-x-3">
                <Dropdown
                  name="Round Trip"
                  dropdownMenu={["Option 1", "Option 2", "Option 3"]}
                />
                <Dropdown
                  name="1 Passenger"
                  dropdownMenu={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
            </div>

            <hr className="my-5" />

            <div className="flex items-center space-x-">
              <div className="flex-1 bg-gray-100 px-5 py-1 rounded-lg border cursor-pointer">
                <h1 className="font-semibold">Location</h1>
                <p className="text-gray-400">Where are you from?</p>
              </div>

              <div className="ml-[-11px] mr-[-11px] z-10 bg-white text-gray-400 rounded-full p-0.5">
                <BiTransferAlt size={25} />
              </div>

              <div className="flex-1 bg-gray-100 px-5 py-1 rounded-lg border cursor-pointer">
                <h1 className="font-semibold">Check In</h1>
                <p className="text-gray-400">Add Date</p>
              </div>
              <div className="ml-[-11px] mr-[-11px] z-10 bg-white text-gray-400 rounded-full p-0.5">
                <BiTransferAlt size={25} />
              </div>
              <div className="flex-1 bg-gray-100 px-5 py-1 rounded-lg border cursor-pointer">
                <h1 className="font-semibold">Check Out</h1>
                <p className="text-gray-400">Add Date</p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-blue-600 text-white rounded-lg px-10 py-4">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-32 text-center">
        <h1 className="text-3xl font-bold mb-3">
          Search a best place in the world
        </h1>
        <p className="text-gray-500">
          {
            "Whether you're looking for places for a vacation. We are here to Guide you"
          }
          <br />
          {
            "about the details you need to check in and ease your trips in advance"
          }
        </p>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-4 gap-5 w-5/6 mx-auto mt-12">
        {bestPlaces.map((p) => (
          <div
            key={p.id}
            className="border-2 rounded-lg hover:bg-white hover:border-0 p-5 cursor-pointer"
          >
            <img src={p.img.src} alt="" className="w-14 h-14 rounded-lg mb-2" />
            <h1 className="font-bold">{p.title}</h1>
            <p className="text-gray-500">{p.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
