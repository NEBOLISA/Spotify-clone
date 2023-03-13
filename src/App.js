import { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Components/spotify";
import SportifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useServiceProviderValue } from "./ServiceProvider";

const spotify1 = new SportifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token, spotify }, dispatch] = useServiceProviderValue();

  useEffect(() => {
    let hash = getTokenFromUrl();
    window.location.hash = "";
    let Temptoken = hash.access_token;
    if (Temptoken) {
      //setToken(Temptoken);
      const spotify = new SportifyWebApi();
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      dispatch({
        type: "SET_TOKEN",
        token: Temptoken,
      });
      spotify1.setAccessToken(Temptoken);
      spotify1.getMe().then((user) => {
        // console.log("", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify1.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    } //console.log("I HAVE A TOKEN >>>", Temptoken);
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify1} /> : <Login />}
    </div>
  );
}

export default App;
