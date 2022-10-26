import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.getPlayListName = this.getPlayListName.bind(this);
  }

  getPlayListName(e) {
    e.preventDefault();
    this.props.onNameChange(e.target.value);
  }


  render() {
    return (
      <div className="Playlist">
        <input type="text" defaultValue="New Playlist" onChange={this.getPlayListName} />
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
