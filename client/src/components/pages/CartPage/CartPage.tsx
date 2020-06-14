import React, {useEffect} from "react";
import styles from "./CartPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../Redux/store";
import { CartItem } from "./CartItem";
import {getTotalPrice} from "../../../Redux/actions/cartActions";

export const CartPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state:RootState) => state.cart.items);
    const filteredItems = items.filter(item => item.count > 0);
    useEffect(() => {
        dispatch(getTotalPrice())
    }, [filteredItems]);

    return (
        <div className="cart">
            <div className="header">
                <h3>Корзина</h3>
            </div>
            <div className={styles.cart__list}>
                {filteredItems.map(item => <CartItem key={item.id} id={item.id} title={item.title} price={item.price}
                                             description={item.description}
                                             image={item.image} count={item.count}/>)}
                {!filteredItems.length  && <p>Добавьте что-нибудь из меню</p>}
            </div>
        </div>
    );
};