import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/PlayList.css";
function PlayList() {
  const [{ token, playlists, playlistName }, dispatch] =
    useServiceProviderValue();
  const [tracks, setTracks] = useState([]);
  let play = [];
  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    console.log("PlayList:" + token);
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      const currentPlaying = {
        id,
        name,
        artists,
        image,
      };
      dispatch({ type: "SET_PLAYING", currentPlaying });
      dispatch({ type: "SET_PLAYER_STATE", playerState: true });
    } else {
      dispatch({ type: "SET_PLAYER_STATE", playerState: true });
    }
  };

  useEffect(() => {
    const getTracks = async () => {
      const response = await axios.get(
        `	https://api.spotify.com/v1/me/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "DEFAULT_PLAYLIST",
        playlistName: response.data.items[1].name,
      });

      const response1 = await axios.get(
        `https://api.spotify.com/v1/playlists/${response.data.items[1].id}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      setTracks(response1.data);
      console.log(response1.data);
    };
    getTracks();
  }, [token, dispatch]);

  playlists?.items?.map((playlist) => play.push(playlist?.name));
  //console.log("playlist:" + playlistName);
  const msToMinutesAndSecs = (ms) => {
    const min = Math.floor((ms / 1000 / 60) << 0);
    const sec = Math.floor((ms / 1000) % 60);
    return min + ":" + sec;
  };
  return (
    <>
      {}
      <div className="playlist">
        <div className="title_wrapper">
          <h1 className="playlist_title">{playlistName}</h1>
          <Link to="/allplaylists" className="link">
            Show All
          </Link>
        </div>

        <div className="playlist_info">
          <div className="playlist_header">
            <p>#</p>
            <p>TITLE</p>
            <p>ARTIST</p>
            <p>TIME</p>
            <p>ALBUM</p>
          </div>
          {tracks?.items?.map((items, id) => (
            <div
              className="song_details"
              key={`playlist-${id}`}
              onClick={() =>
                playTrack(
                  items?.track?.id,
                  items?.track?.name,
                  items?.track?.artists,
                  items?.track?.image,
                  items?.track?.context_uri,
                  items?.track?.track_number
                )
              }
            >
              <p>{id + 1}</p>
              <p>{items?.track?.name}</p>
              <p className="artistName">
                {items?.track?.artists.map((artist) => (
                  <p>{artist.name}</p>
                ))}
              </p>

              <p>
                {msToMinutesAndSecs(items?.track?.duration_ms)}

                {/*.split(".")[0]}:{time.split(".")[1]*/}
              </p>
              <p className="album">{items?.track?.album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PlayList;
