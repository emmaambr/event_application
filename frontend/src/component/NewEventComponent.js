import { React, useState } from "react";
//import axios from 'axios';

export default function NewEventComponent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [ageLimit, setAgeLimit] = useState("");
    const [cost, setCost] = useState("");
    const [notification, setNotification] = useState("");
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

        fetch("http://localhost:8080/event?userId=" + userId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                setNotification("Event successfully submitted")
                });
            } setNotification("Ooops, did you forget something?")
        }); 
    }

    return (
        <div>
            <div>
                <form onSubmit={submitEvent}>
                    <input value={title} placeholder="Title" required="true" type="text" onChange={(e) => setTitle(e.target.value)} />
 
                    <input value={description} placeholder="Event description" required="true" type="text" onChange={(e) => setDescription(e.target.value)} />

                    <input value={eventDate} placeholder="YYYY-MM-DDTHH:MM:SS" required="true" type="text" onChange={(e) => setEventDate(e.target.value)} />

                    *<input value={ageLimit} placeholder="Age limit" type="text" onChange={(e) => setAgeLimit(e.target.value)} />
 
                    *<input value={cost} placeholder="cost" type="text" onChange={(e) => setCost(e.target.value)} />

                    <button type="submit"> submit </button>

                    <br/>
                    <p>* = optional</p>
                    <p> { notification } </p>
                </form>
            </div>
        </div>
    );    
}