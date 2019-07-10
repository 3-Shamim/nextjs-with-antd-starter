export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_REQUEFAILED";


// export const UserContextBinder = (context) => {

//     const [state, dispatch] = context;

//     return {
//         ...state,
//         dispatch,
//         addUser: (user) => addUser(dispatch, user)
//     }
// }


/* User Actions */
export const addUser = (dispatch, user) => {
    dispatch({type: ADD_USER_REQUEST});
    dispatch({type: ADD_USER_SUCCESS, payload: user});
    dispatch({type: ADD_USER_FAILED});
};
