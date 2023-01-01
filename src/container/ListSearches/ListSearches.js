import React from "react";
import "./ListSearches.css";
// redux
import { useSelector } from "react-redux";
// components
import Search from "./../../components/Search/Search";

const ListSearches = ({ setTitle }) => {
  const searches = useSelector((state) => state.searches.searches);

  return (
    <div className="list-searches">
      {searches.map((item) => {
        return <Search {...item} setTitle={setTitle} key={item.id} />;
      })}
    </div>
  );
};

export default ListSearches;
