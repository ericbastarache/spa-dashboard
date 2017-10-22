export const USER_LOGIN = 'USER_LOGIN';
export const USER_REGISTER = 'USER_REGISTER';

const API_URL = 'http://localhost:3001/api';

export const createUser = () => {
    const request = fetch(`${API_URL}/register`, {

    });
    return {
        type: USER_REGISTER,
        payload: request
    }
}

export const fetchUser = () => {
    const request = fetch(`${API_URL}/login`, {

    });
    return {
        type: USER_LOGIN,
        payload: request
    }
}