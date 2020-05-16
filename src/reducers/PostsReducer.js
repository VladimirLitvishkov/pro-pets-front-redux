import {CHANGE_POSTS} from "../actions/PostsActions";


function posts(state = [], action) {
    switch (action.type) {
        case CHANGE_POSTS:
            return action.payload ? action.payload : state;
        default:
            return state;

    }
}

export default posts;