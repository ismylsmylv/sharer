"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.scss";
type Props = {
  setchecked: any;
  checked: boolean;
};

function SearchBox({ setchecked, checked }: Props) {
  const [input, setinput] = useState("");
  const router = useRouter();

  return (
    <div className="searchBox">
      <div className="container">
        <input
          defaultChecked
          checked={!checked}
          className="checkbox"
          type="checkbox"
          onClick={() => {
            setchecked(!checked);
          }}
        />
        <div
          className="mainbox"
          style={{ border: checked ? "1px solid #acafc1" : "" }}
        >
          <div className="iconContainer">
            <svg
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="search_icon"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input) {
                router.push(`/search?in=${input}`);

                setchecked(false);
                setinput("");
              }
            }}
          >
            <input
              className="search_input"
              placeholder="search"
              type="text"
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
