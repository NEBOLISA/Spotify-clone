import React, { useEffect } from "react";
import profile from "../Assets/imgs/avater.png";
import axios from "axios";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/PlayListCard.css";

function PlayListCard({ playlist, id, onClick }) {
  const [{ user, token }, dispatch] = useServiceProviderValue();
  const { name, images } = playlist;
  console.log(id);
  

  return (
    <div className="playlistcard" onClick={onClick}>
      <img src={images.length !== 0 ? images[0].url : profile} alt={name} />
      <h1 className="playlist_name">{name}</h1>
      <div className="playlist_details">
        <p className="user_name">{user?.display_name}</p>
        <p>{playlist?.tracks?.total} songs</p>
      </div>
    </div>
  );
}

export default PlayListCard;
