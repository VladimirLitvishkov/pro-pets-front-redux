import {combineReducers} from "redux";
import state from "./StateReducer";
import user from "./UserReducer";
import posts from "./PostsReducer";
import twit from "./TwitReducer";
import lostFound from "./LostFoundReducer";


export default combineReducers({state, user, posts, twit, lostFound});