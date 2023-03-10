import { React, useState, useEffect } from "react";
import "../css/event.css"

export default function ActiveEventComponent() {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/events/active", {
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

    return (
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
    );
}