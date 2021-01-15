import baseUrl from '../../Helpers/BaseUrl';

export const UserPosts = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/social/posts/user/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'USER_POSTS', payload: data}));
}