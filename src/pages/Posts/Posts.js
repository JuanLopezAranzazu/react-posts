import React, { useState, useEffect } from "react";
import "./Posts.css";
import { apiURL } from "./../../utils/constants";
// components
import Header from "./../../components/Header/Header";
// router
import { useNavigate } from "react-router-dom";
// container
import ListPosts from "../../container/ListPosts/ListPosts";

const Posts = () => {
  const [postsByUser, setPostsByUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authenticated")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("authenticated"));
    fetch(apiURL + "/posts/user", {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => {
        console.log("response.status: ", response.status);
        if (response.status === 403) {
          localStorage.removeItem("authenticated");
          navigate("/login");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPostsByUser(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="posts">
      <Header text="Notifications" />
      <div className="data">
        <h2>User by posts</h2>
        <ListPosts posts={postsByUser} />
      </div>
    </div>
  );
};

export default Posts;
