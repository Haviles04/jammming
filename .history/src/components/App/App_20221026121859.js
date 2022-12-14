import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name2", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        { name: "name4", artist: "artist4", album: "album4", id: 4 },
        { name: "name5", artist: "artist5", album: "album5", id: 5 },
        { name: "name6", artist: "artist6", album: "album6", id: 6 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }

    addTrack(track){
      let tracks = this.state.playlistTracks;
      if(tracks.find( prevTrack => prevTrack.id === track.id)){
        return;
      }
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }

    removeTrack(track){
      let currentPlaylistTracks =this.state.playlistTracks;
      let newPlaylistTracks = currentPlaylistTracks.filter( (prevTrack) => prevTrack.id !== track.id)
      this.setState({playlistTracks : newPlaylistTracks});
    }


  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
