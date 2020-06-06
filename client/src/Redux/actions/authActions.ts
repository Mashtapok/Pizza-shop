import {AuthStateType} from "../../types/types";

export const SET_AUTH_DATA = "cart/SET_AUTH_DATA";

type setAuthDataActionType = {
    type: typeof SET_AUTH_DATA,
    payload: AuthStateType
}

export const setAuthData = (authData: AuthStateType):setAuthDataActionType => ({type: SET_AUTH_DATA, payload: authData});