import Link from "next/link";
import React from "react";
import DropdownProfile from "../ui/DropdownProfile";
import Logo from "../../assets/logo/logo.png";
import USDFlag from "../../assets/images/usd-flag.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white">
      <Link href="/" className="flex items-center">
        <img src={Logo.src} className="h-10 w-10 cursor-pointer" alt="" />
        <h1 className="font-bold text-lg ml-1">TripGuide</h1>
      </Link>

      <div className="flex items-center justify-center ml-auto space-x-5">
        <div className="flex items-center">
          <h1 className="font-semibold">USD</h1>
          <img src={USDFlag.src} className="h-6 w-6 rounded-full ml-5" alt="" />
        </div>
        <IoMdNotificationsOutline size={25} />
        <hr className="h-9 border-r border-gray-200" />
        <DropdownProfile
          user={{ displayName: "Delowar", email: "delowar@gmail.com" }}
          align="right"
        />
      </div>
    </div>
  );
};

export default Navbar;
