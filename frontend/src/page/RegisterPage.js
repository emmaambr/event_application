import React from "react";
import NavComponent from "../component/NavComponent";
import RegisterComponent from "../component/RegisterComponent";
import "../css/registerPage.css"

const RegisterPage = () => {
    return (
        <div>
            <NavComponent />

            <h1 className="reg-title"> Skapa ett konto </h1>

            <RegisterComponent />               
        </div>
    );
};

export default RegisterPage;