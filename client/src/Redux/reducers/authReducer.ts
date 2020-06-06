import {AuthStateType} from "../../types/types";
import {SET_AUTH_DATA} from "../actions/authActions";

let initialState = {
    token: null,
    userId: null,
    isAuth: false,
};

export const authReducer = (state: AuthStateType = initialState, action: { type: any; payload: any }): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};