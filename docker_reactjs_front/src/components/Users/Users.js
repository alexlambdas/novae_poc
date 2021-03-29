import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";

import styles from "./Styles";
import "../../index.css";

function Users(props){

    const [dni, setDni] = useState("");
    const [users, setUsers] = useState([]);
    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");

    const {openNav, handleOpenNav} = props;

    const handleInputSearch = (event) => {
        setDni(event.target.value);
    }

    const handleSearch = () => {
        let typeFetch = dni.length === 0 ? 0 : 1;
        if(typeFetch === 0){
            fetch("http://localhost:6001/api/v1/user")
                .then(response => response.json())
                .then(response => setUsers(response))
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

    const myCustomException = () => {
        setShowError(true);
        setErrorDescription("No se puede eliminar el usuario, tiene tarjetas de Crédito asociadas!");
    }

    const updateGeneralState = () => {
        setShowError(false);
        fetch("http://localhost:6001/api/v1/user")
            .then(response => response.json())
            .then(response => setUsers(response))
    }

    const handleClickDeleteUser = (dni) => {
        fetch(`http://localhost:6001/api/v1/user/${dni}`, {
            method: 'DELETE'
        })
            .then(response => response.status)
            .then(response => {
                if(response === 500){
                    throw myCustomException;
                }
                if(response === 200){
                    updateGeneralState();
                }
            })
            .catch(response => {
                setShowError(true);
                setErrorDescription("No se puede eliminar el usuario, tiene tarjetas de Crédito asociadas!");
            })
    }

    const handleReset = () => {
        setUsers([]);
        setDni("");
    }

    return(
        <div>
            <Navbar 
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerSearchBar}>
                <SearchBar 
                    placeholder="buscar usuario por identificación DNI"
                    disableBar={false}
                    handleInputSearch={handleInputSearch}
                    handleSearch={handleSearch}
                    handleReset={handleReset}/>
            </div>
            <div style={styles.noteImportant}>
                <span style={styles.spanImportant}>IMPORTANTE*: </span> 
                Si en la barra de busqueda no hay ningun DNI, se buscan todos los usuarios
            </div>
            {
                showError === true ? (
                    <ErrorCard 
                        description={errorDescription}
                        setShowError={setShowError}/>
                ) : (
                    <div style={styles.containerQueryUsers}>
                        <div style={styles.titleTable}>
                            <div style={styles.itemId}>ID de Usuario</div>
                            <div style={styles.itemDni}>DNI de Usuario</div>
                            <div style={styles.itemNames}>NOMBRES de Usuario</div>
                            <div style={styles.itemLastNames}>APELLIDOS de Usuario</div>
                            <div style={styles.itemDelete}>ELINIMAR un Usuario</div>
                        </div>
                        {users.map((user, index) => {
                            return(
                                <div key={index}  style={styles.dataTable}>
                                    <div style={styles.itemId}>{user.id}</div>
                                    <div style={styles.itemDni}>{user.dni}</div>
                                    <div style={styles.itemNames}>{`${user.first_name_1} ${user.first_name_2}`}</div>
                                    <div style={styles.itemLastNames}>{`${user.last_name_1} ${user.last_name_2}`}</div>
                                    <div style={styles.itemDelete}>
                                        <button 
                                        style={styles.btnDeleteUser}
                                        onClick={() => handleClickDeleteUser(user.dni)}>Eliminar</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default Users;