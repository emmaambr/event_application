import { React, useState, useEffect } from "react";

export default function MyEventComponent() {
    const [events, setEvents] = useState([]);
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

    return (
        <div>
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