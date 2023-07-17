import React from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Discount from "../component/Discount";
import AllProduct from "../component/AllProduct";
import Footer from "../component/Footer";

const Homepage = () => {
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
