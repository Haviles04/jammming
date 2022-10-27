let userAccessToken;
let expiresIn;

const Spotify = {
    getAccessToken(){
        if(userAccessToken){
            return userAccessToken;
        }else{
            userAccessToken = window.location.href.match(/access_token=([^&]*)/);
            expiresIn = window.location.href.match(/expires_in=([^&]*)/);
        }
    }
}

export default Spotify;