import { AiFillAppstore } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { FaBrush, FaCompass } from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";
import "./style.scss";
import Link from "next/link";
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
  { icon: <FaBrush size={25} color="#ACAFC1" />, title: "themes" },
  { icon: <FaThList size={25} color="#ACAFC1" />, title: "categories" },
];
function Sidebar({}: Props) {
  return (
    <div className="Sidebar">
      <div className="sideNavs">
        {sideNavs.map((elem) => {
          return (
            <Link
              href={elem.title != "discover" ? "/" + elem.title : "/"}
              className="sideNav"
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
