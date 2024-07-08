"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import "./style.scss";
type Props = {
  apps: object[];
  app: Elem | any;
};
interface Elem {
  data: any;
  name: string;
  info: string;
  type: string;
  icon: string;
  price: number;
  inAppPurchases: string;
  cover: string;
}
function Slider({ app }: Props) {
  return (
    <div className="slider">
      {app && (
        <div
          key={app?.data?.name}
          className="slide"
          style={{ backgroundImage: `url(${app?.data?.cover})` }}
        >
          <div className="content">
            <div className="left">
              <div className="logo">
                <img src={app?.data?.icon} alt="app logo" />
              </div>
              <div className="name">{app?.data?.name}</div>
              <div className="subtext">{app?.data?.info}</div>
            </div>

            <Link href={`/details/${app.id}`} className="button">
              More <FaAngleRight />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
