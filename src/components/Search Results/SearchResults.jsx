import styles from "./SearchResults.module.css";

function SearchResults(props) {


    return (
        <div className={styles.searchResultsContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Results</h2>
            </div>
            <div className={styles.contentContainer}>

                {props.results.map((num, i) => (
                    <div key={i} className={styles.resultContainer}>
                        <div className={styles.resultContainerSansHr}>
                            <div className={styles.playContainer}>
                                <img className={styles.playImg} src="https://cdn-icons-png.flaticon.com/512/0/375.png" />
                            </div>
                            <div className={styles.nameAndArtistContainer}>
                                <p className={styles.songName}>Song Name {`${num}`}</p>
                                <p className={styles.artistName}>Artist</p>
                            </div>
                            <div className={styles.albumCoverContainer}>
                                <img className={styles.albumCover} src="https://upload.wikimedia.org/wikipedia/en/4/45/Billie_Eilish_-_Happier_Than_Ever.png" />
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