import React from "react";

const HomePage = () => {
  return (
    <div className="grid-container-main border-black border-2">
      <div className="text-black grid-item-main">
        <div className="side-container">
          <div className="card">
            <div className="pic-container">Pic</div>
            <div className="text-container">Text</div>
          </div>
        </div>
        <div className="side-container">
          <div className="card">
            <div className="pic-container">Pic</div>
            <div className="text-container">Text</div>
          </div>
        </div>
      </div>

      <div className="text-black grid-item-main">Home</div>

      <div className="text-black grid-item-main">
        <div className="side-container">
          <div className="card">
            <div className="pic-container">Pic</div>
            <div className="text-container">Text</div>
          </div>
        </div>
        <div className="side-container">
          <div className="card">
            <div className="pic-container">Pic</div>
            <div className="text-container">Text</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
