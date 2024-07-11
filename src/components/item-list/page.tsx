"use client";
import React, { useEffect } from "react";
import "./style.scss";
import Heading from "../heading/page";
import Link from "next/link";
type Props = {
  head: string;
  apps: Elem[] | any;
  type: string[];
  selectedCount: number;
  button: boolean;
};
interface Elem {
  id: any;
  data: any;
  name: string;
  info: string;
  type: string[];
  icon: string;
  price: number;
  inAppPurchases: string;
}
function ItemList({ head, apps, type, selectedCount, button }: Props) {
  let count = 0;
  return (
    <div className="ItemList">
      <Heading head={head} button={button} forward={type} />
      <div className="content">
        {apps?.map((elem: Elem) => {
          type.includes(elem.data.type) && count < selectedCount && count++;
          // console.log(type);
          return (
            type.includes(elem.data.type) &&
            count < selectedCount && (
              <Link
                href={`/details/${elem.id}`}
                className="item"
                key={elem.data.name}
              >
                <div className="left">
                  <img src={elem.data.icon} alt="" />
                  <div className="info">
                    <div className="name">{elem.data.name}</div>
                    <div className="text">{elem.data.info}</div>
                  </div>
                </div>
                <div className="manage">
                  {elem.data.price ? (
                    <button>${elem.data.price}</button>
                  ) : (
                    <button>Get</button>
                  )}
                  {elem.data.inAppPurchases == "true" && (
                    <p>in App Purchases</p>
                  )}
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
