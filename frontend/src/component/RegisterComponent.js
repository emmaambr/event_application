import { React, useState } from 'react'
import { AuthenticationToken } from '../helper/AuthenticationToken';
import axios from 'axios';
import "../css/login.css"

export default function RegisterComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitUser = (e) => {
        e.preventDefault()
        const user = { "username": username, "password": password, "email": email, "name": name}

        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(async () => {
            const user = { "username": username, "password": password }
            await axios.post("http://localhost:8080/authenticate", user)
                .then(res => {
                    if (res.status === 200) {
                        const token = res.headers.get("Authorization")
                        localStorage.setItem("userId", token)
                        AuthenticationToken(token);
                    }
                })
            window.location.replace("/login");
        })
    }

    return (
        <div>
            <div>
                <form className='form-content' onSubmit={submitUser}>
                    <input className="user-input" value={username} placeholder="Användarnamn" required={true} onChange={(e) => setUsername(e.target.value)} />

                    <input className="user-input" value={name} placeholder="Namn" required={true} onChange={(e) => setName(e.target.value)} />

                    <input className="user-input" value={password} placeholder="Lösenord" required={true} onChange={(e) => setPassword(e.target.value)} />

                    <input className="user-input" value={email} placeholder="Email" required={true} onChange={(e) => setEmail(e.target.value)} />

                    <button className="btn" type="submitUser"> OK </button>
                </form>
            </div>
        </div>
    );
}