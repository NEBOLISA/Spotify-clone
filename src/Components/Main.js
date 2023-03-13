import React from "react";
import "./Styles/Main.css";
import SearchIcon from "@material-ui/icons/Search";
import Trending from "./Trending";
import PlayList from "./PlayList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AllPlayLists from "./AllPlayLists";
import { useServiceProviderValue } from "../ServiceProvider";
import PlayListTracks from "./PlayListTracks";

function Main() {
  const [{ token, playlists, user }] = useServiceProviderValue();
  //const id = playlists.items[0].id;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <div className="search_wrapper">
                {/*<SearchIcon className="search_icon" />*/}
                <input
                  type="text"
                  placeholder="Search for artist,songs and ..."
                ></input>
              </div>

              <p>What's hot🔥</p>

              <Trending />
              <PlayList />
            </div>
          }
        />
        <Route path="allplaylists" element={<AllPlayLists />} />

        <Route path="playlisttracks" element={<PlayListTracks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
