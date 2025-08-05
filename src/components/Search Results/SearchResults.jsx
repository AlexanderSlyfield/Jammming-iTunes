import styles from "./SearchResults.module.css";
import { useState, useRef } from "react";
import { BsPlayCircle, BsPauseCircle, BsPlusCircle } from "react-icons/bs";

function SearchResults(props) {

    const urlRef = useRef(null);
    const [playingIndex, setPlayingIndex] = useState(null);

    const playPreview = (url, index) => {

        if (urlRef.current && urlRef.current.src === url) {
            if (urlRef.current.paused) {
                urlRef.current.play();
                setPlayingIndex(index);
            } else {
                urlRef.current.pause();
                setPlayingIndex(null);
            }
            return;
        }

        if (urlRef.current) {
            urlRef.current.pause()
        }

        const audioObj = new Audio(url);
        urlRef.current = audioObj;
        audioObj.play();
        setPlayingIndex(index)

    }

    const handleAddToPlaylist = (track) => {
        if (props.playlist.some((trackObj) => trackObj.trackId === track.trackId)) {
            return null;
        } else {
            props.setPlaylist((prev) => [...prev, track])
        }
    };


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
                            {result.previewUrl ? (
                                <div className={styles.playContainer}>
                                    {playingIndex === i ? (
                                        <BsPauseCircle onClick={() => playPreview(result.previewUrl, i)} className={styles.pauseIcon} />
                                    ) : (
                                        <BsPlayCircle onClick={() => playPreview(result.previewUrl, i)} className={styles.playIcon} />
                                    )}
                                </div>
                            ) : null}
                            <div className={styles.plusButtonContainer}>
                                <BsPlusCircle className={styles.plusIcon} onClick={() => handleAddToPlaylist(result)} />
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