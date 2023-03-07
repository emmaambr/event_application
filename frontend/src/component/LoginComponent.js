import { React, useState } from 'react'
import { AuthenticationToken } from '../helper/AuthenticationToken';
import axios from 'axios';

export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async (e) => {
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
                <form>
                    <label>
                        <input value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </label>

                    <label>
                        Password:
                        <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <button variant="contained" color="secondary" onClick={handleClick}> Log in </button>
                </form>
            </div>
        </div>
    );
}