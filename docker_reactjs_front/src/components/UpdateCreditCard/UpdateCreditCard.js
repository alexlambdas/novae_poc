import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";

import styles from "./Styles";
import "../../index.css";

function UpdateCreditCard(props){

    const [cardNumber, setCardNumber] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");
    const [cards, setCards] = useState([{
        card_number: "",
        card_type: "",
        dni_user: ""
    }]);

    const { openNav, handleOpenNav } = props;

    const handleInputSearch = (event) => {
        setCardNumber(event.target.value);
    }

    const handleSearch = () => {
        let typeFetch = cardNumber.length === 0 ? 0 : 1;
        if(typeFetch === 0){
            setShowError(true);
            setErrorDescription(`Se debe ingresar un # de Tarjeta para buscar!`);
        }
        if(typeFetch === 1){
            if(isNaN(parseInt(cardNumber, 10))){
                setShowError(true);
                setErrorDescription(`El valor de busqueda debe ser solo númerico`);
            }
            else {
                fetch(`http://localhost:6001/api/v1/card/${cardNumber}`)
                    .then(response => response.json())
                    .then(response => setCards([{...response}]))
                    .catch(response => {
                        setShowError(true);
                        setErrorDescription(`No existe una tarjeta de crédito con el # ${cardNumber}`);
                    })
            }
           
        }
    }

    const handleReset = () => {
        setCards([{
            card_number: "",
            card_type: "",
            dni_user: ""
        }]);
        setCardNumber("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowError(true);
        setErrorDescription(`Aun no esta implementada la funcionalidad de actualizar una tarjeta de crédito`);
    }

    const formObject = (
        <form style={styles.formSaveUser} onSubmit={handleSubmit}>
            <div style={styles.titleForm}>Actualizar Tarjeta de Crédito</div>
            <div style={styles.containerInputs}>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Identificación (DNI) <span style={styles.spanImportant}>*</span>
                    </label>
                    <input 
                        style={styles.inputTypeText}
                        defaultValue={cards[0].dni_user} 
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Tipo de tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText} 
                        defaultValue={cards[0].card_type}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.inputDataUser}>
                    <label
                        style={styles.labelTypeText}>
                        Numero de Tarjeta <span style={styles.spanImportant}>*</span></label>
                    <input 
                        style={styles.inputTypeText}
                        defaultValue={cards[0].card_number}
                        className="input_save_user" 
                        type="text" />
                </div>
                <div style={styles.containerButton}>
                    <div></div>
                    <button 
                        style={styles.buttonSave} 
                        className="btn_update_credit_card">Actualizar</button>
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
                    placeholder="buscar tarjeta por Número"
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

export default UpdateCreditCard;