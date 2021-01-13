
export const GetFriends = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch("https://michaela-motion-deploy.propulsion-learn.ch/backend/api/users/", config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_FRIENDS', payload: data}));
}

