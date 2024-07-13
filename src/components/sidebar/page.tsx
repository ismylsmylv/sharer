"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiFillAppstore } from "react-icons/ai";
import { FaCompass } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoGameControllerSharp, IoSettingsSharp } from "react-icons/io5";
import { TbAppsFilled } from "react-icons/tb";
import "./style.scss";
import { useEffect, useState } from "react";
type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: any;
};
let sideNavs = [
  {
    icon: <FaCompass size={25} color="#ACAFC1" />,
    title: "discover",
  },
  {
    icon: <IoGameControllerSharp size={25} color="#ACAFC1" />,
    title: "games",
  },
  { icon: <AiFillAppstore size={25} color="#ACAFC1" />, title: "apps" },
  // { icon: <IoMdAddCircle size={25} color="#ACAFC1" />, title: "add" },
  // { icon: <TbAppsFilled size={25} color="#ACAFC1" />, title: "my apps" },
  // { icon: <IoSettingsSharp size={25} color="#ACAFC1" />, title: "settings" },
  // { icon: <FaThList size={25} color="#ACAFC1" />, title: "categories" },
];
function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const pathname = usePathname();
  // const localAuth = localStorage?.getItem("auth") || "";
  const [localAuth, setLocalAuth] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("auth") || "";
      setLocalAuth(auth);
    }
  }, []);
  const router = useRouter();
  return (
    <div className="Sidebar">
      <div className="sideNavs">
        {sideNavs.map((elem) => {
          return (
            <button
              className={`${
                pathname === `/${elem.title}`
                  ? `sideNav active ${elem.title}`
                  : pathname === "/" && elem.title == "discover"
                  ? `sideNav active ${elem.title}`
                  : `sideNav ${elem.title}`
              }`}
              key={elem.title}
              onClick={() => {
                setSidebarOpen(false);
                router.push(elem.title != "discover" ? "/" + elem.title : "/");
              }}
            >
              {elem.icon} {elem.title}
            </button>
          );
        })}

        {localAuth == process.env.NEXT_PUBLIC_AUTH && (
          <button
            className={`${
              pathname === `/add` ? `sideNav active add` : `sideNav add`
            }`}
            onClick={() => {
              setSidebarOpen(false);
              router.push("/add");
            }}
          >
            <IoMdAddCircle size={25} color="#ACAFC1" /> add
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
