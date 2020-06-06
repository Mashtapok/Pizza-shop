import {INCREASE, ADD} from "../actions/cartActions";
import {CartItemType} from "../../types/types";
import {act} from "react-dom/test-utils";

let initialState = {
    items: [
        {
            id: 1,
            title: 'Сырная',
            price: 300,
            description: 'Томатный соус, моцарелла',
            image: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
            count: 2
        },
        {
            id: 2,
            title: 'Пепперони',
            price: 350,
            description: 'Пикантная пепперони, томатный соус, моцарелла',
            image: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/4df905b0-0a43-4e95-a096-8e470918a267.jpg',
            count: 1
        }
    ] as Array<CartItemType>
};

type CartStateType = typeof initialState

export const cartReducer  = (state:CartStateType = initialState, action: {type: any; payload: any}):CartStateType => {
    switch (action.type) {
        case ADD:
            action.payload.price = action.payload.price * action.payload.count;
            return {...state, items: [...state.items, action.payload]};
        case INCREASE:
            return state;
        default:
            return state;
    }
};