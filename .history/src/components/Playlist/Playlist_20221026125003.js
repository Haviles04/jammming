import React from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";
class Playlist extends React.Component {
  render(){
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <TrackList setPlaylistName={this.props.updatePlaylistName} onRemove={this.props.onRemove}  isRemoval={false} tracks={this.props.playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
}
export default Playlist;