import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React from "react";
import "./style.scss";
import ItemSlider from "@/components/item-slider/page";
type Props = {};

function HomePage({}: Props) {
  return (
    <div className="HomePage">
      <Slider />
      <ItemList head={"Best Viral Apps and Games"} />
      <ItemSlider />
      <ItemList head={"Best Viral Apps and Games"} />
    </div>
  );
}

export default HomePage;
