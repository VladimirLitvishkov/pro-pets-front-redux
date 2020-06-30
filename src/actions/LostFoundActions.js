export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const CHANGE_PHOTOS = 'CHANGE_PHOTOS';
export const CHANGE_TAGS = 'CHANGE_TAGS';
export const CHANGE_DATEPOST = 'CHANGE_DATEPOST';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGE_LF_ALL = 'CHANGE_ALL';

export const changeAuthor = (value) => ({
    type: CHANGE_AUTHOR,
    payload: value
});

export const changeType = (value) => ({
    type: CHANGE_TYPE,
    payload: value
});

export const changePhotos = (value) => ({
    type: CHANGE_PHOTOS,
    payload: value
});

export const changeTags = (value) => ({
    type: CHANGE_TAGS,
    payload: value
});

export const changeDatePost = (value) => ({
    type: CHANGE_DATEPOST,
    payload: value
});

export const changeLocation = (value) => ({
    type: CHANGE_LOCATION,
    payload: value
});

export const changeLostFoundPost = (value) => ({
    type: CHANGE_LF_ALL,
    payload: value
});