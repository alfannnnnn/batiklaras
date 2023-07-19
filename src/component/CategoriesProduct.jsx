import React, { useState, useEffect } from "react";
import products from "../utils/products.json";
import cod from "../assets/cod.png";

const AllProduct = () => {
  const [discountProduct, setDiscountProduct] = useState([]);

  useEffect(() => {
    const filteredData = products.filter(
      (product) => product.discount === true
    );
    setDiscountProduct(filteredData);
  }, []);

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex gap-4 flex-col items-center justify-between mb-4">
          <h1 className="text-lg lg:text-2xl font-bold">Sedan Diskon</h1>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
            {discountProduct.map((product, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white flex flex-col rounded-md cursor-pointer hover:border hover:shadow-md"
              >
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
                  <div className="flex items-center justify-start gap-2">
                    <p
                      className={`${
                        product.afterPrice ? "block" : "hidden"
                      } p-1 bg-red-700 text-white font-bold rounded-sm text-[8px]`}
                    >
                      Discount
                    </p>
                    <img className="w-6" src={cod} alt="cod" />
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <p
                      className={`text-sm lg:text-md font-bold truncate text-ellipsis ${
                        product.afterPrice ? "text-red-700" : ""
                      }`}
                    >
                      {product.afterPrice
                        ? product.afterPrice
                        : product.initialPrice}
                    </p>
                    <p className="text-gray-700 text-xs lg:text-sm">
                      {product.sale} Terjual
                    </p>
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
