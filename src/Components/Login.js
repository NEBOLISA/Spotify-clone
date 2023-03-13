import React from "react";
import "./Styles/Login.css";
import logo from "../Assets/imgs/Spotifylogo.jpg";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
