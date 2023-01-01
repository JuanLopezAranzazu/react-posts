import React from "react";
import "./ListPosts.css";
// components
import Publication from "./../../components/Publication/Publication";

const ListPosts = ({ posts }) => {
  return (
    <div className="list-posts">
      {posts.map((item) => {
        return <Publication {...item} key={item.id} />;
      })}
    </div>
  );
};

export default ListPosts;
