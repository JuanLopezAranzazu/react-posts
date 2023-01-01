/*
import React, { useState, useEffect } from "react";
import "./App.css";
import { apiURL } from "./utils/constants";
// components
import Publication from "./components/Publication/Publication";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [stringDate, setStringDate] = useState("2022-12-25");

  useEffect(() => {
    fetch(apiURL + "/posts")
      .then((response) => response.json())
      .then((data) => {
        setFiltered(getPostsByDate(data));
        setPosts(data);
      });
  }, []);

  useEffect(() => {
    setFiltered(getPostsByDate(posts));
  }, [stringDate]);

  const getPostsByDate = (posts) => {
    const date = new Date(stringDate);
    return posts.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return (
        date.getFullYear() === itemDate.getFullYear() &&
        date.getMonth() === itemDate.getMonth() &&
        date.getDate() === itemDate.getDate()
      );
    });
  };

  return (
    <div className="app">
      <div className="data">
        <h2>Data</h2>
        {posts.map((item) => {
          return <Publication {...item} key={item.id} />;
        })}
      </div>
      <div className="data">
        <h2>Filtered</h2>
        <div className="filter-date">
          <input
            type="date"
            placeholder="Enter date..."
            onChange={(event) => setStringDate(event.target.value)}
          />
        </div>
        {filtered.map((item) => {
          return <Publication {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
*/

/*
import React, { useState, useEffect } from "react";
import "./App.css";
import { apiURL } from "./utils/constants";
// pages
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiURL + "/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  if (!localStorage.getItem("authenticated")) {
    return <Login />;
  } else {
    return <Posts posts={posts} />;
  }
};

export default App;
*/

/*
import React, { useState, useEffect } from "react";
import "./App.css";
import { apiURL } from "./utils/constants";
// components
import Header from "./components/Header/Header";
// container
import ListPosts from "./container/ListPosts/ListPosts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiURL + "/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="app">
      <Header posts={posts} />
      <ListPosts posts={posts} />
    </div>
  );
};

export default App;
*/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
