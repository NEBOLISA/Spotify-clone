import React, { useEffect, useState } from "react";
import "./Styles/Trending.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import axios from "axios";
import profile from "../Assets/imgs/avater.png";
import { useServiceProviderValue } from "../ServiceProvider";
function Trending() {
  //https://api.spotify.com/v1/me/top/artist
  const [{ token }, dispatch] = useServiceProviderValue();
  const [topTrack, setTopTrack] = useState();
  useEffect(() => {
    const getTopTrack = async () => {
      const response = await axios.get(
        `	https://api.spotify.com/v1/me/top/tracks`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setTopTrack(response.data);

      console.log(response);
    };

    getTopTrack();
  }, [token]);
  return (
    <div className="trending">
      <div className="title_wrapper">
        <h1 className="trending_title">Trending</h1>
        <p>More</p>
        <ChevronRightIcon />
      </div>
      <div className="trending_song_div">
        <div classname="items_div">
          {topTrack?.items[0]?.artists?.map((artist) => (
            <p className="artist_name">{artist?.name + " "}</p>
          ))}

          <h1 className="song_title">{topTrack?.items[0]?.name}</h1>

          <button className="trending_play">Play</button>
          <button className="trending_follow">Follow</button>
        </div>
        <img
          className="trending_img"
          src={topTrack?.items[0]?.album?.images[0]?.url}
          alt={topTrack?.items[0]?.name}
        />
      </div>
    </div>
  );
}

export default Trending;
