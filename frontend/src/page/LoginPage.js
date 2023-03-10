import React from "react";
import NavComponent from "../component/NavComponent";
import LoginComponent from "../component/LoginComponent";
import "../css/loginPage.css"

const LoginPage = () => {
    return (
        <div>
            <NavComponent />

            <div className="login-page-content">
                <h1> Logga in </h1>
                <a href="/register"> Eller klicka här för att registrera ett konto </a>            
            </div>

            <LoginComponent />
        </div>
    );
};

export default LoginPage;