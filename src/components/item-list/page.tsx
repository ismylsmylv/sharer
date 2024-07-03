"use client";
import React, { useEffect } from "react";
import "./style.scss";
import Heading from "../heading/page";
type Props = {
  head: string;
};

function ItemList({ head, apps, type }: Props) {
  let count = 0;
  return (
    <div className="ItemList">
      <Heading head={head} />
      <div className="content">
        {apps?.map((elem) => {
          type.includes(elem.type) && count < 5 && count++;
          console.log(type);
          return (
            type.includes(elem.type) &&
            count < 5 && (
              <div className="item" key={elem.name}>
                <div className="left">
                  <img src={elem.icon} alt="" />
                  <div className="info">
                    <div className="name">{elem.name}</div>
                    <div className="text">{elem.info}</div>
                  </div>
                </div>
                <div className="manage">
                  {elem.price ? (
                    <button>${elem.price}</button>
                  ) : (
                    <button>Get</button>
                  )}
                  {elem.inAppPurchases == "true" && <p>in App Purchases</p>}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
