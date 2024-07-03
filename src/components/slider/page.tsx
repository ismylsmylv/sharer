"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";
import { FaAngleRight } from "react-icons/fa6";
// import required modules
type Props = {
  apps: object[];
};

function Slider({ apps }: Props) {
  return (
    <div className="slider">
      {apps && (
        <div key={apps[7]?.name} className="slide">
          <div className="video-responsive">
            <img src={apps[7]?.cover} alt="" />
          </div>
          <div className="content">
            <div className="left">
              <div className="logo">
                <img src={apps[7]?.icon} alt="app logo" />
              </div>
              <div className="name">{apps[7]?.name}</div>
              <div className="subtext">{apps[7]?.info}</div>
            </div>
            <button
              onClick={() => {
                console.log(apps[7]);
              }}
            >
              More <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
