import React from "react";
import './login.css';
import {IonButton, IonInput, IonItem, IonLabel} from "@ionic/react";

const Login = () => {
    return (
        <>
            <div className="login-wrapper">
                <div className="login-inputs">
                    <IonItem>
                        <IonLabel position="floating">E-Mail</IonLabel>
                        <IonInput type="email" inputmode="email" required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Passwort</IonLabel>
                        <IonInput type="password" required/>
                    </IonItem>
                    <IonButton color="primary" expand="block" className="submit-button">Sign In</IonButton>
                </div>
            </div>
        </>
    );
};

export default Login;
