import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {

  const [SearchResults, setSearchResults] = useState([]);


  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResult searchResults={SearchResults}/>
        <Playlist />
      </div>
    </div>
  </div>
  );
}

export default App;
