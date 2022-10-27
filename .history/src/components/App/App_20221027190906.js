import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
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
    this.updatePlaylistName =this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }

    //add track from search results to playlist based on user input
    addTrack(track){
      let tracks = this.state.playlistTracks;
      if(tracks.find( prevTrack => prevTrack.id === track.id)){
        return;
      }
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    };

    // remove the track from playlist based on user input
    removeTrack(track){
      let currentPlaylistTracks =this.state.playlistTracks;
      let newPlaylistTracks = currentPlaylistTracks.filter( (prevTrack) => prevTrack.id !== track.id)
      this.setState({playlistTracks : newPlaylistTracks});
    };

    //updates playlist name based on user input
    updatePlaylistName(name){
      this.setState( {playlistName: name});
    }

    //Generates an array of Uri values and pushes them to an array
    savePlayList(){
      let trackUris = [];
      this.state.playlistTracks.forEach( track => {trackUris.push(track.uri)})
    }

    //sets the search term
    search(term){
      let searchTerm = term;
      Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})});
      console.log(this.state.searchResults);
    }
    () => {this.Spotify()};
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResult searchResults={this.state.searchResults} onRemove={this.removeTrack} onAdd={this.addTrack} />
            <Playlist onSave={this.savePlayList} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onAdd={this.addTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
