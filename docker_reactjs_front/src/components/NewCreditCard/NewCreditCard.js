import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";
import SuccessCard from "../SuccessCard/SuccessCard";

import styles from "./Styles";
import "../../index.css";

function NewCreditCard(props){

    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");
    const [isReturn, setIsReturn] = useState(false);
    const [card, setCard] = useState({
        card_number: "",
        card_type: "",
        dni_user: ""
    });
    const { openNav, handleOpenNav } = props;

    const handleChangeCardNumber = (event) => {
        let card_number = event.target.value;
        setCard({...card, card_number: card_number});
    }

    const handleChangeCardType = (event) => {
        let card_type = event.target.value;
        setCard({...card, card_type: card_type});
    }

    const handleChangeDni = (event) => {
        let dni_user = event.target.value;
        setCard({...card, dni_user: dni_user});
    }

    const myCustomException = () => {
        setShowError(true);
        setErrorDescription(`No se puede guardar la tarjeta de crédito, por favor verificar todos los datos!`);
        setCard({
            card_number: "",
            card_type: "",
            dni_user: ""
        })
    }

    const updateGeneralData = () => {
        setCard({
            card_number: "",
            card_type: "",
            dni_user: ""
        });
        setErrorDescription("Se guarda la tarjeta de crédito exitosamente")
        setIsReturn(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:6001/api/v1/card", {
            method: 'POST',
            body: JSON.stringify(card),
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
                setErrorDescription(`No se puede la tarjeta de crédito, por favor verificar todos los datos!`);
                setCard({
                    card_number: "",
                    card_type: "",
                    dni_user: ""
                })
            })
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
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeDni}
                        defaultValue={card.dni_user} 
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Tipo de tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText} 
                        onChange={handleChangeCardType}
                        defaultValue={card.card_type} 
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Numero de Tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText}
                        onChange={handleChangeCardNumber}
                        defaultValue={card.card_number}  
                        className="input_save_user" 
                        type="text" />
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

export default NewCreditCard;