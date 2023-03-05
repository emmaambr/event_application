import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import RegisterPage from "./page/RegisterPage";

import { AuthenticationToken } from './helper/AuthenticationToken';

const token = localStorage.getItem("token");
if (token) {
  AuthenticationToken(token);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> }/>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route exact path="/register" element={ <RegisterPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;