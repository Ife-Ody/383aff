import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import styles from "./Posts.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDataAsync,
  selectPage,
  selectPost,
  selectFilter,
  selectStatus,
} from "./postSlice";
import ManualPost from "./post/ManualPost";
import TwitterPost from "./post/TwitterPost";
import InstagramPost from "./post/InstagramPost";
import Filter from "./filter/Filter";

const Posts = () => {
  const breakpointColumnsObj = {
    default: 4,
    1600: 3,
    1100: 2,
    750: 1,
  };
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const filter = useSelector(selectFilter);
  const status = useSelector(selectStatus);

  // iinitialise the renderedPost jsx
  let renderedPosts = <div></div>;
  // use a Switch to render the right post depending on what filter is selected
  switch (filter) {
    case "All":
      renderedPosts = posts.map((post) => {
        if (post.service_name === "Manual") {
          return <ManualPost post={post}></ManualPost>;
        } else if (post.service_name === "Twitter") {
          return <TwitterPost post={post}></TwitterPost>;
        } else if (post.service_name === "Instagram") {
          return <InstagramPost post={post}></InstagramPost>;
        } else {
          return "";
        }
      });
      break;
    case "Manual":
      renderedPosts = posts.map((post) => {
        if (post.service_name === "Manual") {
          return <ManualPost post={post}></ManualPost>;
        } else {
          return "";
        }
      });
      break;
    case "Twitter":
      renderedPosts = posts.map((post) => {
        if (post.service_name === "Twitter") {
          return <TwitterPost post={post}></TwitterPost>;
        } else {
          return "";
        }
      });
      break;
    case "Instagram":
      renderedPosts = posts.map((post) => {
        if (post.service_name === "Instagram") {
          return <InstagramPost post={post}></InstagramPost>;
        } else {
          return "";
        }
      });
      break;
    default:
      break;
  }

  // fetch data in order to populate the page for first render
  useEffect(() => {
    dispatch(fetchDataAsync(page));
  }, []);

  return (
    <div className="">
      {/* header containe for results and filter */}
      <div className="bg-gray-50 p-6 text-gray-700 text-center md:text-left">
        <h2 className="text-2xl py-2">
          We found <strong className="text-black">{posts.length}</strong>{" "}
          results for <strong className="text-black">{"'#aff'"}</strong>
        </h2>
        <p className="text-gray-500 text-sm">
          Juicer, Twitter and Instagram posts.
        </p>
        <Filter></Filter>
      </div>
      <div className="p-4 py-12 container mx-auto">
        {/* check if there is data loading through the status variable and render some user feedback -Note: implement spinning wheel to replace text */}
        {status === "loading" ? (
          <div className="fixed z-10 flex justify-center items-center top-0 border bottom-0 left-0 right-0 m-auto bg-white rounded-md h-24 w-24">
            Loading...
          </div>
        ) : (
          ""
        )}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}
        >
          {renderedPosts}
        </Masonry>

        <div className="flex justify-center">
          <button
            className="text-center border rounded w-32 mx-auto p-2"
            onClick={() => dispatch(fetchDataAsync(page))}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
