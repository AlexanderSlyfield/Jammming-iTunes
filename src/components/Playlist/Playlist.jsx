import styles from "./Playlist.module.css";
import { HiOutlineMinusCircle } from "react-icons/hi2";


function Playlist(props) {

    const handleRemoveSong = (trackNum) => {
        const updated = props.playlist.filter((track) => track.trackId !== trackNum)
        props.setPlaylist(updated);
    }

    return (
        <div className={styles.playlistResultsContainer}>
            <div className={styles.headerContainer}>
                <input placeholder="New Playlist" className={styles.input} />
            </div>
            <div className={styles.contentContainer}>

                {props.playlist.map((result, i) => (
                    <div key={i} className={styles.playlistContainer}>
                        <div className={styles.playlistContainerSansHr}>
                            <div className={styles.albumCoverContainer}>
                                <img className={styles.albumCover} src={result.artworkUrl100} />
                            </div>
                            <div className={styles.nameAndArtistContainer}>
                                <p className={styles.songName}>{result.trackName}</p>
                                <p className={styles.artistName}>{result.artistName}</p>
                            </div>

                            <div className={styles.minusButtonContainer}>
                                <HiOutlineMinusCircle onClick={() => handleRemoveSong(result.trackId)} className={styles.minusIcon} />
                            </div>
                        </div>
                        <hr className={styles.divider} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Playlist;