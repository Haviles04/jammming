import React from 'react'

function TrackList({searchResults}) {
  return (
    <div class="TrackList">
      {searchResults.map( (track) => {(
        return <Track track={track} key={track.id} />
      )
        
      })}
    </div>
  )
}

export default TrackList