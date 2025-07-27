import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from "../Search Bar/SearchBar"

function App() {


  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Ja<span className={styles.highlight}>mmm</span>ing iTunes</h1>
      </header>

      <br />
      <SearchBar />
    </>
  )
}

export default App
