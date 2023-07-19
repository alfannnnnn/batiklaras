import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import whatsapp from "../assets/whatsapp.svg";
import shopee from "../assets/shopee.svg";
import tokped from "../assets/tokped.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTogle, setIsTogle] = useState(false);

  return (
    <div className="w-full bg-white sticky top-0 z-50 border-b shadow-md">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between relative">
          <Link to="/batiklaras">
            <img src={logo} alt="logo" className="h-8 lg:h-10 cursor-pointer" />
          </Link>
          <img
            src={isTogle ? close : menu}
            alt="menu"
            className="h-12 cursor-pointer"
            onClick={() => setIsTogle(!isTogle)}
          />
          <div
            className={`${
              isTogle ? "fixed" : "hidden"
            } z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 right-0`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
              <li className="px-4 py-2 flex justify-start items-center gap-2 hover:bg-gray-100">
                <img src={whatsapp} className="h-6" />
                <Link to="https://api.whatsapp.com/send/?phone=62882008983907&text&type=phone_number&app_absent=0">
                  Whatsapp
                </Link>
              </li>
              <li className="px-4 py-2 flex justify-start items-center gap-2 hover:bg-gray-100">
                <img src={shopee} className="h-6" />
                <Link to="https://shopee.co.id/batiklaras.id?page=0&shopCollection=244805503">
                  Shopee
                </Link>
              </li>
              <li className="px-4 py-2 flex justify-start items-center gap-2 hover:bg-gray-100">
                <img src={tokped} className="h-6" />
                <Link to="https://www.tokopedia.com/batik-laras?source=universe&st=product">
                  Tokopedia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
