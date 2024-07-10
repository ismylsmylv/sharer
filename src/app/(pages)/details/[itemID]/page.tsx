"use client";
import Screens from "@/components/detail-screens/page";
import DetailsCategory from "@/components/details-categories/page";
import InfoDetail from "@/components/details-infoDetail/page";
import ItemList from "@/components/item-list/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAppById, fetchApps } from "@/redux/slice";
import Link from "next/link";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import "./style.scss";
function embedder(rawUrl: any) {
  var url = rawUrl;
  var id;

  if (url.includes("youtu.be/")) {
    id = url.split("youtu.be/")[1];
  } else if (url.includes("youtube.com/watch?v=")) {
    id = url.split("watch?v=")[1];
  } else if (url.includes("youtube.com/embed/")) {
    id = url.split("embed/")[1];
  } else if (url.includes("youtube.com/v/")) {
    id = url.split("v/")[1];
  } else if (url.includes("youtube.com/shorts/")) {
    id = url.split("shorts/")[1];
  }

  // Remove any additional URL parameters
  if (id && id.includes("&")) {
    id = id.split("&")[0];
  }

  var embedlink = "https://www.youtube.com/embed/" + id;
  console.log(embedlink);
  return embedlink;
}

function Details({ params }: { params: { itemID: string } }) {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state: any) => state.apps.appByID);
  const apps = useAppSelector((state: any) => state.apps.apps);
  useEffect(() => {
    const id = params.itemID;
    dispatch(fetchAppById(id) as any);
    dispatch(fetchApps() as any);
    app && console.log(app);
  }, []);
  return (
    <>
      {app && (
        <div className="Details">
          <div className="cover">
            {app.data?.trailer ? (
              <iframe
                width="100%"
                src={embedder(app?.data?.trailer)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : app?.data?.cover ? (
              <img src={app?.data?.cover} alt="" />
            ) : (
              <></>
            )}
          </div>
          <div className="head">
            <div className="lefthead">
              <img src={app?.data?.icon} alt="icon" />
              <div className="content">
                <div className="name">{app.data?.name}</div>
                <div className="publisher">{app.data?.publisher}</div>
                <div className="info">
                  <div className="review infoSec">
                    <FaStar size={13} color="#6262ff" />
                    {app.data?.review}
                  </div>
                  <div className="downloads infoSec">
                    <MdDownload size={15} color="#6262ff" />
                    {app.data?.downloads}
                  </div>
                </div>
              </div>
            </div>
            <div className="righthead">
              <button>Download</button>
              <Link
                href={"https://www.wikihow.com/Install-APK-Files-on-Android"}
                target="_blank"
              >
                How to install an APK file?
              </Link>
            </div>
          </div>
          <div className="description">
            <h1>About this {app.data?.type}</h1>
            <p>{app.data?.info}</p>

            {app.data?.inAppPurchases == "true" ? (
              <p className="purchases">
                *The app contains in-app purchases. For more info,{" "}
                <a href={`mailto: ${app.data?.email}`}>contact</a> the
                developer.
              </p>
            ) : (
              ""
            )}
          </div>
          <DetailsCategory app={app} />
          <Screens app={app} />
          <InfoDetail app={app} />
          <div className="m-5">
            <ItemList
              head="More like this"
              apps={apps}
              type={[app.data?.type]}
              selectedCount={4}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
