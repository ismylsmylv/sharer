import React from "react";
import "./style.scss";
type Props = {};

function InfoDetail({ app }: Props) {
  return (
    <div className="infoDetail">
      <div className="infoElem">
        <h3>Download size</h3>
        <p>{app.data?.size} MB</p>
      </div>
      <div className="infoElem">
        <h3>Release date</h3>
        <p>{app.data?.releaseDate}</p>
      </div>
      <div className="infoElem">
        <h3>Updated on</h3>
        <p>{app.data?.updateDate}</p>
      </div>
      <div className="infoElem">
        <h3>Published by</h3>
        <p>{app.data?.publisher}</p>
      </div>
      <div className="infoElem">
        <h3>Developer contact</h3>
        <p>{app.data?.email}</p>
      </div>
      <div className="infoElem">
        <h3>Support</h3>
        <p>{app.data?.supportContact}</p>
      </div>
    </div>
  );
}

export default InfoDetail;
