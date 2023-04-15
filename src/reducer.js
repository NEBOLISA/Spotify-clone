export const initialState = {
  user: null,
  playlists: [],
  playerState: false,
  tracks: null,
  playing: false,
  item: null,
  spotify: null,
  id: null,
  token: null,
  currentPlaying: null,
  playlistName: null,
  category: null,
  //"BQDSUkNmzBqpsTTJN4aA6VlXPkEvB1Cv_Wb-MXhTz9n8QgdDF0…xP75DVvPAcXZijRhmYEUIvkDN-TVSzeC2GMM2QE3GVIyNHVsQ",
  //"BQC-ewjGoC-1rwuneu8kHs3GRMj5lS9v4HooNibi3dbEcRc_9K1iJCKiBFF7S1aDGHKfL7OijCLr_UNVpOBd-y5G-AOCNqpeVavhKI1sogdzC67QT2aZcYPyMOdhw-ijoGwX0QFaSMn70OXxw9srQODoY3l9VEA2Qb6nQTV3lxCm--PSe22Ce0VTalxqD3BzL1O0O1s8fI4aWRcDckRrZg",
};
const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_ID":
      return {
        ...state,
        id: action.id,
      };
    case "DEFAULT_PLAYLIST":
      return {
        ...state,
        playlistName: action.playlistName,
      };
    case "SELECTED_PLAYLIST_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_PLAYING":
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case "SET_PLAYER_STATE":
      return {
        ...state,
        playerState: action.playerState,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};
export default reducer;
