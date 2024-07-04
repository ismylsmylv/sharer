"use client";
import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React, { useEffect } from "react";
import "./style.scss";
import ItemSlider from "@/components/item-slider/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "@/redux/slice";
import Trainer from "@/assets/images/Dumbbell_29.webp";
import Learner from "@/assets/images/home-practice_2.svg";
type Props = {};

function Games({}: Props) {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.apps.apps);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="Games">
      {apps && (
        <>
          <Slider app={apps?.length > 0 && apps?.[7]} />

          <div className="flex content-left items-center gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Train your mind"}
              subHeading={"Games had never been more challenging"}
              image={Trainer}
              type={"game"}
            />
            <ItemSlider
              reversed={true}
              apps={apps}
              heading={"Simulate more ways"}
              subHeading={"There's not just one option"}
              image={Learner}
              type={"game"}
            />
          </div>
          <ItemList
            head={"See more"}
            apps={apps}
            type={["game"]}
            selectedCount={100}
          />
        </>
      )}
    </div>
  );
}

export default Games;
