import React from "react";

import styles from "./Styles";
import "../../index.css";

function SuccessCard(props){

    const { setIsReturn, description} = props;

    const handleClick = () => {
        setIsReturn(false);
    }

    const formObject = (
        <div style={styles.formSaveUser}>
            <div style={styles.titleForm}>Operación Exitosa !</div>
            <div style={styles.containerInputs}>
                {description}
            </div>
            <div style={styles.containerButton}>
                <button 
                    style={styles.buttonSave} 
                    className="btn_success_credit_card"
                    onClick={handleClick}>
                        Regresar
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <div style={styles.containerForm}>
                {formObject}
            </div>
        </div>
    )
}

export default SuccessCard;