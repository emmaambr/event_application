import * as React from 'react';

const token = localStorage.getItem("token");

export default function NavComponent() {
    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("userToken")
    }

    let loggedIn;
    if (token) {
        loggedIn = <a href="/" onClick={logOut}> Log out </a>
    } else {
        loggedIn = <a href="/login"> Login / Register </a>
    }

    let myPage;
    if (token) {
        myPage = <a href="/mypage"> My page </a>
    }

    return (
        <div>
            {myPage}                   
            {loggedIn}
        </div>
    );
}