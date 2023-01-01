import React from "react";
import "./Search.css";
// redux
import { useDispatch } from "react-redux";

const Search = ({ id, title, setTitle }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: "DELETE_SEARCH", payload: { id } });
    setTitle("");
  };

  return (
    <div className="search" onClick={() => setTitle(title)}>
      <p>{title}</p>
      <button className="btn-dismiss" onClick={handleOnClick}>
        x
      </button>
    </div>
  );
};

export default Search;
