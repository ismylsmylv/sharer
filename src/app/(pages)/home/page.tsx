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
import Loading from "@/components/loading/page";

function HomePage() {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state: any) => state.apps.apps);
  const isLoading = useAppSelector((state) => state.apps.loading);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="HomePage">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Slider app={apps?.length > 0 && apps?.[6]} apps={[]} />

          <ItemList
            head={"Best Viral Apps and Games"}
            apps={apps}
            type={["app", "game"]}
            selectedCount={5}
            button={true}
          />
          <div className="flex content-left items-start gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Indie Games Masterpiece"}
              subHeading={"Play the must-have games"}
              image={Player as StaticImageData | any}
              type={["game"]}
              head={""}
              selectedCount={0}
              reversed={false}
              button={false}
            />
            <AccountCard />
          </div>
          <ItemList
            head={"Best Viral Games"}
            apps={apps}
            type={["game"]}
            selectedCount={5}
            button={true}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
