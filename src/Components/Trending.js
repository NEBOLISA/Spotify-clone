import React from "react";
import "./Styles/Trending.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Trending() {
  return (
    <div className="trending">
      <div className="title_wrapper">
        <h1 className="trending_title">Trending</h1>
        <p>More</p>
        <ChevronRightIcon />
      </div>
      <div className="trending_song_div">
        <p className="artist_name">Artist</p>
        <h1 className="song_title">On Top Of The World</h1>
        <button className="trending_play">Play</button>
        <button className="trending_follow">Follow</button>
      </div>
    </div>
  );
}

export default Trending;
