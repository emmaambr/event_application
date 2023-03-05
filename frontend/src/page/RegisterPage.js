import React from "react";
import NavComponent from "../component/NavComponent";
import RegisterComponent from "../component/RegisterComponent";

const RegisterPage = () => {
    return (
        <div>
            <NavComponent />
            <div>
                <h1> Create an account! </h1>
                <RegisterComponent />               
            </div>

            <div>
                <a href="/login"> Click here to login</a>
            </div>
        </div>
    );
};

export default RegisterPage;