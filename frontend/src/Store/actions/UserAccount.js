
export const UserAccount = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch("https://motion.propulsion-home.ch/backend/api/users/me/", config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'USER_ACCOUNT', payload: data}));
}