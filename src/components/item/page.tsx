import Link from "next/link";
import React from "react";
import "./style.scss";
type Props = {
  elem: {
    data: any;
    id: string;
  };
};

function Item({ elem }: Props) {
  return (
    <Link href={`/details/${elem?.id}`} className="Item" key={elem?.data?.name}>
      <div className="left">
        <img src={elem?.data?.icon} alt="" />
        <div className="info">
          <div className="name">{elem?.data?.name}</div>
          <div className="text">{elem?.data?.info}</div>
        </div>
      </div>
      <div className="manage">
        {elem?.data?.price ? (
          <button>${elem.data.price}</button>
        ) : (
          <button>Get</button>
        )}
        {elem?.data?.inAppPurchases == "true" && <p>in App Purchases</p>}
      </div>
    </Link>
  );
}

export default Item;
