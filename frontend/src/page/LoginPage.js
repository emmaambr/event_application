import React from "react";
import NavComponent from "../component/NavComponent";
import LoginComponent from "../component/LoginComponent";

const LoginPage = () => {
    return (
        <div>
            <NavComponent />

            <div>
                <h1> Log in to your account </h1>
                <LoginComponent />            
            </div>
       
            <div> 
                <div>
                    <a href="/register"> Click here to register </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;