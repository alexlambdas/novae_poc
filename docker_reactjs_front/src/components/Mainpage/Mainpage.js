import React from "react";

import Navbar from "../Navbar/Navbar";

import imgNovae from "../../images/novae.jpg";
import styles from "./Styles";
import "../../index.css";

function Mainpage(props){

    const {openNav, handleOpenNav} = props;

    return(
        <div>
            <Navbar 
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerMainPage}>
                <div style={styles.containerImgMainPage}>
                    <img 
                        src={imgNovae}
                        style={styles.imgMainPage}
                        alt="imagen" 
                        width="500px"/>
                </div>
                <div style={styles.containerPersonalInfo}>
                    <div style={styles.info1}>Prueba Técnica</div>
                    <div style={styles.info2}>Alex Daniel Meza López</div>
                    <div style={styles.info1}>alexdanielmeza@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage;