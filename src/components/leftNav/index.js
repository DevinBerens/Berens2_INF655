import React, { useState } from "react";
import { Link } from "react-router-dom";

let LeftNav = (props) => {
  let [activeNav, setActiveNav] = useState(window.location.pathname);

  return (
    <div
      className="leftNavWrapper"
      style={{ top: `calc(${window.innerHeight / 2 - 100}px)` }}
    >
      <Link
        className={`navLink ${
          activeNav !== "/about" && activeNav !== "/tasklist" && "activeNav"
        }`}
        onClick={() => setActiveNav("/")}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`navLink ${activeNav === "/about" && "activeNav"}`}
        onClick={() => setActiveNav("/about")}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`navLink ${activeNav === "/tasklist" && "activeNav"}`}
        onClick={() => setActiveNav("/tasklist")}
        to="/tasklist"
      >
        Task List
      </Link>
    </div>
  );
};

export default LeftNav;
