"use client";
import Trainer from "@/assets/images/Dumbbell_29.webp";
import Learner from "@/assets/images/home-practice_2.svg";
import ItemList from "@/components/item-list/page";
import ItemSlider from "@/components/item-slider/page";
import Slider from "@/components/slider/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps } from "@/redux/slice";
import { useEffect } from "react";
import "./style.scss";
import { StaticImageData } from "next/image";
import Loading from "@/components/loading/page";
type Props = {};

function Games({}: Props) {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state) => state.apps.apps);
  const isLoading = useAppSelector((state) => state.apps.loading);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="Games">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Slider app={apps?.length > 0 && apps?.[7]} apps={[]} />

          <div className="flex content-left items-center gap-2 h-full	flex-wrap	">
            <ItemSlider
              apps={apps}
              heading={"Train your mind"}
              subHeading={"Games had never been more challenging"}
              image={Trainer as StaticImageData | any}
              type={["game"]}
              head={""}
              selectedCount={0}
              reversed={false}
              button={false}
            />
            <ItemSlider
              reversed={true}
              apps={apps}
              heading={"Simulate more ways"}
              subHeading={"There's not just one option"}
              image={Learner}
              type={["game"]}
              head={""}
              selectedCount={0}
              button={false}
            />
          </div>
          <ItemList
            head={"See more"}
            apps={apps}
            type={["game"]}
            selectedCount={100}
            button={false}
          />
        </>
      )}
    </div>
  );
}

export default Games;
