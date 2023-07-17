import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Discount from "../component/Discount";
import AllProduct from "../component/AllProduct";
import Footer from "../component/Footer";
import slider from "../utils/slider.js";

const Homepage = () => {
  useEffect(() => {
    console.log(slider);
  }, []);
  return (
    <>
      <Navbar />
      <Slider />
      <Discount />
      <AllProduct />
      <Footer />
    </>
  );
};

export default Homepage;
