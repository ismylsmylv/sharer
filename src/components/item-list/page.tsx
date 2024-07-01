import React from "react";
import "./style.scss";
type Props = {
  head: string;
};

function ItemList({ head }: Props) {
  return (
    <div className="ItemList">
      <div className="heading">
        <h1>{head}</h1>
        <button>see all</button>
      </div>
      <div className="content">
        <div className="item">
          <div className="left">
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn2.steamgriddb.com%2Ficon%2Ffb22fb2b63ebd0f8261cbfc4809cd152.ico&w=128&q=75"
              alt=""
            />
            <div className="info">
              <div className="name">Hogwarts Legacy</div>
              <div className="text">Experience Hogwarts in the 1800s</div>
            </div>
          </div>
          <div className="manage">
            <button>$19.99</button>
            <p>in App Purchases</p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn2.steamgriddb.com%2Ficon%2Ffb22fb2b63ebd0f8261cbfc4809cd152.ico&w=128&q=75"
              alt=""
            />
            <div className="info">
              <div className="name">Hogwarts Legacy</div>
              <div className="text">Experience Hogwarts in the 1800s</div>
            </div>
          </div>
          <div className="manage">
            <button>$19.99</button>
            <p>in App Purchases</p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn2.steamgriddb.com%2Ficon%2Ffb22fb2b63ebd0f8261cbfc4809cd152.ico&w=128&q=75"
              alt=""
            />
            <div className="info">
              <div className="name">Hogwarts Legacy</div>
              <div className="text">Experience Hogwarts in the 1800s</div>
            </div>
          </div>
          <div className="manage">
            <button>$19.99</button>
            <p>in App Purchases</p>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn2.steamgriddb.com%2Ficon%2Ffb22fb2b63ebd0f8261cbfc4809cd152.ico&w=128&q=75"
              alt=""
            />
            <div className="info">
              <div className="name">Hogwarts Legacy</div>
              <div className="text">Experience Hogwarts in the 1800s</div>
            </div>
          </div>
          <div className="manage">
            <button>$19.99</button>
            <p>in App Purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
