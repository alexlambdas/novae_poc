import React from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Styles";
import "../../index.css";

function UpdateUser(props){

    const { openNav, handleOpenNav } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const formObject = (
        <form style={styles.formSaveUser} onSubmit={handleSubmit}>
            <div style={styles.titleForm}>Actualizar Usuario</div>
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
                        Primer Nombre <span style={styles.spanImportant}>*</span></label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Nombre</label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Primer Apellido <span style={styles.spanImportant}>*</span></label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Apellido</label>
                    <input style={styles.inputTypeText} className="input_save_user" type="text" />
                </div>
                <div style={styles.containerButton}>
                    <div></div>
                    <button 
                        style={styles.buttonSave} 
                        className="btn_save_user">Actualizar</button>
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
                    placeholder="buscar usuario por DNI"
                    disableBar={false}/>
            </div>
            <div style={styles.containerForm}>
                {formObject}
            </div>
        </div>
    )
}

export default UpdateUser;