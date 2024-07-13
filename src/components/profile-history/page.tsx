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
      <h1 className="font-medium text-xl">App history</h1>
      {apps?.map((elem: any) => (
        <Item elem={elem} />
      ))}
    </div>
  );
}

export default ProfileHistory;
