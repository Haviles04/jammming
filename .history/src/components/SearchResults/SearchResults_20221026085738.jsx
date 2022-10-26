import React from "react";
import TrackList from "../TrackList/TrackList";

function SearchResults({searchResults}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList searchResults={searchResults}/>
    </div>
  );
}

export default SearchResults;
