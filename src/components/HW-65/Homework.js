import React, { useState } from "react";
import "./stylesHW-65.scss";

function Homework() {
  let [theme, setTheme] = useState("day");

  const handleThemeClick = () => {
    setTheme(() => (theme == "day" ? "night" : "day"));
  };

  return (
    <div>
      <div onClick={handleThemeClick} className={`body ${theme}`}>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Homework;
