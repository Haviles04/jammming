import React from "react";
import Track from "../Track/Track";

import "./TrackList.css";
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks && this.props.tracks.map( (track) => {
          return <Track track={tracks} id={tracks.id}/>
        })}
      </div>
    )
  }
}
export default TrackList;
