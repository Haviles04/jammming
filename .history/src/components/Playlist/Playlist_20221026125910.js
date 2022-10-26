import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.getPlayListName = this.getPlayListName.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  getPlayListName(e) {
    e.preventDefault();
    return e.value;
  }

  updatePlaylistName(){
    this.props.onNameChange(this.getPlayListName);
  }


  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" onChange={this.getPlayListName} />
        <TrackList
          onRemove={this.props.onRemove}
          isRemoval={false}
          tracks={this.props.playlistTracks}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default Playlist;
