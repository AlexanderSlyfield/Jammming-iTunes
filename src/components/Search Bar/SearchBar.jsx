import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar(props) {

    const [inputValue, setInputValue] = useState("");

    const handlerFunc = (e) => {
        e.preventDefault();
        props.onSearch(inputValue);
        setInputValue("");
    }

    return (
        <>
            <form className={styles.form}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.input} placeholder="Enter a Song Title" type="text" />
                <button onClick={handlerFunc} className={styles.button}>Search</button>
            </form>
        </>
    )
};

export default SearchBar;