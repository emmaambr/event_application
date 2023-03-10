import * as React from 'react';
import "../css/navbar.css"

const token = localStorage.getItem("token");

export default function NavComponent() {
    let loggedIn = token ? <a href="/" onClick={logOut}> Log out </a> : <a href="/login"> Login </a>;
    let myPage = token && <a href="/mypage"> My page </a>;
    
    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId")
    }
  
    return (
        <div className="navbar">
           {myPage} | {loggedIn}
        </div>
    );
}