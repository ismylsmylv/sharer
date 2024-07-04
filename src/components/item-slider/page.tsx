import React from "react";
import "./style.scss";
import Heading from "../heading/page";

import Image from "next/image";
import ItemGrid from "../item-grid/page";
type Props = {};

function ItemSlider({
  apps,
  heading,
  subHeading,
  image,
  reversed,
  type,
}: Props) {
  let reverseApps = [];
  if (reversed) {
    reverseApps = apps.slice().reverse();
  }

  return (
    <div className="ItemSlider">
      <Heading head={heading} />
      <p>{subHeading}</p>
      <div className="bottom">
        <Image alt="player" src={image} />
        <ItemGrid apps={reversed ? reverseApps : apps} type={type} />
      </div>
    </div>
  );
}

export default ItemSlider;
