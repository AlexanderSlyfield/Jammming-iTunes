import styles from "./SearchBar.module.css";

function SearchBar(props) {
    return (
        <>
            <form className={styles.form}>
                <input className={styles.input} placeholder="Enter a Song Title" type="text" />
                <button onClick={props.handlerFun} className={styles.button}>Search</button>
            </form>
        </>
    )
};

export default SearchBar;