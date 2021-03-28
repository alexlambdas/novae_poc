import React from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Styles";
import "../../index.css";

function NewCreditCard(props){

    const { openNav, handleOpenNav } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const formObject = (
        <form style={styles.formSaveUser} onSubmit={handleSubmit}>
            <div style={styles.titleForm}>Crear nueva Tarjeta de Crédito</div>
            <div style={styles.containerInputs}>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Identificación (DNI) <span style={styles.spanImportant}>*</span>
                    </label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Tipo de tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Numero de Tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.containerButton}>
                    <div></div>
                    <button 
                        style={styles.buttonSave} 
                        className="btn_update_credit_card">Guardar</button>
                </div>
            </div>
        </form>
    )

    return (
        <div>
            <Navbar
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerSearchBar}>
                <SearchBar 
                    placeholder="barra de busqueda deshabilitada"
                    disableBar={true}/>
            </div>
            <div style={styles.containerForm}>
                {formObject}
            </div>
        </div>
    )
}

export default NewCreditCard;