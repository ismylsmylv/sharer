"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect } from "react";
// import required modules
type Props = {
  apps: object[];
};

function Slider({ app }: Props) {
  useEffect(() => {
    console.log(app);
  }, []);
  return (
    <div className="slider">
      {app && (
        <div
          key={app.name}
          className="slide"
          style={{ backgroundImage: `url(${app.cover})` }}
        >
          <div className="content">
            <div className="left">
              <div className="logo">
                <img src={app.icon} alt="app logo" />
              </div>
              <div className="name">{app.name}</div>
              <div className="subtext">{app.info}</div>
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
