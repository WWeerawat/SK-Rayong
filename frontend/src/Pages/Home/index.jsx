import React, { useEffect, useState } from "react";
import axios from "../../Config/axios";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";

const Home = () => {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    axios.get("/phases").then((response) => {
      setPhases(response.data);
    });
  }, []);

  return (
    <div>
      <Banner />
      <div className="text-center text-4xl text-body font-display">
        รับชมเฟสทั้งหมด
      </div>
      {phases.map(
        (phase, index) =>
          phase.phase_lock.length !== 0 && (
            <Card key={phase.name} phase={phase} />
          )
      )}
    </div>
  );
};

export default Home;
