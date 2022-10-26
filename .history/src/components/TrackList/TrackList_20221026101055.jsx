import React from "react";
import Track from "../Track/Track";
import './TrackList.css'
function TrackList({ searchResults }) {
  return (
    <div className="TrackList">
      {() => { if(searchResults){
      
      searchResults.map((track) => {
        return <Track track={track} key={track.id} />
      }
      )
      
      }}};
    
    
    </div>
  );
}

export default TrackList;
