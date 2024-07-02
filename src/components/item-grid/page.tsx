import React from "react";
import "./style.scss";
import Stardew from "@/assets/images/stardew.png";
import Image from "next/image";
type Props = {};

function ItemGrid({}: Props) {
  return (
    <div className="ItemGrid">
      <div className="item">
        <Image src={Stardew} alt="Stardew" />
        <div className="name">Stardew Valley</div>
        <div className="price">$ 8.99</div>
        <div className="info">In-App Purchases</div>
      </div>
      <div className="item">
        <Image src={Stardew} alt="Stardew" />
        <div className="name">Stardew Valley</div>
        <div className="price">$ 8.99</div>
        <div className="info">In-App Purchases</div>
      </div>
      <div className="item">
        <Image src={Stardew} alt="Stardew" />
        <div className="name">Stardew Valley</div>
        <div className="price">$ 8.99</div>
        <div className="info">In-App Purchases</div>
      </div>
      <div className="item">
        <Image src={Stardew} alt="Stardew" />
        <div className="name">Stardew Valley</div>
        <div className="price">$ 8.99</div>
        <div className="info">In-App Purchases</div>
      </div>
    </div>
  );
}

export default ItemGrid;
