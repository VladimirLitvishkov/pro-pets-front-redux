import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const storage = localStorage.getItem('Authorization') ? JSON.parse(localStorage.getItem('Authorization')).user : undefined;
const initialState = {
    state:{
        outside: storage ? 'work' : 'intro',
        inside: 'home'
    },
    user: {
       login: storage ? storage.login : '',
       name: storage ? storage.name : '',
       avatar: storage ? storage.avatar : 'https://www.gravatar.com/avatar/0?d=mp',
       phone: storage ? storage.phone : '000-0000000',
       roles: storage ? storage.roles : []
    },
    posts: [],
    lostFound: {
        author: '',
        type: '',
        location: {
            country: '',
            city: '',
            street: '',
            building: 0,
            latitude: -1,
            longitude: -1
        },
        photos: [],
        tags: [],
        datePost: 'time'
    },
    twit: {
        author: '',
        content: '',
        imagesUrl: [],
        postDate: 'time'
    }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;