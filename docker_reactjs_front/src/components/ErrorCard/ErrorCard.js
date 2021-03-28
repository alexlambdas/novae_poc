import React from "react";

import Navbar from "../Navbar/Navbar";

import styles from "./Styles";
import "../../index.css";

function ErrorCard(props){

    const { openNav, handleOpenNav, description} = props;

    const handleClick = () => {
        
    }

    const formObject = (
        <div style={styles.formSaveUser}>
            <div style={styles.titleForm}>Error en la Operación</div>
            <div style={styles.containerInputs}>
                {description}
            </div>
            <div style={styles.containerButton}>
                <button 
                    style={styles.buttonSave} 
                    className="btn_update_credit_card"
                    onClick={handleClick}>
                        Regresar a página principal
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <Navbar
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerForm}>
                {formObject}
            </div>
        </div>
    )
}

export default ErrorCard;