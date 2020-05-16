import {
    CHANGE_AUTHOR,
    CHANGE_DATEPOST,
    CHANGE_LOCATION,
    CHANGE_PHOTOS,
    CHANGE_TAGS,
    CHANGE_TYPE
} from "../actions/LostFoundActions";


function lostFound(state = {}, action) {
    switch (action.type) {
        case CHANGE_AUTHOR:
            return {...state, author: action.payload ? action.payload : state.author};
        case CHANGE_TYPE:
            return {...state, type: action.payload ? action.payload : state.type};
        case CHANGE_LOCATION:
            return {...state, location: action.payload ? action.payload : state.location};
        case CHANGE_PHOTOS:
            return {...state, photos: action.payload ? action.payload : state.photos};
        case CHANGE_TAGS:
            return {...state, tags: action.payload ? action.payload : state.tags};
        case CHANGE_DATEPOST:
            return {...state, datePost: action.payload ? action.payload : state.datePost};
        default:
            return state;
    }
}

export default lostFound;