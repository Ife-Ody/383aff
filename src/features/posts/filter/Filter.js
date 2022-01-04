import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectPost } from "../postSlice";
import { setFilter } from "../postSlice";

const Filter = () => {
  let platforms = ["All"];
  const posts = useSelector(selectPost);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // get the name of platforms incase thare are more than the 3 specified
  posts.forEach((post) => {
    platforms.push(post.service_name);
  });
  // map the platforms into buttons which will dispatch the filter action
  const renderedTags = [...new Set(platforms)].map((tag) => {
    return (
      <button
        className={filter === tag ? "text-red-500" : ""}
        onClick={() => dispatch(setFilter(tag))}
      >
        {tag}
      </button>
    );
  });

  return (
    <div className="py-4">
      <div className="font-bold py-2">Browse by platform</div>
      <div className="flex flex-row gap-4 text-blue-600 justify-center md:justify-start">
        {renderedTags}
      </div>
    </div>
  );
};

export default Filter;
