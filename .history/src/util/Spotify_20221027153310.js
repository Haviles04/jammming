import React from "react";

class Spotify extends React.Component {
  userAccessToken;

  getAccessToken() {
    if (!this.userAccessToken) {
      const accessToken = window.location.href.match(/access_token=([^&]*)/);
      const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
    } else {
        this.userAccessToken = accessToken;
    }
  }

  render() {
    return <></>;
  }
}

export default Spotify;
