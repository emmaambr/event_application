import { React, useState, useEffect } from "react";
import "../css/event.css"

export default function MyEventComponent() {
    const [events, setEvents] = useState([]);
    const [active, setActive] = useState(false);
    const [btnText, setBtnText] = useState("View past events");
    const [title, setTitle] = useState("My upcoming events");
    const [userId] = useState(() => {
        const saved = localStorage.getItem("userId");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    
    useEffect(() => { 
        fetch(`http://localhost:8080/events/filter?userId=${userId}&active=true`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then((result) => {
            setEvents(result);
        })
    }, [])

    async function toggleActiveEvents() { 
        const res = await fetch(`http://localhost:8080/events/filter?userId=${userId}&active=${active}`, {
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
            <h1 className="title"> {title? 'My upcoming events' : 'My past auctions'} </h1>

            <button className="toggleBtn" value={active? false : true} onClick={() => toggleActiveEvents()}> 
                    {btnText? 'View past events' : 'View upcoming events'} 
            </button>

            <div className="event-container">
                {events.sort((a, b) => a.id - b.id).map((event) => {
                    return (
                        <div key={event.id}>
                            <div className="event"> 
                                <div className="title-content"> 
                                    <span className="title"> {event.title} </span> 
                                    <span> {event.eventDate.toString().substring(0, 10) + " kl." + event.eventDate.toString().substring(11, 16)} </span>
                                </div>

                                <div className="dropdown-content"> 
                                    <section className="description"> {event.description} </section> 
                                    <span className="cost"> Pris: {event.cost} kr/pp </span>
                                    <span> Åldersgräns: {event.ageLimit}+ </span>
                                </div>
                            </div>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
}