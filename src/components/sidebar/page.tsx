import { AiFillAppstore } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { FaBrush, FaCompass } from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";
import { VscRequestChanges } from "react-icons/vsc";
import { IoMdAddCircle } from "react-icons/io";
import "./style.scss";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
type Props = {};
const sideNavs = [
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
  // { icon: <FaThList size={25} color="#ACAFC1" />, title: "categories" },
];
function Sidebar({}: Props) {
  const pathname = usePathname();
  return (
    <div className="Sidebar">
      <div className="sideNavs">
        {sideNavs.map((elem) => {
          return (
            <Link
              className={`${
                pathname === `/${elem.title}`
                  ? "sideNav active"
                  : pathname === "/" && elem.title == "discover"
                  ? "sideNav active"
                  : "sideNav"
              }`}
              href={elem.title != "discover" ? "/" + elem.title : "/"}
              key={elem.title}
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
