import React from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";
class Playlist extends React.Component {
  constructor(props){
    super(props);

    this.getPlayListName=this.getPlayListName.bind(this);
  }


  getPlayListName(e){
    let name;
    e.preventDefault();
    name = e.value
  }

  
  render(){
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" onChange={this.getPlayListName} />
      <TrackList setPlaylistName={this.props.setPlaylistName} onRemove={this.props.onRemove}  isRemoval={false} tracks={this.props.playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
}
export default Playlist;
