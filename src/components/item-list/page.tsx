"use client";
import React, { useEffect } from "react";
import "./style.scss";
import Heading from "../heading/page";
import Link from "next/link";
import Item from "../item/page";
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
          type.includes(elem?.data?.type) && count < selectedCount && count++;
          // console.log(type);
          return (
            type.includes(elem?.data?.type) &&
            count < selectedCount && <Item elem={elem} />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
