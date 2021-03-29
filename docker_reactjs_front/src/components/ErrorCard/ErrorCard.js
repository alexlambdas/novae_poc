import React from "react";

import styles from "./Styles";
import "../../index.css";

function ErrorCard(props){

    const { setShowError, description} = props;

    const handleClick = () => {
        setShowError(false);
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
                    className="btn_error_credit_card"
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

export default ErrorCard;