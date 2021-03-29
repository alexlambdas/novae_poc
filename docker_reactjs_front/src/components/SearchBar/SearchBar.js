import React, { useState } from "react";
import MaterialIcon from "material-icons-react";

import styles from "./Styles";

function SearchBar(props) {

    const [valueInput, setValueInput] = useState("");
    const { placeholder, disableBar, handleInputSearch, handleSearch, handleReset } = props;

    const handleOnChange = (event) => {
        setValueInput(event.target.value);
        handleInputSearch(event);
    }

    const handleOnClick = () => {
        handleSearch();
    }

    const handleOnClickReset = () => {
        setValueInput("");
        handleReset();
    }

    const enableSearchBar = (
        <div style={styles.containerSearchBar}>
            <MaterialIcon icon="search" color="#616161" size="medium" />
            <input
                onChange={handleOnChange}
                style={styles.inputTextSearch}
                placeholder={placeholder}
                value={valueInput}
                className="input_search_bar"
                type="text" />
            <button
                onClick={handleOnClick}
                style={styles.btnSearchBar}
                className="btn_search_bar">
                buscar
            </button>
            <button
                onClick={handleOnClickReset}
                style={styles.btnResetBar}
                className="btn_search_bar">
                Limpiar
            </button>
        </div>
    );

    const disableSearchBar = (
        <div style={styles.containerSearchBar}>
            <MaterialIcon icon="search" color="#616161" size="medium" />
            <input
                style={styles.inputTextSearchDisable}
                placeholder={placeholder}
                className="input_search_bar"
                type="text" 
                disabled/>
            <button
                style={styles.btnSearchBarDisable}
                className="btn_search_bar"
                disabled>
                buscar
            </button>
        </div>
    );

    return (
        <>
            { disableBar ? disableSearchBar : enableSearchBar }
        </>
    )
}

export default SearchBar;