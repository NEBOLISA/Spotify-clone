import { redirect } from "react-router-dom";

export const signupEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://nebolisa.github.io/kc/callback";
const clientId = "7918759ef3f848f09946f4956f2943ef";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-playback-position",
  "user-top-read",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "user-modify-playback-state",
];

export const loginUrl = `${signupEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  console.log(redirectUri);
  let token = window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let part1 = item.split("=");
      initial[part1[0]] = decodeURIComponent(part1[1]);
      return initial;
    }, {});
  return token;
  //.find((elem) => elem.startsWith("access_token"))
  //.split("=")[1];
  /*.reduce((initial, item) => {
        let part1 = item.split("=");
        initial[part1[0]] = decodeURIComponent(part1[1]);
        return initial;
      }, {})**/
};
