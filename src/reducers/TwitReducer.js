import {CHANGE_AUTHOR, CHANGE_CONTENT, CHANGE_IMAGESURL, CHANGE_POSTDATE} from "../actions/TwitActions";


function twit(state = {}, action) {
    switch (action.type) {
        case CHANGE_AUTHOR:
            return {...state, author: action.payload ? action.payload : state.author};
        case CHANGE_CONTENT:
            return {...state, content: action.payload ? action.payload : state.content};
        case CHANGE_IMAGESURL:
            return {...state, imagesUrl: action.payload ? action.payload : state.imagesUrl};
        case CHANGE_POSTDATE:
            return {...state, postDate: action.payload ? action.payload : state.postDate};
        default:
            return state;
    }
}

export default twit;