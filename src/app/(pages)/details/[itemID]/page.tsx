"use client";
import { fetchAppById } from "@/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function Details({ params }: { params: { itemID: string } }) {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.apps.appByID);
  useEffect(() => {
    dispatch(fetchAppById(params.itemID) as any);
    app && console.log(app);
  }, []);
  return (
    <div className="Details">
      {params.itemID} {app && JSON.stringify(app)}
      <div className="head">
        <img src={app.data.icon} alt="icon" />
        <div className="content">
          <div className="name">{app.data.name}</div>
          <div className="publisher">{app.data.publisher}</div>
          <div className="info">
            <div className="review">{app.data.review}</div>
            <div className="downloads">{app.data.downloads}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
