import React, { useEffect, useRef, useState } from "react";
import "./ListNotification.css";
// components
import Notification from "./../../components/Notification/Notification";

const data = [{ id: 1, text: "message" }];

const ListNotification = ({ text }) => {
  const ref = useRef(null);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div
      className="list-notification"
      ref={ref}
      style={{ left: windowDimension.width - 520 + "px" }}
    >
      <div className="header-list-notification">
        <h2>{text}</h2>
      </div>
      <div className="content-list-notification">
        {data.map((item) => {
          return <Notification text={item.text} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ListNotification;
