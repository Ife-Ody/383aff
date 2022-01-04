import React from "react";
import timeSince from "../../timeSince";
import parseTags from "../parseTags";
import { useSelector } from "react-redux";
import {selectPage } from "../postSlice";

const TwitterPost = ({ post }) => {
  const cardText = parseTags(post.item_data.tweet, post.service_name);

  return (
    <div
      className="w-80 border border-gray-50 shadow-lg m-auto rounded-lg p-4 relative break-inside-avoid"
      key={post.item_id + useSelector(selectPage)}
    >
      <div className="absolute -top-4 rounded-md w-12">
        <svg
          id="Layer_3"
          data-name="Layer 3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4000 4000"
        >
          <defs>
            <style>{`.cls-3{fill:#55acee;}.cls-4{fill:#fff;}`}</style>
          </defs>
          <circle
            className="cls-3"
            cx="2000"
            cy="2000"
            r="1589"
            transform="translate(-828.43 2000) rotate(-45)"
          />
          <path
            className="cls-4"
            d="M2889.84,1448.15a741.11,741.11,0,0,1-209.75,57.58,364.9,364.9,0,0,0,160.4-202.27,727.58,727.58,0,0,1-231.81,88.61c-138.14-147-369.32-154.22-516.34-16.07a365.34,365.34,0,0,0-115.15,265.82,382.85,382.85,0,0,0,9.35,83.38,1038.69,1038.69,0,0,1-753-379.49c-96.27,166.3-47.24,378.75,112.17,486.05a365.74,365.74,0,0,1-165.63-45.62V1791a365.29,365.29,0,0,0,293.12,357.81,371.93,371.93,0,0,1-164.88,6.35,364.91,364.91,0,0,0,341,253.49,732.84,732.84,0,0,1-453.15,155.54A741.63,741.63,0,0,1,1109,2559a1030.16,1030.16,0,0,0,560.82,164.13c673,0,1039-556.34,1039-1038.65V1637A740.93,740.93,0,0,0,2889.84,1448.15Z"
          />
        </svg>
      </div>
      <div className="w-full ">
        <div className="flex justify-center">
          <img
            src={String(post.item_data.user.avatar)}
            className="rounded-full m-2"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="text-center font-bold p-4 text-xl">
          {String(post.item_data.user.username)}
        </div>
        <div className="text-gray-600">{cardText}</div>
        <hr className="my-2" />
        <div>{timeSince(String(post.item_published))}</div>
      </div>
    </div>
  );
};

export default TwitterPost;
