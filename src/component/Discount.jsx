import products from "../utils/products.json";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Discount = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [discountProduct, setDiscountProduct] = useState([]);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setIsMobile(true);
    }
    const filteredData = products.filter(
      (product) => product.discount === true
    );
    setDiscountProduct(filteredData);
  }, []);

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-md lg:text-2xl font-bold">Sedang Diskon</h1>
          <Link
            to="/batiklaras/diskon"
            className="cursor-pointer text-gray-600 hover:text-gray-900 inline-flex items-center text-sm md:mb-2 lg:mb-0"
          >
            Lihat Semua
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#000",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={isMobile ? 2 : 3}
          modules={[Pagination]}
          className="mySwiper"
        >
          {discountProduct.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden mb-7 mx-2 bg-white flex flex-col rounded-md cursor-pointer hover:border hover:shadow-md">
                <img src={product.img} alt={product.name} />
                <div className="flex flex-col px-2 py-2 lg:py-4">
                  <h1 className="truncate font-bold text-ellipsis text-md lg:text-md ">
                    {product.brand}
                  </h1>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-gray-600 text-sm truncate text-ellipsis">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-1">
                    <div className="flex flex-col">
                      <p className="line-through text-sm lg:text-md font-bold truncate text-ellipsis text-gray-700">
                        {product.initialPrice}
                      </p>
                      <p className="text-sm lg:text-md font-bold truncate text-ellipsis text-red-700">
                        {product.afterPrice}
                      </p>
                    </div>
                    <p className="text-gray-700 text-xs lg:text-sm">
                      {product.sale} Terjual
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Discount;
