import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React from "react";
import "./style.scss";
type Props = {};

function HomePage({}: Props) {
  return (
    <div className="HomePage">
      <Slider />
      <ItemList />
      <ItemList />
      <ItemList />
    </div>
  );
}

export default HomePage;
