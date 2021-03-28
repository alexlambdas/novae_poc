import React from "react";
import MaterialIcon from "material-icons-react";

import styles from "./Styles";

function SearchBar(props) {

    const { placeholder, disableBar } = props;

    const enableSearchBar = (
        <div style={styles.containerSearchBar}>
            <MaterialIcon icon="search" color="#616161" size="medium" />
            <input
                style={styles.inputTextSearch}
                placeholder={placeholder}
                className="input_search_bar"
                type="text" />
            <button
                style={styles.btnSearchBar}
                className="btn_search_bar">
                buscar
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