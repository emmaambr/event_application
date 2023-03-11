import * as React from 'react';
import "../css/navbar.css"

const token = localStorage.getItem("token");

export default function NavComponent() {
    let loggedIn = token ? <a href="/" onClick={logOut}> Logga ut </a> : <a href="/login"> Logga in </a>;
    let myPage = token && <a href="/mypage"> Mina sidor </a>;
    
    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId")
    }
  
    return (
        <div className="navbar">
            <a className="" href="/"> Start </a> | {myPage} | {loggedIn}
        </div>
    );
}