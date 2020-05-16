export const CHANGE_POSTS = 'CHANGE_POSTS';

export const changePosts = (value) => ({
    type: CHANGE_POSTS,
    payload: value
});

export const requestPosts = (page, size, url) => {
    return (dispatch) => {
        let controller = new AbortController();
        let auth = JSON.parse(localStorage.getItem('Authorization')).xToken;
        let fullURL = `${url}?page=${page}&size=${size}`;
        fetch(fullURL, {
            headers: {
                'X-token': auth,
                signal: new AbortController().signal
            }
        })
            .then(resp => {
                auth = resp.headers.get('X-token');
                return resp.ok ? resp.json() : controller.abort();
            })
            .then(data => {
                dispatch(changePosts(data.content));
                localStorage.setItem('Authorization', JSON.stringify({...JSON.parse(localStorage.getItem('Authorization')), xToken: auth}));
            })
            .catch(e => console.log(e));
    }
};