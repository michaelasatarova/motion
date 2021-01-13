import baseUrl from '../../Helpers/BaseUrl';

export const GetPosts = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/social/posts/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_POSTS', payload: data}));
}