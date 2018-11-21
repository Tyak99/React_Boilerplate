import * as actionTypes from "../constant/actionTypes";
import axios from "axios"


export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    }
}

export const registerSuccess = (authData) => {
   return {
        type: actionTypes.REGISTER_SUCCESS,
        authData: authData
    }
} 

export const registerFailed = (error) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        error: error
    }
}

export const register = (email, password) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const apiUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBhdoQQEk5S8g9nuhPOQTB_yGE34sljzeE'
        dispatch(registerStart())
        axios.post(apiUrl, authData)
            .then(response => {
                console.log(response.data);
                dispatch(registerSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(registerFailed(error))
            })
    }
}
