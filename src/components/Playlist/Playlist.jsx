import styles from "./Playlist.module.css";


function Playlist() {

    const playlistResults = [1, 2, 3];

    return (
        <div className={styles.playlistResultsContainer}>
            <div className={styles.headerContainer}>
                <input placeholder="New Playlist" className={styles.input} />
            </div>
            <div className={styles.contentContainer}>

                {playlistResults.map((num, i) => (
                    <div key={i} className={styles.playlistContainer}>
                        <div className={styles.playlistContainerSansHr}>
                            <div className={styles.nameAndArtistContainer}>
                                <p className={styles.songName}>Song Name {`${num}`}</p>
                                <p className={styles.artistName}>Artist</p>
                            </div>
                            <div className={styles.albumCoverContainer}>
                                <img className={styles.albumCover} src="https://upload.wikimedia.org/wikipedia/en/4/45/Billie_Eilish_-_Happier_Than_Ever.png" />
                            </div>
                            <div className={styles.minusButtonContainer}>
                                <img src="https://cdn-icons-png.flaticon.com/512/262/262039.png" className={styles.minusImg} />
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