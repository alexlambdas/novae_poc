import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";

import styles from "./Styles";
import "../../index.css";

function UpdateUser(props){

    const [dni, setDni] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");
    const [users, setUsers] = useState([{
        dni: "",
        first_name_1: "",
        first_name_2: "",
        last_name_1: "",
        last_name_2: ""
    }]);

    const { openNav, handleOpenNav } = props;

    const handleInputSearch = (event) => {
        setDni(event.target.value);
    }

    const handleSearch = () => {
        let typeFetch = dni.length === 0 ? 0 : 1;
        if(typeFetch === 0){
            setShowError(true);
            setErrorDescription(`Se debe ingresar un DNI para buscar!`);
        }
        if(typeFetch === 1){
            if(isNaN(parseInt(dni, 10))){
                setShowError(true);
                setErrorDescription(`El valor de busqueda debe ser solo númerico`);
            }
            else {
                fetch(`http://localhost:6001/api/v1/user/${dni}`)
                    .then(response => response.json())
                    .then(response => setUsers([{...response}]))
                    .catch(response => {
                        setShowError(true);
                        setErrorDescription(`No existe un usuario con el DNI ${dni}`);
                    })
            }
           
        }
    }

    const handleReset = () => {
        setUsers([{
            dni: "",
            first_name_1: "",
            first_name_2: "",
            last_name_1: "",
            last_name_2: ""
        }]);
        setDni("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowError(true);
        setErrorDescription(`Aun no esta implementada la funcionalidad de actualizar un usuario`);
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
                    <input 
                        style={styles.inputTypeText}
                        defaultValue={users[0].dni} 
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Primer Nombre <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText}
                        defaultValue={users[0].first_name_1}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Nombre</label>
                    <input 
                        style={styles.inputTypeText} 
                        defaultValue={users[0].first_name_2}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Primer Apellido <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText} 
                        defaultValue={users[0].last_name_1}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Apellido</label>
                    <input 
                        style={styles.inputTypeText} 
                        defaultValue={users[0].last_name_2}
                        className="input_save_user" 
                        type="text" />
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
                    disableBar={false}
                    handleInputSearch={handleInputSearch}
                    handleSearch={handleSearch}
                    handleReset={handleReset}/>
            </div>
            {
                showError === true ? (
                    <div style={styles.containerForm}>
                        <ErrorCard
                            description={errorDescription}
                            setShowError={setShowError} />
                    </div>
                ) : (
                    <div style={styles.containerForm}>
                        {formObject}
                    </div>
                )
            }
        </div>
    )
}

export default UpdateUser;