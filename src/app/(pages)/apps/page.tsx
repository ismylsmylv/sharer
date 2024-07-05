"use client";
import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React, { useEffect } from "react";
import "./style.scss";
import ItemSlider from "@/components/item-slider/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "@/redux/slice";
import Organizer from "@/assets/images/CompliantConsider.jpg";
import Caller from "@/assets/images/pillock_as_a_fan_art_by_sunflower75_dg49vxe-pre.jpg";
type Props = {};

function Apps({}: Props) {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.apps.apps);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="Apps">
      {apps && apps.length > 0 && (
        <>
          <Slider app={apps?.length > 0 && apps?.[5]} />

          <div className="flex content-left items-center gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Boost your productivity"}
              subHeading={"Add, edit and organize schedule in any way"}
              image={Organizer}
              type={"app"}
            />
            <ItemSlider
              reversed={true}
              apps={apps}
              heading={"Socialize"}
              subHeading={"Communicate with everyone"}
              image={Caller}
              type={"app"}
            />
          </div>
          <ItemList
            head={"See more"}
            apps={apps}
            type={["app"]}
            selectedCount={100}
          />
        </>
      )}
    </div>
  );
}

export default Apps;
