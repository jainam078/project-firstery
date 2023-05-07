import React from "react";
import MainHeader from "../Component/MainHeader";
import SubHeader from "../Component/SubHeader";
import Slider from "../Component/Slider";
import MainPageProducts from "../Component/MainPageProducts";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
      <Slider />
      <MainPageProducts />
    </div>
  );
};

export default Home;
