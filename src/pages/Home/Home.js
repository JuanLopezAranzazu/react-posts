import React, { useState, useEffect } from "react";
import "./Home.css";
import { apiURL } from "./../../utils/constants";
// components
import Header from "./../../components/Header/Header";
// container
import ListPosts from "./../../container/ListPosts/ListPosts";
// router
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authenticated")) {
      navigate("/login");
    }
  });

  useEffect(() => {
    fetch(apiURL + "/posts")
      .then((response) => {
        console.log("response.status: ", response.status);
        if (response.status === 403) {
          localStorage.removeItem("authenticated");
          navigate("/login");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="home">
      <Header text="Notifications" />
      <ListPosts posts={posts} />
    </div>
  );
};

export default Home;
