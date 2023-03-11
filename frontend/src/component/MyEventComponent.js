import { React, useState, useEffect } from "react";
import "../css/event.css"

export default function MyEventComponent() {
    const [events, setEvents] = useState([]);
    const [active, setActive] = useState(false);
    const [btnText, setBtnText] = useState("Mina avslutade event");
    const [title, setTitle] = useState("Mina pågående event");
    
    useEffect(() => { 
        const userId = localStorage.getItem('userId');
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
        const userId = localStorage.getItem('userId');
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
        <div className="my-event-container">
            <div className="center-partial">
                <h1 className="event-title"> {title? 'Mina pågående event' : 'Mina avslutade event'} </h1>

                <button className="toggleBtn" value={active? false : true} onClick={() => toggleActiveEvents()}> 
                        {btnText? 'Visa avslutade event' : 'Visa pågående event'} 
                </button>
            </div>
        
            <div className="event-content">
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