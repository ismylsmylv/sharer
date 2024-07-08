"use client";
import Player from "@/assets/images/image.png";
import AccountCard from "@/components/account-card/page";
import ItemList from "@/components/item-list/page";
import ItemSlider from "@/components/item-slider/page";
import Slider from "@/components/slider/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps } from "@/redux/slice";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
import "./style.scss";

function HomePage() {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state: any) => state.apps.apps);
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
              image={Player as StaticImageData | any}
              type={"game"}
              head={""}
              selectedCount={0}
              reversed={false}
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
