import React from "react";
import "../assets/Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__icon">
        <img
          src="https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg"
          alt="Netflix"
        />
      </div>
    </div>
  );
}

export default Preloader;
