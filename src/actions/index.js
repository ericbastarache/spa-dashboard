import { USER_REGISTER, USER_LOGIN } from './types';

const API_URL = 'http://localhost:3001/api/v1';

export const createUser = (credentials) => {
    let headers = new Headers({
        'Access-Control-Allow-Origin': '*'
    });
    const request = fetch(`${API_URL}/register`, {
        method: 'POST',
        headers,
        mode: 'cors'
    });
    return {
        type: USER_REGISTER,
        payload: request
    }
}

export const fetchUser = (...args) => {
    let headers = new Headers({
        'Access-Control-Allow-Origin': '*'
    });
    const request = fetch(`${API_URL}/login`, {
        method: 'POST',
        headers,
        body: {
            "username" : args[0],
            "password" : args[1]
        },
        mode: 'no-cors'
    }).then(response => {
        let user = response.user;
        return user;
    });
    return {
        type: USER_LOGIN,
        payload: request.user
    }
}