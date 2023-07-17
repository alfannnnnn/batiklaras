import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import whatsapp from "../assets/whatsapp.svg";
import shopee from "../assets/shopee.svg";

const Navbar = () => {
  const [isTogle, setIsTogle] = useState(false);

  return (
    <div className="w-full bg-white sticky top-0 z-50 border-b shadow-md">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between relative">
          <img src={logo} alt="logo" className="h-8 lg:h-10 cursor-pointer" />
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
                <a href="https://api.whatsapp.com/send/?phone=6281297140412&text&type=phone_number&app_absent=0">
                  Whatsapp
                </a>
              </li>
              <li className="px-4 py-2 flex justify-start items-center gap-2 hover:bg-gray-100">
                <img src={shopee} className="h-6" />
                <a href="https://shopee.co.id/maetha.id?categoryId=100014&entryPoint=ShopByPDP&itemId=12398904433">
                  Shopee
                </a>
              </li>
              <li className="px-4 py-2 flex justify-start items-center gap-2 hover:bg-gray-100">
                <img src={shopee} className="h-6" />
                <a href="https://shopee.co.id/maetha.id?categoryId=100014&entryPoint=ShopByPDP&itemId=12398904433">
                  Tokopedia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
