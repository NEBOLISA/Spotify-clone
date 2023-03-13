import React from "react";
import "./Styles/Footer.css";
import { Grid, Slider } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import LoopIcon from "@material-ui/icons/Loop";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import CurrentTrack from "./CurrentTrack";
import axios from "axios";
import { useServiceProviderValue } from "../ServiceProvider";

function Footer() {
  const [{ token, playerState }, dispatch] = useServiceProviderValue();
  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(`https://api.spotify.com/v1/me/player/${state}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "SET_PLAYER_STATE",
      playerState: !playerState,
    });
  };
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "SET_PLAYER_STATE", playerState: true });
    const response1 = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: "SET_PLAYING", currentPlaying });
    } else {
      dispatch({ type: "SET_PLAYING", currentPlaying: null });
    }
  };
  return (
    <div className="footer">
      <div className="footer_left">
        <FavoriteBorderIcon className="footer_icon" />
        <PlaylistAddIcon className="footer_icon" />
      </div>
      <div className="footer_middle">
        <LoopIcon className="footer_icon" />
        <SkipPreviousIcon
          className="footer_icon"
          onClick={() => changeTrack("previous")}
        />
        {playerState ? (
          <PauseCircleOutlineIcon
            fontSize="large"
            onClick={changeState}
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            fontSize="large"
            onClick={changeState}
            className="footer_icon"
          />
        )}

        <SkipNextIcon
          className="footer_icon"
          onClick={() => changeTrack("next")}
        />
        <ShuffleIcon className="footer_icon" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs={5}>
            <Slider />
          </Grid>
          <Grid item>
            <VolumeUpOutlinedIcon />
          </Grid>
        </Grid>
      </div>
      <CurrentTrack />
    </div>
  );
}

export default Footer;
