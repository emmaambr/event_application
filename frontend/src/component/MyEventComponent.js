import { React, useState, useEffect } from "react";

export default function MyEventComponent() {
    const [events, setEvents] = useState([]);
    const [active, setActive] = useState(false);
    const [btnText, setBtnText] = useState("View past events");
    const [title, setTitle] = useState("My future events");
    const [userId] = useState(() => {
        const saved = localStorage.getItem("userId");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    
    useEffect(() => { 
        fetch(`http://localhost:8080/event/filter?userId=${userId}&active=true`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then((result) => {
                setEvents(result);
            }
            )
    }, [])

    async function HandleStatus() { 
        const res = await fetch(`http://localhost:8080/event/filter?userId=${userId}&active=${active}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })  
        const result = await res.json();  
        setEvents(result);
        setActive(current => !current);
        setBtnText(current => !current);
        setTitle(current => !current);
    }

    return (
        <div>
            <h1 className="title"> {title? 'My future events' : 'My past auctions'} </h1>

            <button className="toggleBtn" value={active? false : true} onClick={(ev) => HandleStatus(ev.target.value)}> 
                    {btnText? 'View past events' : 'View future events'} 
            </button>

            {events.sort((a, b) => a.id - b.id).map((event) => {
                return (
                    <div key={event.id}>
                        <div>
                            <span> {event.title} </span> 
                            <span> When: {event.eventDate.toString().substring(2, 10) + " kl." + event.eventDate.toString().substring(11, 16)} </span>
                            <span> {event.description} </span>
                            <span> Cost: {event.cost} </span>
                            <span> Age limit: {event.ageLimit}+ </span>
                        </div>
                    </div>
                );
            })} 
        </div>
    );
}