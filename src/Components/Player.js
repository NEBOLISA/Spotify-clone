import React from "react";
import "./Styles/Player.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Section />
        <Main />
      </div>
      {/*footer*/}
      <div className="footer_wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
