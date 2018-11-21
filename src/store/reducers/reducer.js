import * as actionTypes from "../constant/actionTypes";
const initialState = {
    expenses: [
        {
            name: "food",
            amount: 100,
            id: Math.random()
        },
        {
            name: "tfare",
            amount: 200,
            id: Math.random()
        }
    ],
    isAuthenticated: false

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: 
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state

    }
}