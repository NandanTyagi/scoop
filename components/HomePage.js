import React from "react";
import Card from "./Card";
import LargeCard from "./LargeCard";

const HomePage = () => {
  return (
    <div className="grid-container-main border-black border-2">
      <div className="text-black grid-item-main">
        <Card />
        <Card />
      </div>

      <div className="text-black grid-item-main">
        <LargeCard />
        <LargeCard />
      </div>

      <div className="text-black grid-item-main">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
