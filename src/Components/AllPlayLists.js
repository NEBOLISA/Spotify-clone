import React, { useEffect, useState } from "react";
import "./Styles/AllPlayList.css";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import axios from "axios";
import { useServiceProviderValue } from "../ServiceProvider";
import PlayListCard from "./PlayListCard";
import PlayListTracks from "./PlayListTracks";
import { Link } from "react-router-dom";
function AllPlayLists() {
  const [{ token, playlists, dispatch }] = useServiceProviderValue();
  const { id } = playlists;
  const displayTracks = async () => {};
  return (
    <div className="allplaylist">
      <Link to="/" className="link">
        <NavigateBeforeOutlinedIcon />
      </Link>
      {playlists?.items?.map((playlist) => (
        <div className="playlistcards">
          <Link to="/playlisttracks" className="link">
            <PlayListCard
              onClick={async () => {
                const response = await axios.get(
                  `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
                  {
                    headers: {
                      Authorization: "Bearer " + token,
                      "Content-Type": "application/json",
                    },
                  }
                );
                dispatch({
                  type: "SELECTED_PLAYLIST_TRACKS",
                  tracks: response.data,
                });
              }}
              playlist={playlist}
              id={playlist.id}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllPlayLists;
