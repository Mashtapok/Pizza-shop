import {INCREASE_COUNT, ADD, DECREASE_COUNT, SET_ITEMS, GET_TOTAL_PRICE} from "../actions/cartActions";
import {CartItemType} from "../../types/types";
import {act} from "react-dom/test-utils";

let initialState = {
    items: [] as Array<CartItemType>,
    totalPrice: 0 as number
};

type CartStateType = typeof initialState

export const cartReducer = (state: CartStateType = initialState, action: { type: any; payload: any }): CartStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return {...state, items: action.payload};
        case ADD:
            const sameItem = state.items.find(item => item.id === action.payload.id);
            debugger
            return {...state, items: sameItem
                ? state.items.map(item => item === sameItem ? {...item, count: item.count + action.payload.count} : item)
                :  [...state.items, action.payload]
                };

        case INCREASE_COUNT:
            return {
                ...state,
                items: state.items.map(item => {
                        if (item.id === action.payload) {
                            return {...item, count: ++item.count}
                        }
                        return item
                    }
                )
            };
        case DECREASE_COUNT:
            return {
                ...state,
                items: state.items.map(item => {
                        if (item.id === action.payload) {
                            if(item.count > 0) {
                                return {...item, count: --item.count}
                            }
                            else return item
                        }
                        return item
                    }
                )
            };
        case GET_TOTAL_PRICE:
            let newTotalPrice = 0;
            state.items.forEach((item) => {
                newTotalPrice = newTotalPrice + (item.count*item.price);
            });
            return {...state, totalPrice: newTotalPrice};
        default:
            return state;
    }
};