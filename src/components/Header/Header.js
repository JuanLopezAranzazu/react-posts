import React, { useState } from "react";
import "./Header.css";
// containers
import ListNotification from "./../../container/ListNotification/ListNotification";
// router
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (localStorage.getItem("authenticated")) {
      localStorage.removeItem("authenticated");
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <div className="content-header">
        <a
          href="/"
          style={{
            color: "blueviolet",
            fontSize: "26px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          My application
        </a>
        <div className="options-header">
          <button
            type="button"
            className="icon-button"
            onClick={() => navigate("/posts")}
          >
            <span className="material-icons">account_circle</span>
          </button>

          <button
            type="button"
            className="icon-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons">notifications</span>
          </button>
          <button type="button" className="icon-button" onClick={handleOnClick}>
            <span className="material-icons">logout</span>
          </button>
        </div>
      </div>
      {isOpen && <ListNotification text="Notifications" />}
    </div>
  );
};

export default Header;
