"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillAppstore } from "react-icons/ai";
import { FaCompass } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoGameControllerSharp, IoSettingsSharp } from "react-icons/io5";
import { TbAppsFilled } from "react-icons/tb";
import "./style.scss";
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
  { icon: <IoMdAddCircle size={25} color="#ACAFC1" />, title: "add" },
  { icon: <TbAppsFilled size={25} color="#ACAFC1" />, title: "my apps" },
  { icon: <IoSettingsSharp size={25} color="#ACAFC1" />, title: "settings" },
  // { icon: <FaThList size={25} color="#ACAFC1" />, title: "categories" },
];
function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const pathname = usePathname();
  return (
    <div className="Sidebar">
      <div className="sideNavs">
        {sideNavs.map((elem) => {
          return (
            <Link
              className={`${
                pathname === `/${elem.title}`
                  ? `sideNav active ${elem.title}`
                  : pathname === "/" && elem.title == "discover"
                  ? `sideNav active ${elem.title}`
                  : `sideNav ${elem.title}`
              }`}
              href={elem.title != "discover" ? "/" + elem.title : "/"}
              key={elem.title}
              onClick={() => {
                setSidebarOpen(false);
              }}
            >
              {elem.icon} {elem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
