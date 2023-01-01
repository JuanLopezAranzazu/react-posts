import React from "react";
import "./Publication.css";

const Publication = ({ title, description }) => {
  return (
    <div className="publication">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Publication;
