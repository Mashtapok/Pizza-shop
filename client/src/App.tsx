import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/template/Header/Header";
import {Footer} from "./components/template/Footer/Footer";
import {Content} from "./components/template/Content/Content";
import {useAuth} from "./hooks/auth.hook";
import {useDispatch, useSelector} from "react-redux";
import { setItems } from './Redux/actions/cartActions';
import {RootState} from "./Redux/store";
import {CartItemType} from "./types/types";

const App: React.FC = () => {
    const {login, logout} = useAuth();
    const dispatch = useDispatch();

    // get products from ls
    useEffect(() => {
        const  cartData:Array<CartItemType> = JSON.parse(localStorage.getItem("cartItems") as string);
        if(cartData) {
            dispatch(setItems(cartData))
        }
    }, []);

    // add products to ls
    const items = useSelector((state:RootState) => state.cart.items);
    const filteredItem = items.filter(item => item.count > 0);
    useEffect(() => {
            localStorage.setItem("cartItems", JSON.stringify(filteredItem))
    }, [items]);

    return (
        <>
            <Header login={login} logout={logout}/>
            <Content/>
            <Footer/>
        </>
    );
};


export default App;
