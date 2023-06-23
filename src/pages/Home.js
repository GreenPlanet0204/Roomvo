import React from "react";
import "react-multi-carousel/lib/styles.css";
import Layout from "../components/layout/Layout";
import Banner from "../assets/image/HeroImage-MultiSurface-Kitchen-1500px-v5-800x638.png";
import { ReactComponent as Divider } from "../assets/icon/divider.svg";
import Carousel from "react-multi-carousel";
import ASCreation from "../assets/CompanyLogo/client-logos-website-AS-Creation-200x113.png";
import Bruce from "../assets/CompanyLogo/client-logos-website-Bruce-200x113.png";
import CarpetOne from "../assets/CompanyLogo/client-logos-website-Carpet-One-200x113.png";
import CarpetRight from "../assets/CompanyLogo/client-logos-website-Carpetright-200x113.png";
import crateAndBarrel from "../assets/CompanyLogo/client-logos-website-crateAndBarrel-200x113.png";
import Dreamweaver from "../assets/CompanyLogo/client-logos-website-Dreamweaver-200x113.png";
import Duratex from "../assets/CompanyLogo/client-logos-website-Duratex-200x113.png";
import EngineeredFloors from "../assets/CompanyLogo/client-logos-website-Engineered-Floors-200x113.png";
import Haro from "../assets/CompanyLogo/client-logos-website-Haro-200x113.png";
import HomeDepot from "../assets/CompanyLogo/client-logos-website-Home-Depot-200x113.png";
import lauzon from "../assets/CompanyLogo/client-logos-website-lauzon-200x113.png";
import lumberLiquidators from "../assets/CompanyLogo/client-logos-website-lumberLiquidators-200x113.png";
import MSI from "../assets/CompanyLogo/client-logos-website-MSI-200x113.png";
import Polyflor from "../assets/CompanyLogo/client-logos-website-Polyflor-200x113.png";
import RAK from "../assets/CompanyLogo/client-logos-website-RAK-200x113.png";
import SaintGobain from "../assets/CompanyLogo/client-logos-website-Saint-Gobain-200x113.png";
import SwissKrono from "../assets/CompanyLogo/client-logos-website-Swiss-Krono-200x113.png";
import RugImage from "../assets/image/demo-rug-basic.png";
import MultiSurfaceImage from "../assets/image/demo-multi-surface-basic.png";
import { Link } from "react-scroll";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1024, min: 892 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 892, min: 648 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet2: {
    breakpoint: { max: 648, min: 480 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const Home = () => {
  return (
    <Layout>
      <div className="container first bg-gray">
        <div className="content">
          <div className="left">
            <div className="title">
              The
              <br />
              ultimate
              <br /> wallpaper
              <br />
              visualizer
            </div>
            <div className="btn-group">
              <div className="btn red">Tell me more</div>
              <Link to="demo" spy={true} smooth={true} className="btn outline">
                Try a demo
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={Banner} alt="banner" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="container carousel">
        <div className="content">
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            arrows={false}
            autoPlay={true}
            containerClass="carousel-container"
            autoPlaySpeed={2000}
          >
            <a href="/">
              <img src={Haro} alt="logo" />
            </a>
            <a href="/">
              <img src={HomeDepot} alt="logo" />
            </a>
            <a href="/">
              <img src={lauzon} alt="logo" />
            </a>
            <a href="/">
              <img src={lumberLiquidators} alt="logo" />
            </a>
            <a href="/">
              <img src={MSI} alt="logo" />
            </a>
            <a href="/">
              <img src={Polyflor} alt="logo" />
            </a>
            <a href="/">
              <img src={RAK} alt="logo" />
            </a>
            <a href="/">
              <img src={SaintGobain} alt="logo" />
            </a>
            <a href="/">
              <img src={SwissKrono} alt="logo" />
            </a>
            <a href="/">
              <img src={ASCreation} alt="logo" />
            </a>
            <a href="/">
              <img src={Bruce} alt="logo" />
            </a>
            <a href="/">
              <img src={CarpetOne} alt="logo" />
            </a>
            <a href="/">
              <img src={CarpetRight} alt="logo" />
            </a>
            <a href="/">
              <img src={crateAndBarrel} alt="logo" />
            </a>
            <a href="/">
              <img src={Dreamweaver} alt="logo" />
            </a>
            <a href="/">
              <img src={Duratex} alt="logo" />
            </a>
            <a href="/">
              <img src={EngineeredFloors} alt="logo" />
            </a>
          </Carousel>
        </div>
      </div>
      <div className="container demo bg-gray">
        <div className="content">
          <div className="title">Try a demo now</div>
          <div className="card-group">
            <a href="/rugdemo" className="card">
              <div className="card-container">
                <div className="image">
                  <img width={225} height={180} src={RugImage} alt="demo" />
                </div>
                <div className="btn outline">Rug</div>
              </div>
            </a>
            <a href="/multisurface_demo" className="card">
              <div className="card-container">
                <div className="image">
                  <img
                    width={225}
                    height={180}
                    src={MultiSurfaceImage}
                    alt="demo"
                  />
                </div>
                <div className="btn outline">Multi-surface</div>
              </div>
            </a>
          </div>
          <div className="summary">Or book a walkthrough</div>
          <div className="btn red">Book demo</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
