export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_ROLES = 'CHANGE_ROLES';
export const CHANGE_PHONE = 'CHANGE_PHONE';
export const CHANGE_LOGIN = 'CHANGE_LOGIN';

export const changeAvatar = (value) => ({
    type: CHANGE_AVATAR,
    payload: value
});

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
});

export const changeRoles = (value) => ({
    type: CHANGE_ROLES,
    payload: value
});

export const changePhone = (value) => ({
    type: CHANGE_PHONE,
    payload: value
});

export const changeLogin = (value) => ({
    type: CHANGE_LOGIN,
    payload: value
});