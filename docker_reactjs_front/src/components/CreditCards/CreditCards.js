import React from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Styles";
import "../../index.css";

function CreditCards(props){

    const {openNav, handleOpenNav} = props;

    return(
        <div>
            <Navbar 
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerSearchBar}>
                <SearchBar 
                    placeholder="buscar tarjeta por número"
                    disableBar={false}/>
            </div>
        </div>
    )
}

export default CreditCards;