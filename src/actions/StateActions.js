export const CHANGE_STATE_OUTSIDE = 'CHANGE_STATE_OUTSIDE';
export const CHANGE_STATE_INSIDE = 'CHANGE_STATE_INSIDE';

export const changeStateOutside = (value) => ({
    type: CHANGE_STATE_OUTSIDE,
    payload: value
});

export const changeStateInside = (value) => ({
    type: CHANGE_STATE_INSIDE,
    payload: value
});
