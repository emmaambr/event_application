import axios from 'axios';

export const AuthenticationToken = token => {
    if (token) 
        axios.defaults.headers.common["Authorization"] = `${token}`;
    
    else
        delete axios.defaults.headers.common["Authorization"];
}