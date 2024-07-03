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

      <SwiperSlide>
        <div className="logo">
          <Image
            src={
              "https://cdn2.steamgriddb.com/icon/fb22fb2b63ebd0f8261cbfc4809cd152.ico"
            }
            alt="app logo"
            width={100}
            height={100}
          />
        </div>
        <div className="name">Experience Hogwarts in the 1800s.</div>
        <div className="subtext">
          Your character is a student who holds the key to an ancient secret
          that threatens to tear the wizarding world apart
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="logo">
          <Image
            src={
              "https://cdn2.steamgriddb.com/icon/fb22fb2b63ebd0f8261cbfc4809cd152.ico"
            }
            alt="app logo"
            width={100}
            height={100}
          />
        </div>
        <div className="name">Experience Hogwarts in the 1800s.</div>
        <div className="subtext">
          Your character is a student who holds the key to an ancient secret
          that threatens to tear the wizarding world apart
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="logo">
          <Image
            src={
              "https://cdn2.steamgriddb.com/icon/fb22fb2b63ebd0f8261cbfc4809cd152.ico"
            }
            alt="app logo"
            width={100}
            height={100}
          />
        </div>
        <div className="name">Experience Hogwarts in the 1800s.</div>
        <div className="subtext">
          Your character is a student who holds the key to an ancient secret
          that threatens to tear the wizarding world apart
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
