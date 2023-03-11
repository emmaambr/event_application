import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import RegisterPage from "./page/RegisterPage";
import MyPage from "./page/MyPage";
import NewEvent from "./page/NewEvent";

import PrivateRoutes from './helper/ProtectedRoutes';
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
        <Route element={ <PrivateRoutes /> }>
          <Route exact path="/mypage" element={ <MyPage /> }/>
          <Route exact path="/newevent" element={ <NewEvent /> }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;