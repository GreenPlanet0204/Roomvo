import React from "react";
import { ReactComponent as CameraIcon } from "../assets/icon/camera.svg";
import { ReactComponent as ProductIcon } from "../assets/icon/product.svg";
import { ReactComponent as PhotoIcon } from "../assets/icon/ic_add_a_photo.svg";
import Logo from "../assets/image/my_landing_page_logo_background_image_en-us.png";
import Video from "../assets/instructional_video_rug.mp4";
import { Rooms } from "../assets/room";
import { useNavigate } from "react-router-dom";

const Rugdemo = () => {
  console.log("room", Rooms);
  const navigate = useNavigate();
  const handleChange = (item) => {
    localStorage.setItem("room", JSON.stringify(item));
    navigate("/rugdemo/room");
  };
  return (
    <>
      <div className="demo-container">
        <div className="title">
          See <strong>Taupe Rug</strong> in your room
        </div>
        <div className="content">
          <div className="upload">
            <div className="item-group">
              <div className="item">
                <CameraIcon />
                <div className="text">Upload a picture of your room</div>
              </div>
              <div className="item">
                <ProductIcon />
                <div className="text">Try our products in your room</div>
              </div>
            </div>

            <div className="btn red">
              <PhotoIcon />
              <div className="text">Upload</div>
            </div>
          </div>
          <div className="video">
            <video
              data-autoplay
              autoPlay
              data-object-fit="cover"
              playsInline
              muted
              loop
              type="video/mp4"
              src={Video}
            />
          </div>
        </div>
        <div className="room-container">
          <div className="subtitle">
            Don't have a picture? Try our demo rooms instead
          </div>
          <div className="room-select">
            {Rooms.map((item) => (
              <div className="room" onClick={() => handleChange(item)}>
                <div className="image">
                  <img src={item.image} alt="room" />
                </div>

                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-container">
        <img src={Logo} alt="logo" />
      </div>
    </>
  );
};

export default Rugdemo;
