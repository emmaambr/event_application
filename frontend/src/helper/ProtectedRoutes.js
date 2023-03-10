import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    function hasJWT() {
        let flag = localStorage.getItem("token");
        return flag
    }

    return (
        hasJWT() ? <Outlet/> : <Navigate to="/login" /> 
    );
};

export default PrivateRoutes;
