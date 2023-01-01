import React, { useState, useEffect } from "react";
import "./Login.css";
import { apiURL } from "./../../utils/constants";
// router
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleOnSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    fetch(apiURL + "/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        console.log("response.status: ", response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("authenticated", JSON.stringify(data));
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login">
      <form className="form-login" onSubmit={handleOnSubmit}>
        <h2>Please sign-in to your account</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter your username..."
          value={credentials.username}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={credentials.password}
          onChange={onChange}
        />
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
