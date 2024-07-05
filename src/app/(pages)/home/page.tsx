"use client";
import ItemList from "@/components/item-list/page";
import Slider from "@/components/slider/page";
import React, { useEffect } from "react";
import "./style.scss";
import ItemSlider from "@/components/item-slider/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "@/redux/slice";
import Player from "@/assets/images/image.png";
import AccountCard from "@/components/account-card/page";
import { StaticImageData } from "next/image";
type Props = {
  apps: Elem[];
};
interface Elem {
  apps: object[];
  name: string;
  info: string;
  type: string;
  icon: string;
  price: number;
  inAppPurchases: string;
}
function HomePage({}: Props) {
  const dispatch = useDispatch();
  const apps = useSelector((state: Props) => state.apps.apps);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="HomePage">
      {apps && apps.length > 0 && (
        <>
          <Slider app={apps?.length > 0 && apps?.[5]} apps={[]} />

          <ItemList
            head={"Best Viral Apps and Games"}
            apps={apps}
            type={["app", "game"]}
            selectedCount={5}
          />
          <div className="flex content-left items-start gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Indie Games Masterpiece"}
              subHeading={"Play the must-have games"}
              image={Player as StaticImageData | string}
              type={"game"}
            />
            <AccountCard />
          </div>
          <ItemList
            head={"Best Viral Games"}
            apps={apps}
            type={["game"]}
            selectedCount={5}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
