import React from "react";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <p class="text-center text-4xl text-body font-display">รับชมเฟสทั้งหมด</p>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
