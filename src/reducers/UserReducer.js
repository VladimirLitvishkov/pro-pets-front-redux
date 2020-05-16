import {CHANGE_AVATAR, CHANGE_LOGIN, CHANGE_NAME, CHANGE_PHONE, CHANGE_ROLES} from "../actions/UserActions";


function user(state = {}, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload ? action.payload : state.name};
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload ? action.payload : state.avatar};
        case CHANGE_PHONE:
            return {...state, phone: action.payload ? action.payload : state.phone};
        case CHANGE_ROLES:
            return {...state, roles: action.payload ? action.payload : state.roles};
        case CHANGE_LOGIN:
            return {...state, login: action.payload ? action.payload : state.login};
        default:
            return state;
    }
}

export default user;