import React, { useState } from "react";
import "./ListPosts.css";
// components
import Publication from "./../../components/Publication/Publication";
// container
import ListSearches from "./../../container/ListSearches/ListSearches";
// redux
import { useDispatch } from "react-redux";

const ListPosts = ({ posts }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: "ADD_SEARCH", payload: { title } });
  };

  return (
    <div className="main">
      <div className="search-posts">
        <input
          type="text"
          placeholder="Search by title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="icon-button" onClick={handleOnClick}>
          <span className="material-icons">save</span>
        </button>
      </div>
      <ListSearches setTitle={setTitle} />
      <div className="list-posts">
        {posts
          .filter((item) => {
            if (title === "") {
              return item;
            } else if (item.title.toLowerCase().includes(title.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return <Publication {...item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default ListPosts;
