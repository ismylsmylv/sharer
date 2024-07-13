import React, { useEffect } from "react";
import "./style.scss";
import ItemList from "../item-list/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps } from "@/redux/slice";
import Item from "../item/page";
type Props = {
  userData: {
    displayName: string;
    photoURL: string;
    email: string;
    createdAt: string;
  };
};

function ProfileHistory({ userData }: Props) {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state) => state.apps.apps);
  useEffect(() => {
    dispatch(fetchApps());
  }, []);
  return (
    <div className="ProfileHistory">
      <div className="lists">
        <div className="appList">
          <h1 className="font-medium text-xl">App history</h1>
          {apps?.map(
            (elem: any) =>
              elem.data.type == "app" && <Item elem={elem} key={elem.id} />
          )}
        </div>
        <div className="appList">
          <h1 className="font-medium text-xl">Game history</h1>

          {apps?.map(
            (elem: any) =>
              elem.data.type == "game" && <Item elem={elem} key={elem.id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileHistory;
