"use client";
import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
type Props = { head: string; button: boolean; forward: string };

function Heading({ head, button, forward }: Props) {
  const router = useRouter();
  return (
    <div className="heading">
      <h1>{head}</h1>
      {head != "See more" && button && (
        <button
          onClick={() => {
            router.push(forward[0] + "s");
          }}
        >
          see all
        </button>
      )}
    </div>
  );
}

export default Heading;
