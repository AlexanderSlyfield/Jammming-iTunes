import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from "../Search Bar/SearchBar"
import SearchResults from "../Search Results/SearchResults"
import Playlist from "../Playlist/Playlist"

function App() {

  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  // const handleSearch = (searchTerm) => {
  //   fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song&attribute=songTerm&limit=10`)
  //     .then((response) => response.json())
  //     .then((response) => setResults(response.results))
  // }

  const handleSearch = async (searchTerm) => {
    const data = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song&attribute=songTerm&limit=25`);
    const jsonResponse = await data.json();
    setResults(jsonResponse.results);
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Ja<span className={styles.highlight}>mmm</span>ing iTunes</h1>
      </header>

      <br />
      <SearchBar onSearch={handleSearch} />
      <br />

      <div className={styles.resultAndPlaylistContainer}>
        <SearchResults results={results} playlist={playlist} setPlaylist={setPlaylist} />
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </>
  )
}

export default App
