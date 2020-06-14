import {CartItemType} from "../../types/types";

export const SET_ITEMS = "cart/SET_ITEMS";
export const INCREASE_COUNT = "cart/INCREASE_COUNT";
export const DECREASE_COUNT = "cart/DECREASE_COUNT";
export const ADD = "cart/ADD";
export const REMOVE = "cart/REMOVE";
export const GET_TOTAL_PRICE = "cart/GET_TOTAL_PRICE";

type setItemsActionType = {type: typeof SET_ITEMS, payload: Array<CartItemType>}
type addToCartActionType = {type: typeof ADD, payload: CartItemType}
type increaseActionType = {type: typeof INCREASE_COUNT, payload: number}
type decreaseActionType = {type: typeof DECREASE_COUNT, payload: number}
type getTotalPriceActionType = {type: typeof GET_TOTAL_PRICE, payload: number}
type removeFromCartType = {type: typeof REMOVE, payload: number}


export const setItems = (items: Array<CartItemType>):setItemsActionType => ({type: SET_ITEMS, payload: items});
export const addToCart = (item: CartItemType):addToCartActionType => ({type: ADD, payload: item});
export const increaseCount = (id:number):increaseActionType => ({type: INCREASE_COUNT, payload: id});
export const decreaseCount = (id:number):decreaseActionType => ({type: DECREASE_COUNT, payload: id});
export const getTotalPrice = (id:number):getTotalPriceActionType => ({type: GET_TOTAL_PRICE, payload: id});
export const removeFromCart = (id:number):removeFromCartType => ({type: REMOVE, payload: id});
