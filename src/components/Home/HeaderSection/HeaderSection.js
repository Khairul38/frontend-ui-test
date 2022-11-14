import React from "react";
import bg from "../../../assets/images/header-background.png";

const HeaderSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[70vh] flex items-center"
    >
      <h1 className="w-5/6 mx-auto text-5xl font-bold">
        Book With Us <br /> And Enjoy Your <br /> Journey !
      </h1>
    </div>
  );
};

export default HeaderSection;
