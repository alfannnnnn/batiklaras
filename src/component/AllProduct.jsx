import React from "react";
import products from "../utils/products.json";
import stars from "../assets/stars.png";

const AllProduct = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex gap-4 flex-col items-center justify-between mb-4">
          <h1 className="text-lg lg:text-2xl font-bold">SEMUA PRODUK</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="overflow-hidden flex flex-col rounded-md cursor-pointer hover:border hover:shadow-md"
              >
                <img src={product.img} alt={product.name} />
                <div className="flex flex-col px-2 py-2 lg:py-4">
                  <h1 className="truncate font-bold text-ellipsis text-sm lg:text-md ">
                    {product.name.toUpperCase()}
                  </h1>
                  <div className="flex items-center justify-start gap-2">
                    <p className="text-sm lg:text-md">
                      {product.afterPrice
                        ? product.afterPrice
                        : product.initialPrice}
                    </p>
                    <p
                      className={`${
                        product.afterPrice ? "block" : "hidden"
                      } text-[10px] bg-black p-[2px] text-white`}
                    >
                      Diskon
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex lg:gap-1">
                      <img className="h-3" src={stars} alt="stars" />
                      <img className="h-3" src={stars} alt="stars" />
                      <img className="h-3" src={stars} alt="stars" />
                      <img className="h-3" src={stars} alt="stars" />
                      <img className="h-3" src={stars} alt="stars" />
                    </div>
                    <p className="text-xs lg:text-sm">{product.sale} Terjual</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
