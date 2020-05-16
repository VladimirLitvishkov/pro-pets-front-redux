import {CHANGE_STATE_INSIDE, CHANGE_STATE_OUTSIDE} from "../actions/StateActions";


function state(state = {}, action) {
    switch (action.type) {
        case CHANGE_STATE_OUTSIDE:
            return {...state, outside: action.payload ? action.payload : state.outside};
        case CHANGE_STATE_INSIDE:
            return {...state, inside: action.payload ? action.payload : state.inside};
        default:
            return state;
    }
}

export default state;