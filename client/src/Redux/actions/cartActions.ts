import {CartItemType} from "../../types/types";

export const INCREASE = "cart/INCREASE";
export const DECREASE = "cart/DECREASE";
export const ADD = "cart/ADD";
export const REMOVE = "cart/REMOVE";
export const GET_TOTAL = "cart/GET_TOTAL";

type addToCartActionType = {
    type: typeof ADD,
    payload: CartItemType
}

export const addToCart = (item: CartItemType):addToCartActionType => ({type: ADD, payload: item});