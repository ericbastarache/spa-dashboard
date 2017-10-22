import { USER_REGISTER, USER_LOGIN } from './types';

const API_URL = 'http://localhost:3001/api/v1';

export const createUser = (credentials) => {
    const request = fetch(`${API_URL}/register`, {

    });
    return {
        type: USER_REGISTER,
        payload: request
    }
}

export const fetchUser = (...args) => {
    const request = fetch(`${API_URL}/login`, {
        method: 'POST',
        mode: 'cors'
    }).then(response => {
        let user = response;
        return user;
    });
    return {
        type: USER_LOGIN,
        payload: request
    }
}