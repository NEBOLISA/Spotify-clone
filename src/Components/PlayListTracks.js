import React from "react";
import { useServiceProviderValue } from "../ServiceProvider";
import "./Styles/PlayListTracks.css";

function PlayListTracks() {
  const [{ tracks }] = useServiceProviderValue();
  console.log("here:" + tracks);
  console.log("PlayListTracks" + tracks);
  return (
    <div className="playlisttrack">
      {tracks?.items.map((item) =>
        item.tracks.map((track) => <p> {tracks.name}</p>)
      )}
    </div>
  );
}

export default PlayListTracks;
