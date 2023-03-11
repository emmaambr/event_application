import { React, useState } from "react";
import "../css/eventForm.css"

export default function NewEventComponent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [ageLimit, setAgeLimit] = useState("");
    const [cost, setCost] = useState("");
    const [userId] = useState(() => {
        const saved = localStorage.getItem("userId");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    const submitEvent = (e) => {
        e.preventDefault()
     
        const event = { 
            "title": title, 
            "description": description, 
            "eventDate": eventDate, 
            "ageLimit": ageLimit, 
            "cost": cost 
        }

        fetch("http://localhost:8080/events?userId=" + userId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                });
                window.location.replace("/mypage");
            }
        }); 
    }

    return (
        <div>
            <div>
                <form className="event-form" onSubmit={submitEvent}>
                    <input className="event-input" value={title} placeholder="Rubrik" required={true} type="text" onChange={(e) => setTitle(e.target.value)} />

                    <input className="event-input" value={eventDate} required={true} type="datetime-local" onChange={(e) => setEventDate(e.target.value)} />
  
                    <textarea className="user-input" value={description} placeholder="Beskrivning" required={true} type="text" onChange={(e) => setDescription(e.target.value)} />

                    <input className="event-input" value={ageLimit} placeholder="Åldersgräns" type="text" onChange={(e) => setAgeLimit(e.target.value)} />
 
                    <input className="event-input" value={cost} placeholder="Pris / pp" required={true} type="text" onChange={(e) => setCost(e.target.value)} />

                    <button className="btn" type="submit"> OK </button>
                </form>
            </div>
        </div>
    );    
}