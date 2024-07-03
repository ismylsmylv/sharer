"use client";
import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React, { useEffect } from "react";
import "./style.scss";
import ItemSlider from "@/components/item-slider/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "@/redux/slice";
type Props = {};

function HomePage({}: Props) {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.apps.apps);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="HomePage">
      {apps && (
        <>
          <Slider />
          <ItemList head={"Best Viral Apps and Games"} apps={apps} />
          <ItemSlider />
          <ItemList head={"Best Viral Apps and Games"} />
        </>
      )}
    </div>
  );
}

export default HomePage;
