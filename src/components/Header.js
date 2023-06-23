import React from "react";
import Logo from "../assets/image/roomvo-small.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <a href="/" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          {/* <div className="menu">
            <div className="link">
              <div className="text">Try a demo</div>
              <DropdownIcon />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
