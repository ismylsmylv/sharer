"use client";
import { fetchAppById } from "@/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

function Details({ params }: { params: { itemID: string } }) {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.apps.appByID);
  useEffect(() => {
    dispatch(fetchAppById(params.itemID));
    app && console.log(app);
  }, []);
  return (
    <div>
      Details {params.itemID} {app && JSON.stringify(app)}
    </div>
  );
}

export default Details;
