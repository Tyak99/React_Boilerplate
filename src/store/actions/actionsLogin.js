import * as actionTypes from "../constant/actionTypes";
import axios from 'axios';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess = (authData) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        authData: authData
    }
}
export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    }
}

export const login = (email, password) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBhdoQQEk5S8g9nuhPOQTB_yGE34sljzeE'
        dispatch(loginStart())
        axios.post(url, authData)
            .then(response => {
                console.log(response.data);
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(loginFailed(error))
            })
    }
}
