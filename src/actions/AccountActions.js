import {changeStateOutside} from "./StateActions";
import {changeAvatar, changeLogin, changeName, changePhone, changeRoles} from "./UserActions";
import store from "../store/AppStore";


export const login = (url, auth) => {
    return (dispatch) => {
        const init = {
            method: "POST",
            headers: {
                Authorization: auth,
                // signal: new AbortController().signal
            }
        };
        let errorMsg = 'Wrong login or password';
        request(dispatch, url, init, errorMsg);
    }
};

export const registration = (url, dto) => {
    return (dispatch) => {
        const init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        };
        let errorMsg = 'Something wrong';
        request(dispatch, url, init, errorMsg);
    }
};

function request(dispatch, url, init, errorMsg) {
    let controller = new AbortController();
    let xToken;
    fetch(url, init)
        .then(resp => {
            xToken = resp.headers.get('X-token');
            return resp.ok ? resp.json() : controller.abort();
        })
        .then(data => {
            dispatch(changeLogin(data.email));
            dispatch(changeName(data.name));
            dispatch(changePhone(data.phone));
            dispatch(changeRoles(data.roles));
            dispatch(changeAvatar(data.avatar));
            localStorage.setItem('Authorization', JSON.stringify({xToken, user: store.getState().user}));
            dispatch(changeStateOutside('work'));
        })
        .catch(e => alert(errorMsg));
}