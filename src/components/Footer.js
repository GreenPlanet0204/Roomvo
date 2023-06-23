import React from "react";
import Logo from "../assets/image/roomvo-small.png";
import { ReactComponent as FacebookIcon } from "../assets/icon/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icon/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/icon/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icon/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="top">
            <div className="logo">
              <img src={Logo} alt="logo" width={175} height={28} />
            </div>
            <div className="social-logo">
              <div className="social-icon">
                <FacebookIcon />
              </div>
              <div className="social-icon">
                <LinkedinIcon />
              </div>
              <div className="social-icon">
                <InstagramIcon />
              </div>
              <div className="social-icon">
                <YoutubeIcon />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="text">
              Roomvo is a registered trademark of Leap Tools Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
