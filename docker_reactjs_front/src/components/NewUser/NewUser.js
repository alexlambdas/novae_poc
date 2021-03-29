import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";
import SuccessCard from "../SuccessCard/SuccessCard";

import styles from "./Styles";
import "../../index.css";

function NewUser(props) {

    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");
    const [isReturn, setIsReturn] = useState(false);
    const [user, setUser] = useState({
        dni: "",
        first_name_1: "",
        first_name_2: "",
        last_name_1: "",
        last_name_2: ""
    });
    const { openNav, handleOpenNav } = props;

    const handleChangeDni = (event) => {
        let dni = event.target.value;
        setUser({...user, dni: dni});
    }

    const handleChangeFirstName1 = (event) => {
        let firstName1 = event.target.value;
        setUser({...user, first_name_1: firstName1});
    }

    const handleChangeFirstName2 = (event) => {
        let firstName2 = event.target.value;
        setUser({...user, first_name_2: firstName2});
    }

    const handleChangeLastName1 = (event) => {
        let firstLast1 = event.target.value;
        setUser({...user, last_name_1: firstLast1});
    }

    const handleChangeLastName2 = (event) => {
        let firstLast2 = event.target.value;
        setUser({...user, last_name_2: firstLast2});
    }

    const myCustomException = () => {
        setShowError(true);
        setErrorDescription(`No se puede guardar el usuario, por favor verificar todos los datos!`);
        setUser({
            dni: "",
            first_name_1: "",
            first_name_2: "",
            last_name_1: "",
            last_name_2: ""
        })
    }

    const updateGeneralData = () => {
        setUser({
            dni: "",
            first_name_1: "",
            first_name_2: "",
            last_name_1: "",
            last_name_2: ""
        });
        setErrorDescription("Se guarda el usuario exitosamente")
        setIsReturn(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:6001/api/v1/user", {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status)
            .then(response => {
                if(response === 500){
                    throw myCustomException;
                }
                else if(response === 200){
                    updateGeneralData();
                }
                else {
                    throw myCustomException;
                }
            })
            .catch(response => {
                setShowError(true);
                setErrorDescription(`No se puede guardar el usuario, por favor verificar todos los datos!`);
                setUser({
                    dni: "",
                    first_name_1: "",
                    first_name_2: "",
                    last_name_1: "",
                    last_name_2: ""
                })
            })
    }

    const formObject = (
        <form style={styles.formSaveUser} onSubmit={handleSubmit}>
            <div style={styles.titleForm}>Crear nuevo Usuario</div>
            <div style={styles.containerInputs}>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Identificación (DNI) <span style={styles.spanImportant}>*</span>
                    </label>
                    <input 
                        style={styles.inputTypeText} 
                        onChange={handleChangeDni}
                        defaultValue={user.dni}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Primer Nombre <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeFirstName1}
                        defaultValue={user.first_name_1}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Nombre</label>
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeFirstName2}
                        defaultValue={user.first_name_2}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Primer Apellido <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeLastName1}
                        defaultValue={user.last_name_1}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label style={styles.labelTypeText}>Segundo Apellido</label>
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeLastName2}
                        defaultValue={user.last_name_2}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.containerButton}>
                    <div></div>
                    <button 
                        style={styles.buttonSave} 
                        className="btn_save_user">Guardar</button>
                </div>
            </div>
        </form>
    )

    return(
        <div>
            <Navbar
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
                <div style={styles.containerSearchBar}>
                    <SearchBar 
                        placeholder="barra de busqueda deshabilitada"
                        disableBar={true}/>
                </div>
                {
                    showError === true ? (
                        <ErrorCard
                            description={errorDescription}
                            setShowError={setShowError} />
                    ) : (
                        <div style={styles.containerForm}>
                            {
                                isReturn === true ? (
                                    <SuccessCard
                                        description={errorDescription}
                                        setIsReturn={setIsReturn} />
                                ) : (
                                    <div>{formObject}</div>
                                )
                            }
                        </div>
                    )
                }
        </div>
    )
}

export default NewUser;