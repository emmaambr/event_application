import { React, useState } from 'react'
import { AuthenticationToken } from '../helper/AuthenticationToken';
import axios from 'axios';

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
                <form onSubmit={submitUser}>
                    <label>
                        Username:
                        <input value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>

                    <label>
                        Name:
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label>
                        Password:
                        <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <label>
                        Email:
                        <input vvalue={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <button type="submitUser"> Register </button>
                </form>
            </div>
        </div>
    );
}