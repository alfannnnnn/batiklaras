import products from "../utils/products.json";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg lg:text-2xl font-bold">SEDANG DISKON</h1>
          <button className="py-1 px-2 lg:py-2 lg:px-4 rounded-lg hover:shadow-lg bg-black text-white">
            Selengkapnya
          </button>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
          }}
          slidesPerView={isMobile ? 1 : 3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {discountProduct.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <img src={product.img} alt={product.name} />
                <div className="flex flex-col p-2">
                  <h1 className="font-bold">{product.name.toUpperCase()}</h1>
                  <p className="line-through">{product.initialPrice}</p>
                  <p>{product.afterPrice}</p>
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
