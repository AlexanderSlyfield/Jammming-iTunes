import styles from "./Playlist.module.css";
import { HiOutlineMinusCircle } from "react-icons/hi2";


function Playlist(props) {

    const handleRemoveSong = (trackNum) => {
        const updated = props.playlist.filter((track) => track.trackId !== trackNum)
        props.setPlaylist(updated);
    }

    const handleSavePlaylist = () => {
        if (props.playlist.length) {
            alert("Your playlist would normally be saved to your iTunes or Spotify account, however due to recent changes to the authentication flow of these API's, OAuth2.0 is now the standard and implicit grant flow is being deprecated. This project was ment to use implicit grant flow and therefore will not actually save your playlist.")
        } else {
            alert("No songs added to playlist. Please add at least one song.")
        }
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
            <div className={styles.saveButtonContainer}>
                <button className={styles.saveButton} onClick={handleSavePlaylist} >Save Playlist</button>
            </div>
        </div>
    )
};

export default Playlist;