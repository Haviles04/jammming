let userAccessToken;
let expiresIn;
const clientId = "ce5ea111bbfd4006826713778f05f619";
const redirectUri = "http://localhost:3000/jammming";

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      userAccessToken = accessTokenMatch;
      expiresIn = expiresInMatch;
      //clears userAcessToken when expires
      window.setTimeout(() => (userAccessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    }

    if (!accessTokenMatch && !expiresInMatch) {
      const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location.assign(accessUri);
    }

    console.log(userAccessToken);
  },

  
  search(term) {
    const accessToken = Spotify.getAccessToken()[0];
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
};

export default Spotify;
