import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import ErrorCard from "../ErrorCard/ErrorCard";

import styles from "./Styles";
import "../../index.css";

function CreditCards(props){

    const [cardNumber, setCardNumber] = useState("");
    const [cards, setCards] = useState([]);
    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");

    const {openNav, handleOpenNav} = props;

    const handleInputSearch = (event) => {
        setCardNumber(event.target.value);
    }

    const myCustomException = () => {
        setShowError(true);
        setErrorDescription("No se puede eliminar la tarjeta de crédito!");
    }

    const updateGeneralState = () => {
        setShowError(false);
        fetch("http://localhost:6001/api/v1/card")
            .then(response => response.json())
            .then(response => setCards(response))
    }

    const handleSearch = () => {
        let typeFetch = cardNumber.length === 0 ? 0 : 1;
        if(typeFetch === 0){
            fetch("http://localhost:6001/api/v1/card")
                .then(response => response.json())
                .then(response => setCards(response))
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
                        setErrorDescription(`No existe tarjeta de credito con el numero ${cardNumber}`);
                    })
            }
           
        }
    }

    const handleClickDeleteCard = (cardNumber) => {
        fetch(`http://localhost:6001/api/v1/card/${cardNumber}`, {
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
                setErrorDescription("No se puede eliminar la tarjeta de Crédito!");
            })
    }

    const handleReset = () => {
        setCardNumber("");
        setCards([]);
    }


    return(
        <div>
            <Navbar 
                openNav={openNav}
                handleOpenNav={handleOpenNav} />
            <div style={styles.containerSearchBar}>
                <SearchBar 
                    placeholder="buscar tarjeta por número"
                    disableBar={false}
                    handleInputSearch={handleInputSearch}
                    handleSearch={handleSearch}
                    handleReset={handleReset}/>
            </div>
            <div style={styles.noteImportant}>
                <span style={styles.spanImportant}>IMPORTANTE*: </span> 
                Si en la barra no hay # de tarjeta , se buscan todas las Tarjetas
            </div>
            {
                showError === true ? (
                    <ErrorCard 
                        description={errorDescription}
                        setShowError={setShowError}/>
                ) : (
                    <div style={styles.containerQueryUsers}>
                        <div style={styles.titleTable}>
                            <div style={styles.itemId}>ID de Tarjeta</div>
                            <div style={styles.itemDni}>NÚMERO de Tarjeta</div>
                            <div style={styles.itemNames}>TIPO de Tarjeta</div>
                            <div style={styles.itemLastNames}>DNI de Usuario</div>
                            <div style={styles.itemDelete}>ELINIMAR un Usuario</div>
                        </div>
                        {cards.map((card, index) => {
                            return(
                                <div key={index}  style={styles.dataTable}>
                                    <div style={styles.itemId}>{card.id}</div>
                                    <div style={styles.itemDni}>{card.card_number}</div>
                                    <div style={styles.itemNames}>{card.card_type}</div>
                                    <div style={styles.itemLastNames}>{card.dni_user}</div>
                                    <div style={styles.itemDelete}>
                                        <button 
                                        style={styles.btnDeleteUser}
                                        onClick={() => handleClickDeleteCard(card.card_number)}>Eliminar</button>
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

export default CreditCards;