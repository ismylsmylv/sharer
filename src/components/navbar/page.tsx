"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Sidebar from "../sidebar/page";
import { IoCloseSharp } from "react-icons/io5";
import SearchBox from "../search-box/page";
import { useRouter } from "next/navigation";
type Props = {};
interface UserData {
  displayName: string;
  photoURL: string;
}
function Navbar({}: Props) {
  const [active, setactive] = useState("left");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checked, setchecked] = useState(false);
  const [userData, setUserData] = useState<UserData | any>([] as any);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("credentials");
      if (localData) {
        const parsedData = JSON.parse(localData);
        setUserData(parsedData);
        console.log(userData);
      }
    }
  }, []);
  const router = useRouter();
  return (
    <div className="Navbar">
      {sidebarOpen ? (
        <div className="sidebar">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      ) : (
        <></>
      )}
      <div className="logo">
        {sidebarOpen ? (
          <IoCloseSharp
            size={25}
            color="#ACAFC1"
            onClick={() => {
              setSidebarOpen(false);
            }}
          />
        ) : (
          <HiMiniBars3CenterLeft
            size={25}
            color="#ACAFC1"
            onClick={() => {
              setSidebarOpen(true);
            }}
          />
        )}
        <Link
          href={"/home"}
          style={{
            display:
              checked && window && window.innerWidth < 400 ? "none" : "block",
          }}
        >
          sharer
        </Link>
      </div>
      {/* <div className="navs">
        <div className="highlighted">
          <nav>
            <button
              className={active == "left" ? "active" : ""}
              onClick={() => {
                setactive("left");
              }}
            >
              featured
            </button>
          </nav>
          <nav>
            <button
              className={active == "right" ? "active" : ""}
              onClick={() => {
                setactive("right");
              }}
            >
              top
            </button>
          </nav>
        </div>
        <Link href="/my-apps">
          <button>my apps</button>
        </Link>
        <Link href={"/settings"}>
          <button>settings</button>
        </Link>
      </div> */}
      <div className="controls">
        <div className="search lg:w-64	flex items-center justify-end	">
          <SearchBox setchecked={setchecked} checked={checked} />
        </div>
        {/* <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" className="input" />
        </div> */}
        {/* <nav>
          <button>
            <IoIosNotifications color="acafc1" size={30} />
          </button>
        </nav> */}
        <Link href={"/account"}>
          <button
            onClick={(e) => {
              e.preventDefault();
              // console.log(userData);
              Object.keys(userData).length === 0
                ? router.push("/account")
                : router.push("/profile");
              // console.log(Object.keys(userData).length === 0);
            }}
          >
            {userData && userData.photoURL ? (
              <img
                src={userData.photoURL as string}
                alt=""
                height={30}
                width={30}
                style={{
                  display:
                    checked && window && window.innerWidth < 400
                      ? "none"
                      : "block",
                }}
              />
            ) : (
              <MdAccountCircle color="acafc1" size={30} />
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
