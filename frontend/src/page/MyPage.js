import React from "react";
import NavComponent from "../component/NavComponent";
import MyEventComponent from "../component/MyEventComponent";
import "../css/myPage.css";

const MyPage = () => {
    return (
        <div> 
            <NavComponent /> <a className="new-event-link" href="/newevent"> Nytt event + </a>
            <MyEventComponent />
        </div>
    )
}

export default MyPage;