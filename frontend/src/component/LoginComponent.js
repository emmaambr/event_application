import { React, useState } from 'react'
import { AuthenticationToken } from '../helper/AuthenticationToken';
import axios from 'axios';
import "../css/login.css"

export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        const user = { "username": username, "password": password }
        
        await axios.post("http://localhost:8080/authenticate", user)
        .then(res => {
            if (res.status === 200) {
                const token = res.headers.get("Authorization")
                localStorage.setItem("token", token)
                AuthenticationToken(token);
            }
        })                                            
        await axios.get("http://localhost:8080/user/username?username=" + username)
        .then(res => {
            if (res.status === 200) {
                const token = res.data;
                localStorage.setItem("userId", token)
                window.location.replace("/mypage");
            }
        })
    }

    return (
        <div>
            <div>
                <form className="form-content" onSubmit={login}>
                    <input className="user-input" value={username} placeholder="Användarnamn" onChange={(e) => setUsername(e.target.value)} />

                    <input className="user-input" value={password} placeholder="Lösenord" onChange={(e) => setPassword(e.target.value)} />

                    <button className="btn" type="submit"> OK </button>
                </form>
            </div>
        </div>
    );
}