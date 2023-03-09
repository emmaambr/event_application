import React from "react";
import MyEventComponent from "../component/MyEventComponent";
import NewEventComponent from "../component/NewEventComponent";

const MyPage = () => {

    return (
        <div> 
            <NewEventComponent />
            <MyEventComponent />
        </div>
    )
}

export default MyPage;