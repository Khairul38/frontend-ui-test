import React from "react";
import BgBeachHobby from "../../../assets/images/beach-hobby.jpg";
import BgCityTours from "../../../assets/images/city-tours.jpg";
import BgHikingTrips from "../../../assets/images/hiking-trips.jpg";
import BgSportsTrips from "../../../assets/images/sports-trips.jpg";

const travelPassion = [
  {
    id: 1,
    title: "Beach Hobby",
    avRating: "4.91",
    totalRating: "(147)",
    img: BgBeachHobby,
  },
  {
    id: 2,
    title: "City Tours",
    avRating: "4.91",
    totalRating: "(147)",
    img: BgCityTours,
  },
  {
    id: 3,
    title: "Hiking Trips",
    avRating: "4.91",
    totalRating: "(147)",
    img: BgHikingTrips,
  },
  {
    id: 4,
    title: "Sports Trips",
    avRating: "4.91",
    totalRating: "(147)",
    img: BgSportsTrips,
  },
];

const PassionSection = () => {
  return (
    <div className="w-5/6 mx-auto mb-20">
      <div>
        <h1 className="text-3xl font-bold mb-3">Travel Your Passion</h1>
        <p className="text-gray-500">
          Most Brilliant reasons Entrada should be your one-stop-shop!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {travelPassion.map((p) => (
          <div
            key={p.id}
            style={{
              backgroundImage: `url(${p.img.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="rounded-lg p-4"
          >
            <div className="mt-72 lg:mt-52 xl:mt-72">
              <h1 className="font-semibold text-xl text-white">{p.title}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <button>
                  <span className="sr-only">1 star</span>
                  <svg
                    className="w-4 h-4 fill-current text-amber-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                  </svg>
                </button>
                <p className="text-white">
                  {p.avRating} {p.totalRating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassionSection;
