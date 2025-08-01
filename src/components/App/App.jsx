import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from "../Search Bar/SearchBar"
import SearchResults from "../Search Results/SearchResults"
import Playlist from "../Playlist/Playlist"

function App() {

  const [results, setResults] = useState([1, 2, 3, 4, 5]);

  const handlerFun = (e) => {
    e.preventDefault()
    setResults((prev) => [...prev, prev[prev.length - 1] + 1])
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Ja<span className={styles.highlight}>mmm</span>ing iTunes</h1>
      </header>

      <br />
      <SearchBar handlerFun={handlerFun} />
      <br />

      <div className={styles.resultAndPlaylistContainer}>
        <SearchResults results={results} />
        <Playlist />
      </div>
    </>
  )
}

export default App
