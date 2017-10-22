import { USER_LOGIN, USER_REGISTER } from '../actions/types';

const INITIAL_STATE = {
    user: null,
    newUser: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload.user
            }
        case USER_REGISTER: 
            return {
                ...state,
                newUser: action.payload.user
            }
        default:
            return state
    }
}