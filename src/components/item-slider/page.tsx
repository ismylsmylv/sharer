import React from "react";
import "./style.scss";
import Heading from "../heading/page";

import Image from "next/image";
import ItemGrid from "../item-grid/page";
type Props = {
  head: string;
  apps: Elem[] | any;
  type: string;
  selectedCount: number;
  heading: string;
  subHeading: string;
  image: string;
  reversed: boolean;
  button: boolean;
};

interface Elem {
  name: string;
  info: string;
  type: string;
  icon: string;
  price: number;
  inAppPurchases: string;
}
function ItemSlider({
  apps,
  heading,
  subHeading,
  image,
  reversed,
  type,
  button,
}: Props) {
  let reverseApps: object[] = [];
  if (reversed) {
    reverseApps = apps.slice().reverse();
  }

  return (
    <div className="ItemSlider">
      <Heading head={heading} button={button} />
      <p>{subHeading}</p>
      <div className="bottom">
        <Image alt="player" src={image} />
        <ItemGrid
          apps={reversed ? reverseApps : apps}
          type={type}
          head={""}
          selectedCount={0}
        />
      </div>
    </div>
  );
}

export default ItemSlider;
