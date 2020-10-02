import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Home from "../components/Home";

function Screen() {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => setScreen(true), 2000);
  });
  return (
    <div className="screen">
      {!screen && <Preloader />}
      {screen && <Home />}
    </div>
  );
}

export default Screen;
