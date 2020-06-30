export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';
export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const CHANGE_IMAGESURL = 'CHANGE_IMAGESURL';
export const CHANGE_POSTDATE = 'CHANGE_POSTDATE';
export const CHANGE_TWIT_ALL = 'CHANGE_TWIT_ALL';

export const changeAuthor = (value) => ({
    type: CHANGE_AUTHOR,
    payload: value
});

export const changeContent = (value) => ({
    type: CHANGE_CONTENT,
    payload: value
});

export const changeImagesUrl = (value) => ({
    type: CHANGE_IMAGESURL,
    payload: value
});

export const changePostDate = (value) => ({
    type: CHANGE_POSTDATE,
    payload: value
});

export const changeAllTwit = (value) => ({
    type: CHANGE_TWIT_ALL,
    payload: value
});