import React from "react";
import timeSince from "../../timeSince";
import parseTags from "../parseTags";
import { useSelector } from "react-redux";
import { selectPage } from "../postSlice";

const InstagramPost = ({ post }) => {
  const cardText = parseTags(post.item_data.caption, post.service_name);
  return (
    <div
      className="w-80 border border-gray-50 shadow-lg m-auto rounded-lg p-4 relative break-inside-avoid"
      key={post.item_id + useSelector(selectPage)}
    >
      <div className="absolute -top-3 rounded-full w-12">
        <svg
          id="Calque_1"
          data-name="Calque 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 382.47 382.47"
        >
          <defs>
            <style>{`.dls-1{fill:url(#linear-gradient);}.dls-2{fill:#fff;}`}</style>
            <linearGradient
              id="linear-gradient"
              x1="64.78"
              y1="331.09"
              x2="335.22"
              y2="60.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f3ca5f" />
              <stop offset="0.22" stopColor="#f88827" />
              <stop offset="0.43" stopColor="#dc2d5c" />
              <stop offset="0.71" stopColor="#a44882" />
              <stop offset="1" stopColor="#46469b" />
            </linearGradient>
          </defs>
          <path
            className="dls-1"
            d="M391.23,195.87c0,105.62-85.62,191.23-191.23,191.23S8.77,301.49,8.77,195.87,94.39,4.64,200,4.64,391.23,90.26,391.23,195.87Z"
            transform="translate(-8.77 -4.64)"
          />
          <path
            className="dls-2"
            d="M260.78,307.35H139.21A50.37,50.37,0,0,1,88.91,257V135.49a50.38,50.38,0,0,1,50.3-50.32H260.78a50.39,50.39,0,0,1,50.31,50.32V257A50.38,50.38,0,0,1,260.78,307.35Zm-121.57-200A28.22,28.22,0,0,0,111,135.49V257a28.22,28.22,0,0,0,28.18,28.2H260.78A28.22,28.22,0,0,0,289,257V135.49a28.22,28.22,0,0,0-28.18-28.19Zm60.79,147a57.42,57.42,0,1,1,57.42-57.41A57.47,57.47,0,0,1,200,254.33Zm0-92.72a35.31,35.31,0,1,0,35.31,35.31A35.35,35.35,0,0,0,200,161.61Zm59.62-36.23A14.57,14.57,0,1,0,274.2,140,14.55,14.55,0,0,0,259.62,125.38Z"
            transform="translate(-8.77 -4.64)"
          />
        </svg>
      </div>
      <div className="w-full">
        {post.item_data.type === "image" ? (
          <div className="bg-oopsy">
            <img
              src={String(post.item_data.image.medium)}
              className=""
              alt=""
              loading="lazy"
            />
          </div>
        ) : (
          ""
        )}
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

export default InstagramPost;
