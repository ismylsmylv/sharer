import React from "react";
import "./style.scss";
import Heading from "../heading/page";
import Player from "@/assets/images/image.png";
import Image from "next/image";
import ItemGrid from "../item-grid/page";
type Props = {};

function ItemSlider({ apps }: Props) {
  return (
    <div className="ItemSlider">
      <Heading head="Indie Games Masterpiece" />
      <p>Play the must-have games</p>
      <div className="bottom">
        <Image alt="player" src={Player} />
        <ItemGrid apps={apps} />
      </div>
    </div>
  );
}

export default ItemSlider;
