import styles from "./SearchResults.module.css";
import { useState } from "react";

function SearchResults(props) {

    const [audio] = useState(() => new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }


    return (
        <div className={styles.searchResultsContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Results</h2>
            </div>
            <div className={styles.contentContainer}>

                {props.results.map((result, i) => (
                    <div key={i} className={styles.resultContainer}>
                        <div className={styles.resultContainerSansHr}>
                            <div className={styles.albumCoverContainer}>
                                <img className={styles.albumCover} src={result.artworkUrl100} />
                            </div>

                            <div className={styles.nameAndArtistContainer}>
                                <p className={styles.songName}>{result.trackName}</p>
                                <p className={styles.artistName}>{result.artistName}</p>
                            </div>
                            <div className={styles.playContainer}>
                                <img onClick={togglePlay} className={styles.playImg} src="https://cdn-icons-png.flaticon.com/512/0/375.png" />
                            </div>
                            <div className={styles.plusButtonContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/262/262038.png" className={styles.plusImg} />
                            </div>
                        </div>
                        <hr className={styles.divider} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SearchResults;