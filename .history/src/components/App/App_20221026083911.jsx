import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResults/SearchResults';


function App() {
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResult />
        <Playlist />
      </div>
    </div>
  </div>
  );
}

export default App;
