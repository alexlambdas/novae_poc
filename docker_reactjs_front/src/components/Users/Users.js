import React from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Styles";
import "../../index.css";

function Users(props){

    const {openNav, handleOpenNav} = props;

    return(
        <div>
            <Navbar 
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerSearchBar}>
                <SearchBar 
                    placeholder="buscar usuario por identificación DNI"
                    disableBar={false}/>
            </div>
            <div>Users</div>
        </div>
    )
}

export default Users;