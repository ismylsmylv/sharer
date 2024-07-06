"use client";
import { fetchAppById } from "@/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
function embedder(rawUrl) {
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

  var embedlink = "http://www.youtube.com/embed/" + id;
  console.log(embedlink);
  return embedlink;
}

function Details({ params }: { params: { itemID: string } }) {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.apps.appByID);
  useEffect(() => {
    dispatch(fetchAppById(params.itemID) as any);
    app && console.log(app);
  }, []);
  return (
    <>
      {app && (
        <div className="Details">
          <button onClick={() => {}}>embed</button>
          <div className="cover">
            {app.data?.trailer ? (
              <iframe
                width="560"
                height="315"
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
            <img src={app?.data?.icon} alt="icon" />
            <div className="content">
              <div className="name">{app.data?.name}</div>
              <div className="publisher">{app.data?.publisher}</div>
              <div className="info">
                <div className="review">{app.data?.review}</div>
                <div className="downloads">{app.data?.downloads}</div>
              </div>
            </div>
          </div>
          {params.itemID} {app && JSON.stringify(app)}
        </div>
      )}
    </>
  );
}

export default Details;
