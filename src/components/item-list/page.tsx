import React from "react";
import "./style.scss";
import Heading from "../heading/page";
type Props = {
  head: string;
};

function ItemList({ head, apps }: Props) {
  return (
    <div className="ItemList">
      <Heading head={head} />
      <div className="content">
        {apps?.map((elem) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
