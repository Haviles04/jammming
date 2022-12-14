import React from "react";
import Track from "../Track/Track";

import "./TrackList.css";
class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.track.map( (track) => {
          return <Track />
        })}
      </div>
    )
  }
}
export default TrackList;
