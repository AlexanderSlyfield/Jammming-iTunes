import styles from "./SearchBar.module.css";

function SearchBar() {
    return (
        <>
            <form className={styles.form}>
                <input className={styles.input} placeholder="Enter a Song Title" type="text" />
                <button className={styles.button}>Search</button>
            </form>
        </>
    )
};

export default SearchBar;