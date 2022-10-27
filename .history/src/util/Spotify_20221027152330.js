import React from "react";

class Spotify extends React.Component {

    userAccessToken


    getAccessToken(){
       let accessToken = window.location.href.match(/access_token=([^&]*)/);
       let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
    }

  
  
    render() {
    return <></>;
  }
}

export default Spotify;
