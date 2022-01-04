import React from "react";
import timeSince from "../../timeSince";
import { useSelector } from "react-redux";
import { selectPage } from "../postSlice";

const ManualPost = ({ post }) => {
  return (
    <div
      className="w-80 shadow-lg m-auto border border-gray-50 rounded-lg p-4 relative break-inside-avoid "
      key={post.item_id + useSelector(selectPage)}
    >
      <div className="absolute -top-2 rounded-full w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="rounded-full"
        >
          <defs>
            <style>{`.cls-1{fill:#ff4e00;}.cls-2{font-size:360px;fill:#fff;font-family:Krungthep;}`}</style>
          </defs>
          <g id="Layer_1" data-name="Layer 1">
            <rect className="cls-1" width="1000" height="1000" />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <text className="cls-2" transform="translate(186.03 630.24)">
              AFF
            </text>
          </g>
        </svg>
      </div>
      <div className="w-full ">
        <div>
          <img
            src="https://via.placeholder.com/300.jpg"
            className=""
            alt=""
            loading="lazy"
          />
        </div>
        <div className="text-gray-600 py-4">{String(post.item_data.text)}</div>
        <a
          href={String(post.item_data.link)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-red-600">{String(post.item_data.link_text)}</div>
          <hr className="my-2" />
          <div>{timeSince(String(post.item_published))}</div>
        </a>
      </div>
    </div>
  );
};

export default ManualPost;
