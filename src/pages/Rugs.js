import React from "react";
import Rooms from "../components/Rooms";
import RugStyle from "../assets/rugs";
import Logo from "../assets/image/my_landing_page_logo_background_image_en-us.png";

const Rugs = () => {
  return <Rooms types={RugStyle} logo={Logo} />;
};

export default Rugs;
