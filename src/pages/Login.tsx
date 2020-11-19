import React from "react";
import './login.css';
import { IonButton } from "@ionic/react";

const Login = () => {
    return (
        <>
            <div className="login-wrapper">
                <h1>Login with Google</h1>
                <IonButton color="danger" expand="block">Block Button</IonButton>
            </div>
        </>
    );
};

export default Login;
