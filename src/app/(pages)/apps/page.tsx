"use client";
import Organizer from "@/assets/images/CompliantConsider.jpg";
import Caller from "@/assets/images/pillock_as_a_fan_art_by_sunflower75_dg49vxe-pre.jpg";
import ItemList from "@/components/item-list/page";
import ItemSlider from "@/components/item-slider/page";
import Slider from "@/components/slider/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps } from "@/redux/slice";
import { useEffect } from "react";
import "./style.scss";
import Loading from "@/components/loading/page";
type Props = {};

function Apps({}: Props) {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state: any) => state.apps.apps);
  const isLoading = useAppSelector((state) => state.apps.loading);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="Apps">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Slider app={apps?.length > 0 && apps?.[5]} apps={[]} />

          <div className="flex content-left items-center gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Boost your productivity"}
              subHeading={"Add, edit and organize schedule in any way"}
              image={Organizer as any}
              type={["app"]}
              head={""}
              selectedCount={0}
              reversed={false}
              button={false}
            />
            <ItemSlider
              reversed={true}
              apps={apps}
              heading={"Socialize"}
              subHeading={"Communicate with everyone"}
              image={Caller as any}
              type={["app"]}
              head={""}
              selectedCount={0}
              button={false}
            />
          </div>
          <ItemList
            head={"See more"}
            apps={apps}
            type={["app"]}
            selectedCount={100}
            button={false}
          />
        </>
      )}
    </div>
  );
}

export default Apps;
