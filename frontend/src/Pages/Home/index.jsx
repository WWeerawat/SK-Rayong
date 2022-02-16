import React, { useEffect, useState } from "react";
import axios from "../../Config/axios";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";

const Home = () => {
  const [phases, setPhases] = useState(null);

  useEffect(() => {
    axios.get("/phases").then((response) => {
      setPhases(response.data);
    });
  }, []);

  return (
    <div>
      <Banner />
      <p className="text-center text-4xl text-body font-display">
        รับชมเฟสทั้งหมด
      </p>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
