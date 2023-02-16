import React from "react";
import "./Header.scss";

const Header = () => {
  return <header className="header">
    <div className="logo">HireMe</div>
    <div className="items">
      <div className="item">Home</div>
      <div className="item">Jobs</div>
      <div className="item">Contact Us</div>
    </div>
  </header>;
};

export default Header;
