import { React, useState, useEffect } from "react";

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