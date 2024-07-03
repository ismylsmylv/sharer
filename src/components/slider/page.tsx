"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
type Props = {
  apps: object[];
};

function Slider({ apps }: Props) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {apps.map((app) => {
        return (
          <SwiperSlide key={app.name} style={{ backgroundImage: app?.cover }}>
            <div className="logo">
              <img src={app.icon} alt="app logo" width={100} height={100} />
            </div>
            <div className="name">{app.name}</div>
            <div className="subtext">{app.info}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
